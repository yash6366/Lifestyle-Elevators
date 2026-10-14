import { test, expect } from '@playwright/test';

test.describe('Quotation & WhatsApp Lead Workflow', () => {
  test('preselects product when arrived with query parameter', async ({ page }) => {
    await page.goto('/quote?product=Hospital%20Lift');
    const select = page.getByLabel(/Selected Elevator or Service/i);
    await expect(select).toHaveValue('Hospital Lift');
  });

  test('validates form inputs and prevents submission when empty', async ({ page }) => {
    await page.goto('/quote');
    const submitBtn = page.getByRole('button', { name: /Request Quotation via WhatsApp/i });
    await submitBtn.click();

    await expect(page.getByText('Name must be at least 2 characters.')).toBeVisible();
    await expect(
      page.getByText('Please enter a valid phone number with at least 10 digits.')
    ).toBeVisible();
  });

  test('submits valid form and triggers unconfigured fallback notice safely', async ({ page }) => {
    await page.goto('/quote');

    await page.getByLabel(/Your Full Name/i).fill('Naveen Gowda');
    await page.getByLabel(/Contact Phone Number/i).fill('+91 9986028416');
    await page.getByLabel(/Project Location/i).fill('Jayanagar, Bangalore');
    await page.getByLabel(/Specific Requirements/i).fill('4 Stops, SS Wooden Cabin');

    const submitBtn = page.getByRole('button', { name: /Request Quotation via WhatsApp/i });
    await submitBtn.click();

    // Fallback notice should appear
    await expect(page.getByText('Quotation Formatted & Ready')).toBeVisible();
    await expect(page.getByText(/Naveen Gowda/)).toBeVisible();
    await expect(page.getByRole('button', { name: /Copy Quotation Text/i })).toBeVisible();
  });
});
