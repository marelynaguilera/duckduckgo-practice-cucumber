import Page from "./page";

class SettingsPage extends Page {
  open() {
    return super.open("settings");
  }

  get dropdownLanguage() {
    return $("#setting_kad");
  }

  async changeLanguage(language) {
    let dropdownLanguage = await this.dropdownLanguage;
    await dropdownLanguage.selectByVisibleText(language);
  }
}

export default new SettingsPage();
