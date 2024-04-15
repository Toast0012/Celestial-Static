document.addEventListener('DOMContentLoaded', function() {
  // Get the bare value from local storage
  if (localStorage.bare == "lightspeed") {
    self.__uv$config.bare = "https://dang.iii.cl/bare/";
  } else if (localStorage.bare == "contentkeeper") {
    self.__uv$config.bare = "https://dontsnitchbro.iii.cl/bare/";
  } else if (localStorage.bare == "goguardian") {
    self.__uv$config.bare = "https://example.com";
  } else if (localStorage.bare == null) {
    self.__uv$config.bare = "https://dang.iii.cl/bare/";
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
