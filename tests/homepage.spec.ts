import test, { expect } from "@playwright/test";

test("Home page has title", async ({ page }) => {
  await page.goto("http://localhost:3000");

  await expect(page).toHaveTitle("BurgerHub App");
});
