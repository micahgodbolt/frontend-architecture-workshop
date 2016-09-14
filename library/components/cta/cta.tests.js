var expect = require("chai").expect;

describe("CTA", function() {
  before(function() {
		browser.url("/components/preview/cta");
		return browser;
	});

	it("callout should look like baseline", function() {
		return browser
			.compareScreen("cta",{
			  	name: "cta",
			  	elem: ".cta",
			  	screenWidth: [400]
			  });

	});
});
