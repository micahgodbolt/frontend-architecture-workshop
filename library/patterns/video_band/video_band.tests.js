var expect = require("chai").expect;

describe("Video Band", function() {
  before(function() {
		browser.url("/components/preview/video_band");
		return browser;
	});

	it("callout should look like baseline", function() {
		return browser
			.compareScreen("video_band",{
			  	name: "video_band",
			  	elem: ".band",
			  	screenWidth: [800]
			  });

	});
});
