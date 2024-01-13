(function () {
  var XHR = XMLHttpRequest.prototype;
  var send = XHR.send;
  var open = XHR.open;
  XHR.open = function (method, url) {
    this.url = url; // the request url
    return open.apply(this, arguments);
  };
  XHR.send = function () {
    this.addEventListener("load", function () {
      if (
        this.url.includes("omegle.com/events") &&
        this.response.includes("icecandidate")
      ) {
        //ipv4
        const ip4Regex = /\b(?:\d{1,3}\.){3}\d{1,3}\b/g;
        const ipv6Regex = /([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4} /g;

        const ip4s = [...new Set(this.responseText.match(ip4Regex))];
        const ip6s = [...new Set(this.responseText.match(ipv6Regex))];

        const filterdIp4s = ip4s?.filter((ip) => {
          return (
            ip !== "0.0.0.0" &&
            !ip.startsWith("192.") &&
            !ip.startsWith("10.") &&
            !ip.startsWith("172.") &&
            !ip.startsWith("127.")
          );
        });

        if (filterdIp4s.length === 1) {
          document.dispatchEvent(
            new CustomEvent("CHECK_IP_ADDRESS", { detail: filterdIp4s[0] })
          );
        } else {
          const newIp6s = ip6s.map((ip) => ip.replace(" ", ""));
          const filterdIp6s = newIp6s?.filter((ip) => !isLocalIPv6(ip));
          document.dispatchEvent(
            new CustomEvent("CHECK_IP_ADDRESS", {
              detail: (filterdIp6s || [])[0],
            })
          );
        }
      }
    });
    return send.apply(this, arguments);
  };

  function isLocalIPv6(ipv6Address) {
    // Check if the address starts with 'fd' and has the correct format
    if (/^fd[0-9a-f]{2}(:[0-9a-f]{4}){6}$/i.test(ipv6Address)) {
      return true;
    }

    // Check if the address is a link-local address (fe80::/10)
    if (/^fe80:(:[0-9a-f]{0,4}){0,7}$/i.test(ipv6Address)) {
      return true;
    }

    // Check if the address is a Unique Local Address (ULA) (fc00::/7)
    if (/^fc|fd[0-9a-f]{2}(:[0-9a-f]{4}){6}$/i.test(ipv6Address)) {
      return true;
    }

    // The address is not local
    return false;
  }
})();
