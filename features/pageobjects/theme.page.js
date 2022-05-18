import Page from "./page";

class ThemePage extends Page {
  open() {
    return super.open("settings#theme");
  }

  get buttonSaveAndExit() {
    return $(".js-set-exit");
  }

  async changeTheme(theme) {
    const availableThemes = {
      Default: "-1",
      Basic: "b",
      Contrast: "c",
      Dark: "d",
      Gray: "g",
      Terminal: "t",
    };

    const labelTheme = await $(
      `//label[@for="setting_kae_${availableThemes[theme]}" and @class="set-theme"]`
    );
    await labelTheme.click();
    await this.buttonSaveAndExit.click();
  }
}

export default new ThemePage();
