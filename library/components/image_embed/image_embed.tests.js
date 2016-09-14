var expect = require("chai").expect;

describe("Image Embed", function() {
  before(function() {
		browser.url("/components/preview/image_embed");
		return browser;
	});

	it("callout should look like baseline", function() {
		return browser
			.compareScreen("image_embed",{
			  	name: "image_embed",
			  	elem: ".image-embed",
			  	screenWidth: [400]
			  });

	});
});
