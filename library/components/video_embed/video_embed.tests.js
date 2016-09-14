var expect = require("chai").expect;

describe("Video Embed", function() {
  before(function() {
		browser.url("/components/preview/video_embed");
		return browser;
	});

	it("callout should look like baseline", function() {
		return browser
			.compareScreen("video_embed",{
			  	name: "video_embed",
			  	elem: ".video-embed",
			  	screenWidth: [400]
			  });

	});
});
