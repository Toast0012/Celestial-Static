document.addEventListener('DOMContentLoaded', function() {
  var bare = "https://dang.iii.cl"
  if (localStorage.bare == "lightspeed") {
    bare = "https://dang.iii.cl/bare/";
  } else if (localStorage.bare == "contentkeeper") {
    bare = "https://dontsnitchbro.iii.cl/bare/";
  } else if (localStorage.bare == "goguardian") {
    bare = "https://example.com";
  } else if (localStorage.bare == null) {
    bare = "https://dang.iii.cl/bare/";
  }

self.__uv$config = {
    prefix: '/a/',
    bare: "https://dang.iii.cl/bare/",
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/uv/uv.handler.js',
    bundle: '/uv/uv.bundle.js',
    config: '/uv/uv.config.js',
    sw: '/uv/uv.sw.js',
};
