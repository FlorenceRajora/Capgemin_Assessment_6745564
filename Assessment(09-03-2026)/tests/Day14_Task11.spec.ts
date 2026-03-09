import { test, expect } from "@playwright/test";

test("qspider", async ({ page }) => {
  await page.setDefaultTimeout(20000);
  await page.goto("https://demoapps.qspiders.com/ui?scenario=1");
  let name = await page.getByLabel("name");
  let email = await page.getByLabel("email");
  let pass = await page.getByLabel("password");
  let submit = await page.getByRole("button", { name: "Register" });
  await name.fill("Florence");
  await email.fill("florence@gmail.com");
  await pass.fill("123456");
  await expect(name).toHaveValue("Florence");
  await expect(email).toHaveValue("florence@gmail.com");
  await expect(pass).toHaveValue("123456");
  await expect(submit).toBeVisible();
  await expect(submit).toBeInViewport();

  await submit.click();
  await page.screenshot({path:"screeshot/task1.png"});

});