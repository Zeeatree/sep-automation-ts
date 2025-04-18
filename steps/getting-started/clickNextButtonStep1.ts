import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import {
  startApplicationPage,
  page,
  paymentPlanPage,
} from "../../globalPagesSetup";
import { productInfo } from "../../utilities/qa-data-reader";
import { faker } from "@faker-js/faker";
import { start } from "repl";

/**
 * Step Definitions for Click Next Button on Step 1
 */

// Background: given user is on the enrollment page
Given("user is on the enrollment page", async function () {
  await startApplicationPage.login();
});

When("I fill in all the fields with valid information", async function () {
  await startApplicationPage.firstNameInputBox.fill(faker.person.firstName());
  await startApplicationPage.lastNameInputBox.fill(faker.person.lastName());
  await startApplicationPage.emailInputBox.fill(faker.internet.email());
  await startApplicationPage.phoneNumberInputBox.fill(
    faker.phone.number().replace(/\D/g, "").slice(0, 10)
  );
  await startApplicationPage.howDidYouHearAboutUsDropDown.click();
  await startApplicationPage.googleOption.click();
});

When("I click on the next button", async function () {
  await page.waitForTimeout(3000);
  await startApplicationPage.nextButton.click();
  await page.waitForTimeout(3000);
});

Then("I should be taken to step 2", async function () {
  await paymentPlanPage.chooseAPaymentPlanText.isVisible();
});

When("I fill in only the required fields with valid information", async function () {
  await startApplicationPage.firstNameInputBox.fill(faker.person.firstName());
  await startApplicationPage.lastNameInputBox.fill(faker.person.lastName());
  await startApplicationPage.emailInputBox.fill(faker.internet.email());
  await startApplicationPage.phoneNumberInputBox.fill(
    faker.phone.number().replace(/\D/g, "").slice(0, 10)
  );
});


When("I leave all the fields empty", async function () {
  await startApplicationPage.firstNameInputBox.fill("");
  await startApplicationPage.lastNameInputBox.fill("");
  await startApplicationPage.emailInputBox.fill("");
  await startApplicationPage.phoneNumberInputBox.fill("");
  await startApplicationPage.howDidYouHearAboutUsDropDown.click();
  await startApplicationPage.googleOption.click();
});

Then("I should see input labels turn red", async function () {
  await startApplicationPage.firstNameInputLabel.isVisible();
  await startApplicationPage.firstNameInputLabel.evaluate((el) => {
    return el.style.color === 'red';
  });
});


