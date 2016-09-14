var expect = require("chai").expect;

describe("Band Header", function() {
  before(function() {
		browser.url("/components/preview/band_header");
		return browser;
	});

	it("callout should look like baseline", function() {
		return browser
			.compareScreen("band_header",{
			  	name: "band_header",
			  	elem: ".band-header",
			  	screenWidth: [800]
			  });

	});
});
