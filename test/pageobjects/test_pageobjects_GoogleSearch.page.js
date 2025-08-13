// test/pageobjects/GoogleSearch.page.js
class GoogleSearchPage {
    get searchInput() { return $('[name="q"]'); }
    get resultStats() { return $('#result-stats'); }
    get results() { return $$('#search .g'); }

    async open() {
        await browser.url('/');
    }

    async search(text) {
        await this.searchInput.waitForDisplayed();
        await this.searchInput.setValue(text);
        await browser.keys('Enter');
    }

    async getResultsText() {
        await this.results[0].waitForDisplayed();
        return Promise.all((await this.results).map(async r => r.getText()));
    }
}

module.exports = new GoogleSearchPage();