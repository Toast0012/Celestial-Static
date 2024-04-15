if (localStorage.bare == "lightspeed") {
  var bare = "https://dang.iii.cl/bare/";
} else if (localStorage.bare == "contentkeeper") {
  var bare = "https://dontsnitchbro.iii.cl/bare/";
} else if (localStorage.bare == "goguardian") {
  var bare = "https://example.com"
} else if (localStorage.bare == null) {
  var bare = "https://dang.iii.cl/bare/"
} else {
  var bare = "https://dang.iii.cl/bare/"
}

self.__uv$config = {
    prefix: '/a/',
    bare: bare,
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/uv/uv.handler.js',
    bundle: '/uv/uv.bundle.js',
    config: '/uv/uv.config.js',
    sw: '/uv/uv.sw.js',
};
