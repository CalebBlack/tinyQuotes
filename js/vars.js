var selectedQ,
  msg = 0,
  pressed,
  searchOn,
  // Social references to use
  refTw = "http://www.twitter.com/",
  refFb = "http://www.facebook.com/",
  refYt = "http://www.youtube.com/user/",
  refBe = "http://www.behance.com/",
  refTu = ".tumblr.com",

  cite = document.getElementById("cite"),
  author = document.getElementById("author"),
  modal = document.getElementById("modal"),
  mQT = document.getElementById("modalQT"),
  overlay = document.getElementById("overlay"),
  tOverlay = document.getElementById("tOverlay"),
  search = document.getElementById("search"),
  sQT = document.getElementById("searchQT"),
  loving = document.getElementById("love"),
  twitter = document.getElementById("twitter"),
  tumblr = document.getElementById("tumblr"),
  tinyQuotes = document.getElementById("tinyQuotes"),
  wrapper = document.getElementById("wrapper"),
  favs = document.getElementById("favs"),
  sharer = document.getElementById("sharer"),
  uHash = location.hash.substring(1),
  title = document.getElementsByTagName("title")[0],
  tags = document.getElementById("tags"),
  mTags = document.getElementById("mTags"),
  daTag = document.getElementById("da_tag"),
  iframe = document.getElementById("tags_iframe"),
  toggleTheme = document.getElementById("toggleTheme"),
  more = document.getElementById("more"),
  quo = quotes,
  lang = true;