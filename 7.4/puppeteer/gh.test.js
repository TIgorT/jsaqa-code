let page;

beforeEach(async () => {
  page = await browser.newPage();
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  beforeEach(async () => {
    await page.goto("https://github.com/team");
  });

  test("The h1 header content'", async () => {
    // const firstLink = await page.$("header div div a"); //Возможно данная строка лишняя? Так как проверяем заголовок на странице https://github.com/team
    // await firstLink.click();  //Возможно данная строка лишняя? Так как проверяем заголовок на странице https://github.com/team
    // await page.waitForSelector("h1");  //Возможно данная строка лишняя? Так как проверяем заголовок на странице https://github.com/team
    const title2 = await page.title();
    expect(title2).toEqual(
      "GitHub for teams · Build like the best teams on the planet · GitHub"
    );
  }, 15000);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", (link) => link.getAttribute("href"));
    expect(actual).toEqual("#start-of-content");
  }, 15000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(
      btnSelector,
      {
        visible: true,
      },
      15000
    );
    const actual = await page.$eval(btnSelector, (link) => link.textContent);
    expect(actual).toContain("Get started with Team");
  });
});

describe("Adding git tests", () => {
  test("The h1 header packages", async () => {
    await page.goto("https://github.com/features/packages");
    const title2 = await page.title();
    expect(title2).toEqual(
      "GitHub Packages: Your packages, at home with their code · GitHub"
    );
  }, 15000);

  test("The h1 header issues", async () => {
    await page.goto("https://github.com/features/issues");
    const title2 = await page.title();
    expect(title2).toEqual(
      "GitHub Issues · Project planning for developers · GitHub"
    );
  }, 15000);

  test("The h1 header ci-cd", async () => {
    await page.goto("https://github.com/solutions/ci-cd/");
    const title2 = await page.title();
    expect(title2).toEqual("A Complete CI/CD Solution | GitHub · GitHub");
  }, 15000);

  test("The h1 header customer-stories", async () => {
    await page.goto("https://github.com/customer-stories");
    const title2 = await page.title();
    expect(title2).toContain("Customer stories · GitHub");
  }, 15000);

  test("The first link attribute on the main page", async () => {
    await page.goto("https://github.com/");
    const actual = await page.$eval("[role='contentinfo']", (link) =>
      link.getAttribute("data-color-mode")
    );
    expect(actual).toEqual("dark");
  }, 12000);
});
