import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { startApplicationPage, page } from "../../globalPagesSetup";
import { productInfo } from "../../utilities/qa-data-reader";

/**
 * Step Definitions for Start and Refund Dates
 */

// Background: given user is on the enrollment page
Given('user is on the enrollment page', async function () {
  await startApplicationPage.login();
});

// Scnario: Verify the start and refund dates for the program are displayed
Then('the program start date is displayed', async function () {
  await expect(startApplicationPage.programStartDate).toBeVisible();
});

Then('the program refund date is displayed', async function () {
  await expect(startApplicationPage.refundEndDate).toBeVisible();
});

// Scenario: Verify the start and refund dates for the program are correct
Then('the displayed start date for the program is correct', async function () {
  const programStartDate = await startApplicationPage.programStartDate.innerText();
  console.log(`Program Start Date: ${programStartDate}`);
  expect(programStartDate).toBe(productInfo.startDate);
});

Then('the displayed refund date for the program is correct', async function () {
  const programRefundDate = await startApplicationPage.refundEndDate.innerText();
  console.log(`Program Refund Date: ${programRefundDate}`);
  expect(programRefundDate).toBe(productInfo.refundDate);
});

// Scenario: Verify the program refund policy is displayed and correct
Then('the program refund policy is displayed', async function () {
  await expect(startApplicationPage.refundPolicy).toBeVisible();
});

Then('the refund policy details are correct', async function () {
    const refundPolicyText = await startApplicationPage.refundPolicy.innerText();
    console.log(`Refund Policy: ${refundPolicyText}`);
    // Check if the refund policy contains "100% refund"
    expect(refundPolicyText).toContain('100% refund');
});