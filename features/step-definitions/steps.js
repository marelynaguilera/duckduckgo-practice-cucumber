import { Given, When, Then } from "@wdio/cucumber-framework";

import ThemePage from "../pageobjects/theme.page.js";
import HomePage from "../pageobjects/home.page";
import SettingsPage from "../pageobjects/settings.page";
import duckduckgoAPI from "../../helpers/duckduckgo-api";

const pages = {
  theme: ThemePage,
  home: HomePage,
  settings: SettingsPage,
};

Given(/^I am on the (\w+) page$/, async (page) => {
  await pages[page].open();
});

When(/^I change the theme to (\w+)$/, async (theme) => {
  await ThemePage.changeTheme(theme);
});

Then(/^I can see the background color is (.*)$/, async (backgroundColor) => {
  await expect(await HomePage.body).toBeExisting();
  let background = await HomePage.body.getCSSProperty("background-color");
  await expect(background.value).toBe(backgroundColor);
});

When(/^I change the language to "(.*)"$/, async (language) => {
  await SettingsPage.changeLanguage(language);
});

Then(/^I can see the current language is "(.*)"$/, async (language) => {
  await expect(await SettingsPage.dropdownLanguage).toBeExisting();
  const selectedLanguageValue = await SettingsPage.dropdownLanguage.getValue();
  const selectedLanguage = await SettingsPage.dropdownLanguage
    .$(`[value='${selectedLanguageValue}']`)
    .getText();
  await expect(selectedLanguage).toBe(language);
});

When(/^I search "(.*)"$/, async (q) => {
  await HomePage.search(q);
});

Then(
  /^a picture of "(.*)" is displayed in the search results page$/,
  async (q) => {
    await expect(await HomePage.profilePicture).toBeExisting();
  }
);

Then(/^there is at least one "(.*)" page result$/, async (site) => {
  const linksWikipedia = await HomePage.getResultsUrl(site);
  await expect(linksWikipedia).toBeElementsArrayOfSize({ gte: 1 });
});

Given(/^I am connected to "(.*)" API$/, async (q) => {
  const searchCode = await duckduckgoAPI.getResponse(q);
  await expect(searchCode.status).toBe(200);
});

When(/^I search for "(.*)"$/, async (q) => {
  const searchResults = await duckduckgoAPI.getData(q);
});

When(/^I can print images retrieved for "(.*)"$/, async (q) => {
  console.log("*********************** IMAGES ***************************");
  const searchResults = await duckduckgoAPI.getData(q);
  const relatedTopics = searchResults.RelatedTopics;
  relatedTopics.forEach(function (relatedTopic) {
    if (relatedTopic.Icon) {
      console.log(`${relatedTopic.Icon.URL}`);
    } else if (relatedTopic.Topics.Icon) {
      console.log(`${relatedTopic.Topics.Icon.URL}`);
    }
  });
});

When(/^I can print urls retrieved for "(.*)"$/, async (q) => {
  console.log("*********************** URLs ***************************");
  const searchResults = await duckduckgoAPI.getData(q);
  const relatedTopics = searchResults.RelatedTopics;
  relatedTopics.forEach(function (relatedTopic) {
    if (relatedTopic.FirstURL) {
      console.log(`${relatedTopic.FirstURL}`);
    } else if (relatedTopic.Topics) {
      console.log(`${relatedTopic.Topics.FirstURL}`);
    }
  });
  const results = searchResults.Results;
  results.forEach(function (relatedTopic) {
    if (relatedTopic.FirstURL) {
      console.log(`${relatedTopic.FirstURL}`);
    }
  });
});
