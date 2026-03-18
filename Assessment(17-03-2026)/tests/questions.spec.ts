import { test } from "@playwright/test";
import Amazon from "./pom";
import fs from "fs";
import path from "path";

const data = JSON.parse(
  fs.readFileSync(path.join(__dirname, "test.json"), "utf-8")
);

test("Amazon Career - Apply filters and open job", async ({ page }) => {
  const amazonPage = new Amazon(page);

  await amazonPage.openPage(data.url);
  await amazonPage.openCareerPage();
  await amazonPage.openStudentOpportunities();
  await amazonPage.applyFilters(data.filters);
  
   await page.screenshot({ path:"Screenshots/Task28_2.png" });
  const [jobPage] = await Promise.all([
    page.waitForEvent("popup"),
    page.locator('//ul[@class="jobs-module_root__gY8Hp"]/li[2]/div/div/div/div/h3/a').click()
  ]);

  await amazonPage.applyOnJobPage(jobPage); 
   await page.screenshot({ path:"Screenshots/Task28.png" });
});