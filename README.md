# End-to-end Testing with Playwright

## Introduction

This repository contains a end-to-end project set up with playwright in order to test the google.com/maps. Below you will find information on the project setup, running tests, and reports.

## Technologies

* [Playwright](https://playwright.dev/): Playwright Test was created specifically to accommodate the needs of end-to-end testing. Playwright supports all modern rendering engines including Chromium, WebKit, and Firefox. Test on Windows, Linux, and macOS, locally or on CI, headless or headed with native mobile emulation of Google Chrome for Android and Mobile Safari.
* [TypeScript Playwright for Node.js](https://playwright.dev/docs/languages#javascript-and-typescript) comes with its own test runner that provides great parallelization mechanism, screenshot assertions, html reporter, automatic tracing etc.

## Requirements

- Node.js 18+
- Windows 10+, Windows Server 2016+ or Windows Subsystem for Linux (WSL).
- macOS 13 Ventura, or macOS 14 Sonoma.
- Debian 11, Debian 12, Ubuntu 20.04 or Ubuntu 22.04, Ubuntu 24.04, on x86-64 and arm64 architecture.

## How to Set Up

To install all the necessary dependencies, run `npm install`.

## Folder Structure

The following is the suggested folder structure for Playwright tests:

* `playwright`
    * `.github`: contains a template for GitHub actions.
    * `pages`: contains the page objects to be used on the spec tests
    * `resources`: contains test data and files to be used in tests.
    * `tests`: contains the specifications for the tests.
        * `demo.spec.js`: a sample specification.

## How to Run

To run the tests, you can use either on the terminal on headless mode or via Playwright UI. The following commands will be useful:

* `npm run e2e:allTests`: runs all the tests in headless browser.
* `npm run e2e:openUi`: Run your tests with UI Mode for a better developer experience with time travel debugging, watch mode, and more with [trace-view](https://playwright.dev/docs/trace-viewer-intro).

The tests run in parallel, and the default configuration is set up to run on Chrome. However, it is possible to set up the tests to run on Edge, Firefox, and mobile emulators(for mobile it would be needed changes on the test code as the same scenarios has different behavior).

After running your test you can open the report:

* `npm run e2e:openReport`: will open an HTML Reporter, which shows you a full report of your tests allowing you to filter the report by browsers, passed tests, failed tests, skipped tests, and flaky tests.

## HTML Report

HTML reporter produces a self-contained folder that contains report for the test run that can be served as a web page.

The report contains the running scenarios, if you open the view trace functionality, you can follow your test by clicking through each action or hovering using the timeline and see the state of the page before and after the action. Inspect the log, source and network, errors and console during each step of the test. The trace viewer creates a DOM snapshot so you can fully interact with it and open the browser DevTools to inspect the HTML, CSS, etc.

### Investigating failures

When failures happen in the CI you can download the summary, open the report, and click on the [trace-view](https://playwright.dev/docs/trace-viewer-intro) icon to follow up what is wrong.

## GitHub Actions Integration

You can also change the baseUrl setting up the env variable `BASE_URL` [here](https://github.com/tuliobluz/map/blob/main/playwright.config.ts#L19)

This project includes a GitHub Actions workflow for running playwright end-to-end tests. The workflow is triggered when you push changes to the repository. The following steps are executed:

1. Install the project dependencies.
2. Install browsers
3. Run Playwright tests and generate a HTML report.
4. Upload the HTML report as an artifact.

The generated HTML report can be accessed through the GitHub Actions summary.

### Openning the html report from the GitHub [Actions](https://github.com/tuliobluz/map/actions)

You can donwload the artifact opening a run and downloading the playwright-report

Viewing the HTML Report Locally opening the report will not work as expected as you need a web server in order for everything to work correctly. First, extract the zip, preferably in a folder that already has Playwright installed. Using the command line change into the directory where the report is and use npx playwright show-report followed by the name of the extracted folder. This will serve up the report and enable you to view it in your browser.

`npx playwright show-report name-of-my-extracted-playwright-report`

## Slack Integration

After running the playwright-map, the GitHub Actions workflow sends a message to Slack channels. Currently, the message is sent when the job succeeds. In a real scenario, notifications can be sent for successful and failed jobs.

If you want to join the Slack channel for integration, please use the following invitation link: [Slack Invitation Link](https://join.slack.com/t/github-integrationhq/shared_invite/zt-2q65wlp10-Gn4_m~YTN9gfhvq_ykw9oQ)
