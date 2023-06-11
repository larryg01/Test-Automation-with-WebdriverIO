"strict mode";
import LoginPage from "../pageobjects/login.page.js";
import SecurePage from "../pageobjects/secure.page.js";
import LandingPage from "../pageobjects/landing.page.js";
import KeyPressesPage from "../pageobjects/Inputs.page.js";
import TyposPage from "../pageobjects/typos.page.js";
import * as helpers from "../../helpers/helpers.js";
import dynamicLoadingPage from "../pageobjects/dynamicLoading.page.js";

describe("Chapter 12: Superhero Landing", () => {
  fit("Spec and Allure: Cub Reporter vs. Star Journalist", async () => {
    // Chapter 3 Revised with COLOR!
    console.log(`Hello, World!`); // Intrinsic log
    await helpers.log(`Hello, World!`); // Custom log
    await helpers.log(`DONE!`); // Custom log

    await helpers.log(`Hello, World!`);
    await helpers.log(`PASS: You are never too old to set another goal or to dream a new dream. -- C.S. Lewis`);
    await helpers.log(`FAIL: It's never too late to go back to bed.`);
    await helpers.log(`WARN: Earth is mostly harmless`);
    await helpers.log(``); // Does not print
    await helpers.log(null); // Does not print
    await helpers.log(Promise); // Adds trace back
  });
}