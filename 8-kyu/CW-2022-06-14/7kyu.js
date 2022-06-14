//remove anchor from string
//removeUrlAnchor("lobsterthermidor.net#shaziya") should equal "lobsterthermidor.net"
// removeUrlAnchor("https://sausage.org") should equal "https://sausage.org"
let removeUrlAnchor = (url) =>
  url.indexOf("#") === -1 ? url : url.substring(0, url.indexOf("#"));
//this is simpler
let removeUrlAnchor = (url) => url.split("#")[0];
