/*
  The test scenario
*/

describe("<%= props.name %> <%= props.type %>", function() {
	before(function() {
		browser.url("/components/preview/<%= props.name_underscore %>");
		return browser;
	});

	it("should look like baseline", function() {
		return browser
			.compareScreen("<%= props.name_underscore %>", {
			  	name: "<%= props.type %>",
			  	elem: ".rh-<%= props.name_dash %>",
			  	screenWidth: [250, 600]
			});
	});

});
