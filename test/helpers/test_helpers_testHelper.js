// test/helpers/testHelper.js
const { expect } = require('chai');

exports.expectResultsContain = function(results, keyword) {
    expect(results.some(r => r.toLowerCase().includes(keyword.toLowerCase())))
        .to.be.true;
};