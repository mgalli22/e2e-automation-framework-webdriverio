// test/specs/google.search.e2e.js
const GoogleSearchPage = require('../pageobjects/GoogleSearch.page');
const { expectResultsContain } = require('../helpers/testHelper');
const searchData = require('../data/searchData.json');
const apiService = require('../services/api.service');

describe('Google Search Advanced E2E', () => {
    it('should search for a valid term and check results', async () => {
        await GoogleSearchPage.open();
        await GoogleSearchPage.search(searchData.validSearch);
        const results = await GoogleSearchPage.getResultsText();
        expectResultsContain(results, searchData.validSearch);
    });

    it('should integrate with API and search a category', async () => {
        // Backend integration example: obtengo una categoria real de una API pública
        const categories = await apiService.getCategories();
        const randomCategory = categories[Math.floor(Math.random() * categories.length)];
        await GoogleSearchPage.open();
        await GoogleSearchPage.search(randomCategory);
        const results = await GoogleSearchPage.getResultsText();
        expectResultsContain(results, randomCategory);
    });

    it('should handle no results gracefully', async () => {
        await GoogleSearchPage.open();
        await GoogleSearchPage.search(searchData.invalidSearch);
        // Puedes expandir con asserts de UI para "no results" según la respuesta real de Google
    });
});