import Page from "./page";

class HomePage extends Page {
  open() {
    return super.open("");
  }

  get body() {
    return $("body");
  }

  get inputSearch() {
    return $("#search_form_input_homepage");
  }

  get buttonSearch() {
    return $("#search_button_homepage");
  }

  get profilePicture() {
    return $("//a[@class='module__image']/img");
  }

  get linksWikipedia() {
    return $$('//a[contains(@href, "wikipedia.org")]');
  }

  async getResultsUrl(site) {
    return $$(`//a[contains(@href, "${site}")]`);
  }

  async search(q) {
    await this.inputSearch.setValue(q);
    await this.buttonSearch.click();
  }
}

export default new HomePage();
