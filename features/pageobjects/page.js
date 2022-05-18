export default class Page {
  open(path) {
    return browser.url(`https://duckduckgo.com/${path}`);
  }
}
