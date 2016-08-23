describe("Example Component", function() {
  before(function() {
    browser.url("/components/preview/example");
    return browser;
  });

  it("should look like baseline", function() {
    return browser
      .compareScreen("example", {
          name: "component",
          elem: ".foo",
          screenWidth: [350, 600]
      });
  });

});
