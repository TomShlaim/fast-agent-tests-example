import { test, expect } from '@playwright/test';

test('Login happy flow - successful login and redirect to homepage', async ({ page }) => {
  // Navigate to the login page
  await page.goto('http://localhost:3000/login');
  
  // Verify login page is loaded
  await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
  
  // Fill in login form
  await page.getByLabel('Email').fill('test@example.com');
  await page.getByLabel('Password').fill('password123');
  
  // Click the login button
  await page.getByRole('button', { name: 'Sign In' }).click();
  
  // Verify redirection to homepage
  await expect(page).toHaveURL('http://localhost:3000/');
  
  // Verify homepage elements are visible after successful login
  await expect(page.getByRole('heading', { name: 'Tung Tung Tung Sahur' })).toBeVisible();
  await expect(page.getByText('Wake up! It\'s time for Sahur!')).toBeVisible();
  
  // Verify logout button is available, confirming logged-in state
  await expect(page.getByRole('button', { name: 'Log Out' })).toBeVisible();
}); 