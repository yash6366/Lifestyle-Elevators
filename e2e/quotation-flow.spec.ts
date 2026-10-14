import { test, expect } from '@playwright/test';

test.describe('Quotation & WhatsApp Lead Workflow', () => {
  test('preselects product when arrived with query parameter', async ({ page }) => {
    await page.goto('/quote?product=Hospital%20Lift');
    const select = page.getByLabel(/Selected Elevator or Service/i);
    await expect(select).toHaveValue('Hospital Lift');
  });

  test('intelligently maps plural catalog names to select option', async ({ page }) => {
    await page.goto('/quote?product=Hydraulic%20Elevators');
    const select = page.getByLabel(/Selected Elevator or Service/i);
    await expect(select).toHaveValue('Hydraulic Elevator');
  });

  test('validates form inputs and prevents submission when empty', async ({ page }) => {
    await page.goto('/quote');
    const nameInput = page.getByLabel(/Your Full Name/i);
    await expect(nameInput).toBeVisible();
    const submitBtn = page.getByRole('button', { name: /Request Quotation via WhatsApp/i });
    await submitBtn.click();

    await expect(page.getByText('Name must be at least 2 characters.')).toBeVisible();
    await expect(
      page.getByText('Please enter a valid phone number with at least 10 digits.')
    ).toBeVisible();
  });

  test('submits valid form and launches WhatsApp click-to-chat delivery', async ({ page }) => {
    await page.goto('/quote');
    const nameInput = page.getByLabel(/Your Full Name/i);
    await expect(nameInput).toBeVisible();

    await nameInput.fill('Naveen Gowda');
    await page.getByLabel(/Contact Phone Number/i).fill('+91 9986028416');
    await page.getByLabel(/Project Location/i).fill('Jayanagar, Bangalore');
    await page.getByLabel(/Specific Requirements/i).fill('4 Stops, SS Wooden Cabin');

    // Intercept or handle popup if opened
    const popupPromise = page.waitForEvent('popup').catch(() => null);

    const submitBtn = page.getByRole('button', { name: /Request Quotation via WhatsApp/i });
    await submitBtn.click();

    // Verify WhatsApp Click-to-Chat Launch state
    await expect(page.getByTestId('whatsapp-success-banner')).toBeVisible();
    await expect(
      page.getByText(/Your quotation message is ready\. WhatsApp will open/i)
    ).toBeVisible();
    await expect(
      page.getByText(/undergoing final client verification/i)
    ).not.toBeVisible();

    const popup = await popupPromise;
    if (popup) {
      expect(popup.url()).toContain('917795551118');
      await popup.close();
    }
  });

  test('submits valid contact form and launches WhatsApp delivery', async ({ page }) => {
    await page.goto('/contact');
    const nameInput = page.getByLabel(/Your Name/i);
    await expect(nameInput).toBeVisible();

    await nameInput.fill('Kiran Rao');
    await page.getByLabel(/Phone Number/i).fill('+91 9986028416');
    await page.getByLabel(/Enquiry Subject/i).fill('Elevator Maintenance AMC');
    await page.getByLabel(/Your Message/i).fill(
      'Need quotation for AMC service for residential lift in Bangalore.'
    );

    const popupPromise = page.waitForEvent('popup').catch(() => null);

    const submitBtn = page.getByRole('button', { name: /Submit Enquiry/i });
    await submitBtn.click();

    // Verify WhatsApp Opened state
    await expect(page.getByText('WhatsApp Opened')).toBeVisible();
    await expect(
      page.getByText(/Your inquiry has been formatted and opened in WhatsApp/i)
    ).toBeVisible();

    const popup = await popupPromise;
    if (popup) {
      expect(popup.url()).toContain('917795551118');
      await popup.close();
    }
  });

  test('renders verified WhatsApp click-to-chat floating button with target number', async ({ page }) => {
    await page.goto('/');
    const waLink = page.getByRole('link', { name: /Chat with Lifestyle Elevators on WhatsApp/i });
    await expect(waLink).toBeVisible();
    await expect(waLink).toHaveAttribute('href', /wa\.me\/917795551118/);
  });
});

