var feed = new Instafeed({
  //clientId: 'd781d86345044380bbb719783fc634de',
  accessToken: "7464627426.77082ee.e434f664c9384a06bc079ca686a161e9",
  get: "user",
  userId: "7464627426",
  resolution: "standard_resolution",
  template:
    '<a target="_blank" href="{{link}}" title="{{caption}}"><img src="{{image}}" alt="{{caption}}" /></a>'
});
feed.run();
