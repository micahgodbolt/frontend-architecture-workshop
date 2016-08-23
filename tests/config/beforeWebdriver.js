require("webdrivercss").init(browser, browser.options.plugins.webdrivercss);

var expect = require("chai").expect;
var _ = require("lodash");
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");

// Set Up Chai As Promised

chaiAsPromised.transferPromiseness = browser.transferPromiseness;
chai.use(chaiAsPromised);
chai.Should();

// Create a checkMismatch function

var checkMismatch = function(err, res) {
 expect(err).to.not.exist;

 _.forOwn(res, function(elementShots) {
  elementShots.forEach(function(shot) {
   var msg = shot.message;

   if (shot.properties) {
    msg = "'" + shot.properties.name + "' visual " + msg;
   }

   expect(shot.isWithinMisMatchTolerance).to.equal(true, msg);
  });
 });
};

/**
 * WebdriverCSS command with screenshot mismatch assertion.
 * Call it in the exact same manner as you call WebdriverCSS, apart from the assertion function
 *
 * @param {string} name - Name of screenshots
 * @param {boolean} selectors - element information to capture
 * @example
 * browser.compareScreen("toolbar", {
 *  name: "toolbar",
 *  elem: ".toolbar"
 * })
 */

browser.addCommand("compareScreen", function(name, selectors) {
    return this.webdrivercss(name, selectors, checkMismatch);
});
