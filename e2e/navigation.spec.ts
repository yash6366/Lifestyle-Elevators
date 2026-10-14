import { test, expect } from '@playwright/test';

test.describe('Website Navigation & Page Sanity', () => {
  test('home page loads with correct branding and hero content', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Lifestyle Elevators/);
    await expect(page.locator('h1')).toContainText('Precision Vertical Movement');
    await expect(page.getByRole('link', { name: /Get a Quotation/i })).toBeVisible();
    await expect(page.getByText('No. 203, 1st Main, 5th Cross')).toBeVisible();
  });

  test('about page displays safety features and sourcing statement', async ({ page }) => {
    await page.goto('/about');
    await expect(page.locator('h1')).toContainText('About Lifestyle Elevators');
    await expect(page.getByText('Automatic Rescue Device (ARD)')).toBeVisible();
    await expect(page.getByText('Montanari Geared & Gearless Motors')).toBeVisible();
  });

  test('products page lists all 6 elevators and dimension tables', async ({ page }) => {
    await page.goto('/products');
    await expect(page.locator('h1')).toContainText('Our Elevator Products');
    await expect(page.getByRole('heading', { level: 3, name: 'Passenger Lift' })).toBeVisible();
    await expect(page.getByRole('heading', { level: 3, name: 'Hospital Lift' })).toBeVisible();
    await expect(page.getByRole('heading', { level: 3, name: 'Home Lift' })).toBeVisible();
    await expect(page.getByRole('heading', { level: 3, name: 'Goods Lift' })).toBeVisible();
    await expect(page.getByRole('heading', { level: 3, name: 'Hydraulic Elevators' })).toBeVisible();
    await expect(
      page.getByRole('heading', { level: 3, name: 'Machine Room-Less (MRL) Elevators' })
    ).toBeVisible();
    await expect(
      page.getByText('Passenger Elevators Standard Dimensions')
    ).toBeVisible();
  });

  test('services page displays all 4 services and AMC details', async ({ page }) => {
    await page.goto('/services');
    await expect(page.locator('h1')).toContainText('Our Elevator Services');
    await expect(
      page.getByRole('heading', { level: 3, name: 'Manufacturing & Supply' })
    ).toBeVisible();
    await expect(
      page.getByRole('heading', { level: 3, name: 'Elevator Installation' })
    ).toBeVisible();
    await expect(
      page.getByRole('heading', { level: 3, name: 'Repair & Service Support' })
    ).toBeVisible();
    await expect(
      page.getByRole('heading', { level: 3, name: 'Annual Maintenance Contract (AMC)' })
    ).toBeVisible();
  });

  test('brochure page displays download and share actions', async ({ page }) => {
    await page.goto('/brochure');
    await expect(page.locator('h1')).toContainText('Company Brochure');
    await expect(page.getByRole('link', { name: /Download PDF File/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /Share Brochure/i })).toBeVisible();
  });

  test('contact page displays office coordinates and phone numbers', async ({ page }) => {
    await page.goto('/contact');
    await expect(page.locator('h1')).toContainText('Contact Lifestyle Elevators');
    await expect(page.locator('#main-content').getByText('+91 77955 51118')).toBeVisible();
    await expect(page.locator('#main-content').getByText('+91 99860 28416')).toBeVisible();
    await expect(page.locator('#main-content').getByText('lifestyleelevator2025@gmail.com')).toBeVisible();
  });
});
