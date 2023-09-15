const { test, expect } = require("@playwright/test");
const {
  validEmail,
  validPassword,
  invalidEmail,
  invalidPassword,
} = require("../user.js");

test("test successful authorization", async ({ page }) => {
  await page.goto("https://netology.ru/");
  await page.click("//a[contains(text(),'Войти')]");
  await expect(page).toHaveURL("https://netology.ru/?modal=sign_in");
  await page.screenshot({
    path: `screenshot/` + `LoginToYourPersonalAccount.png`,
  });
  await page.click("[placeholder ='Email']");
  await page.fill("[placeholder ='Email']", validEmail);
  await page.click("[name ='password']");
  await page.fill("[name ='password']", validPassword);
  await page.click("[data-testid ='login-submit-btn']");
  await expect(page).toHaveURL("https://netology.ru/profile");
  await expect(page.locator("//h2")).toContainText("Моё обучение");
  await page.screenshot({
    path: `screenshot/` + `PersonalAccount.png`,
  });
});

test("test unsuccessful authorization", async ({ page }) => {
  await page.goto("https://netology.ru/");
  await page.click("//a[contains(text(),'Войти')]");
  await expect(page).toHaveURL("https://netology.ru/?modal=sign_in");
  await page.click("[placeholder ='Email']");
  await page.fill("[placeholder ='Email']", invalidEmail);
  await page.click("[name ='password']");
  await page.fill("[name ='password']", invalidPassword);
  await page.click("[data-testid ='login-submit-btn']");

  const errorMessage = await page.locator("[data-testid ='login-error-hint']");
  //expect(await errorMessage.isVisible()).toBe(true);
  await expect(errorMessage).toHaveText(
    "Вы ввели неправильно логин или пароль"
  );
  await expect(errorMessage).toBeVisible();
  await page.screenshot({
    path: `screenshot/` + `LoginError.png`,
  });
});
