"strict mode";
import LoginPage from "../pageobjects/login.page.js";
import SecurePage from "../pageobjects/secure.page.js";
import LandingPage from "../pageobjects/landing.page.js";
import KeyPressesPage from "../pageobjects/Inputs.page.js";
import TyposPage from "../pageobjects/typos.page.js";
import * as helpers from "../../helpers/helpers.js";
import dynamicLoadingPage from "../pageobjects/dynamicLoading.page.js";

describe("Chapter 12: Superhero Landing", () => {
  it("Spec and Allure: Cub Reporter vs. Star Journalist", async () => {
    // Chapter 3
    console.log(`Hello, World!`); // Intrinsic log
    await helpers.log(`Hello, World!`); // Custom log
    await helpers.sleep(1000); // Wait 1 sec
    await helpers.log(`DONE!`); // Custom log
  });
}