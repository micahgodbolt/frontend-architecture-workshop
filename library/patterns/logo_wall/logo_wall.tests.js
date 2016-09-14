var expect = require("chai").expect;

describe("Logo Wall", function() {
  before(function() {
		browser.url("/components/preview/logo_wall");
		return browser;
	});

	it("callout should look like baseline", function() {
		return browser
			.compareScreen("logo_wall",{
			  	name: "logo_wall",
			  	elem: ".band",
			  	screenWidth: [800]
			  });

	});
});
