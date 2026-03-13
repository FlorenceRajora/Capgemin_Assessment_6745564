import { test, expect } from '@playwright/test';

test('Verify file upload', async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/upload");
    await page.locator('#file-upload').setInputFiles('testdata/sample.txt');
    await page.locator('#file-submit').click();
    await expect(page.locator('#uploaded-files')).toHaveText('sample.txt');
    await page.screenshot({ path: 'Screenshots/task22.png', fullPage: true });

});