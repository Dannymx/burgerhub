import test, { expect } from "@playwright/test";

test.describe("home", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000");
  });

  test("homepage has title", async ({ page }) => {
    await expect(page).toHaveTitle("BurgerHub App");
  });

  test("homepage has main heading", async ({ page }) => {
    await expect(page.getByRole("navigation").getByRole("heading")).toHaveText(
      "Burger",
    );
  });
});
