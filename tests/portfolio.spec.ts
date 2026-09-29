import { AxeBuilder } from '@axe-core/playwright';
import { expect, test, type Page } from '@playwright/test';

function projectSummaries(page: Page) {
  return page.locator('summary').filter({ hasText: 'Explorar proyecto' });
}

async function expandProjects(page: Page) {
  const summaries = projectSummaries(page);
  expect(await summaries.count()).toBeGreaterThan(0);
  for (const summary of await summaries.all()) {
    await summary.click();
  }
}

async function expectNoHorizontalOverflow(page: Page, width: number) {
  const dimensions = await page.locator('html').evaluate(async (element) => {
    await element.ownerDocument.fonts.ready;
    return {
      viewport: element.clientWidth,
      content: Math.max(element.scrollWidth, element.ownerDocument.body.scrollWidth),
    };
  });
  expect(dimensions.content, `Contenido desbordado con viewport de ${width}px`).toBeLessThanOrEqual(
    dimensions.viewport + 1,
  );
}

test('navegación principal, contacto y CV mantienen un recorrido completo', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('main')).toHaveCount(1);
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

  await page.getByRole('navigation', { name: 'Navegación principal' })
    .getByRole('link', { name: 'Proyectos', exact: true }).click();
  await expect(page).toHaveURL(/\/#proyectos$/);
  await expect(page.locator('#proyectos').getByRole('heading', { level: 2 })).toBeInViewport();

  await page.getByRole('link', { name: 'Hablemos', exact: true }).click();
  await expect(page).toHaveURL(/\/#contacto$/);
  await expect(page.locator('#contacto a[href^="mailto:"]').first())
    .toHaveAttribute('href', /^mailto:[^@\s]+@[^@\s]+\.[^@\s]+$/);

  await page.getByRole('link', { name: 'Currículum', exact: true }).click();
  await expect(page).toHaveURL(/\/cv\/?$/);
  await expect(page.getByRole('heading', { level: 1, name: 'Fermín Alliot' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Proyectos seleccionados', exact: true })).toBeVisible();
  await page.getByRole('link', { name: /Volver al portfolio/ }).click();
  await expect(page).toHaveURL(/\/$/);
});

test('los casos se pueden abrir y cerrar con el teclado', async ({ page }) => {
  await page.goto('/');
  const details = page.locator('details').filter({ hasText: 'Explorar proyecto' }).first();
  const summary = details.locator('summary');
  const challenge = details.getByRole('heading', { name: 'El desafío', exact: true });

  await expect(challenge).toBeHidden();
  await summary.focus();
  await expect(summary).toBeFocused();
  await summary.press('Enter');
  await expect(challenge).toBeVisible();
  await expect(details.getByRole('heading', { name: 'La solución', exact: true })).toBeVisible();
  await expect(details.getByRole('listitem').first()).toBeVisible();

  await summary.press('Space');
  await expect(challenge).toBeHidden();
});

test('el archivo expone proyectos adicionales y sus descripciones', async ({ page }) => {
  await page.goto('/');
  const summary = page.locator('summary').filter({ hasText: 'También en mi recorrido' });
  const archive = page.locator('details').filter({ has: summary });
  const articles = archive.getByRole('article');

  await expect(articles.first()).toBeHidden();
  await summary.click();
  expect(await articles.count()).toBeGreaterThan(1);
  for (const article of await articles.all()) {
    await expect(article.getByRole('heading', { level: 3 })).toBeVisible();
    await expect(article.locator('p').last()).not.toBeEmpty();
  }
});

test('las fuentes públicas no exponen repositorios privados', async ({ page }) => {
  // Lista independiente de fuentes públicas verificadas durante la investigación.
  // No se incluyen identificadores privados ni se consultan servicios externos.
  const allowedPaths = new Set([
    '/falliot00',
    '/falliot00/utn-tupad-p2-tfi',
    '/falliot00/growthness-web',
    '/falliot00/utn-tupad-p1',
  ]);

  for (const path of ['/', '/cv/']) {
    await page.goto(path);
    const githubLinks = await page.locator('a[href*="github.com"]').evaluateAll((links) =>
      links.map((link) => link.getAttribute('href')),
    );
    expect(githubLinks.length).toBeGreaterThan(1);
    for (const href of githubLinks) {
      expect(href).not.toBeNull();
      const url = new URL(href ?? '');
      expect(url.protocol).toBe('https:');
      expect(url.hostname).toBe('github.com');
      expect(allowedPaths.has(url.pathname.replace(/\/$/, '').toLowerCase()), `Fuente no aprobada: ${url.pathname}`).toBe(true);
    }
  }
});

test('el control del CV abre la impresión y desaparece en la versión impresa', async ({ page }) => {
  await page.addInitScript(() => {
    globalThis.print = () => {
      globalThis.document.documentElement.dataset.printRequested = 'true';
    };
  });
  await page.goto('/cv/');
  const printButton = page.getByRole('button', { name: /Imprimir.*Guardar PDF/ });
  await expect(printButton).toBeVisible();
  await printButton.click();
  await expect(page.locator('html')).toHaveAttribute('data-print-requested', 'true');

  await page.emulateMedia({ media: 'print' });
  await expect(printButton).toBeHidden();
  await expect(page.getByRole('heading', { level: 1, name: 'Fermín Alliot' })).toBeVisible();
});

test('landing, casos abiertos y CV caben en pantallas pequeñas y de escritorio', async ({ page }) => {
  for (const width of [320, 375, 1440]) {
    await page.setViewportSize({ width, height: 960 });
    await page.goto('/');
    await expectNoHorizontalOverflow(page, width);
    await expandProjects(page);
    await page.locator('summary').filter({ hasText: 'También en mi recorrido' }).click();
    await expectNoHorizontalOverflow(page, width);
    await page.goto('/cv/');
    await expectNoHorizontalOverflow(page, width);
  }
});

test.describe('sin JavaScript', () => {
  test.use({ javaScriptEnabled: false });

  test('el contenido y los detalles funcionan con alternativa para imprimir', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('main')).toBeVisible();
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    const details = page.locator('details').filter({ hasText: 'Explorar proyecto' }).first();
    const summary = details.locator('summary');
    await summary.focus();
    await summary.press('Enter');
    await expect(details.getByRole('heading', { name: 'La solución', exact: true })).toBeVisible();

    const cvLink = page.getByRole('link', { name: 'Ver mi CV', exact: true });
    await cvLink.focus();
    await expect(cvLink).toBeFocused();
    await cvLink.press('Enter');
    await expect(page).toHaveURL(/\/cv\/?$/);
    await expect(page.getByRole('heading', { level: 1, name: 'Fermín Alliot' })).toBeVisible();
    // Text locators intentionally skip <noscript>; inspect the rendered fallback directly.
    const printFallback = page.locator('noscript');
    await expect(printFallback).toBeVisible();
    expect(await printFallback.textContent()).toContain('usá la opción Imprimir de tu navegador');
    await expect(page.getByRole('button', { name: /Imprimir.*Guardar PDF/ })).toBeHidden();
  });
});

test('home, casos expandidos y CV no presentan infracciones automáticas WCAG A/AA', async ({ page }) => {
  const audit = async (state: string) => {
    const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']).analyze();
    expect(results.violations, `Accesibilidad: ${state}`).toEqual([]);
  };

  await page.goto('/');
  await audit('landing');
  await expandProjects(page);
  await page.locator('summary').filter({ hasText: 'También en mi recorrido' }).click();
  await audit('casos y archivo expandidos');
  await page.goto('/cv/');
  await audit('currículum');
});
