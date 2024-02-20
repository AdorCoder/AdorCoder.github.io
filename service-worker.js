/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "80a018a7811e1be7cbbb25c562968f36"
  },
  {
    "url": "assets/css/0.styles.86a9e901.css",
    "revision": "9e79f2ae8329ebab3e41ebe1b62e79f1"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.e775e175.js",
    "revision": "732d84c2f294985aef70f1a58100a99f"
  },
  {
    "url": "assets/js/10.0e486c50.js",
    "revision": "a0a59afeea7015ea9499c708369311c0"
  },
  {
    "url": "assets/js/14.0b4e62ec.js",
    "revision": "ff30f2b8c8998b211f494cd41caa5e2e"
  },
  {
    "url": "assets/js/15.6dda31e5.js",
    "revision": "edeee6bf4ab2ea7de466835df7c47cfa"
  },
  {
    "url": "assets/js/16.1a41a9d8.js",
    "revision": "fdc798da7e3ed0a97832bb22ba0e0ee3"
  },
  {
    "url": "assets/js/17.62cab6c2.js",
    "revision": "bcf77957ee8efdd6a16c372fcecc477c"
  },
  {
    "url": "assets/js/18.b5ad6b6b.js",
    "revision": "3e4a6b717bd5092f8390fe2ca5d3f263"
  },
  {
    "url": "assets/js/19.f16cc729.js",
    "revision": "4e18e917213769d24f7710515217c02e"
  },
  {
    "url": "assets/js/2.5ee3dab3.js",
    "revision": "fdda7066d57655179aefaa2433efe95a"
  },
  {
    "url": "assets/js/20.c91a7fd6.js",
    "revision": "2437af4a90b1cfa4d8054e954d45714e"
  },
  {
    "url": "assets/js/21.d25a62ef.js",
    "revision": "9d63ca487401c573e2fe4079b5e6981a"
  },
  {
    "url": "assets/js/22.6d8c64c4.js",
    "revision": "950115a8ca5a76d0c364d6ae2ca0cae8"
  },
  {
    "url": "assets/js/23.9b7b0063.js",
    "revision": "4290c0bcd40241ea6d8807f62ba99f1e"
  },
  {
    "url": "assets/js/24.65c291ca.js",
    "revision": "915b19398980f58708a1495a9a9ec51d"
  },
  {
    "url": "assets/js/25.968ea1d6.js",
    "revision": "088d3712d337608583a19d91f1129e19"
  },
  {
    "url": "assets/js/26.e08efa9c.js",
    "revision": "f2d7e17258bab1e524c3684bf0a6958e"
  },
  {
    "url": "assets/js/27.a102c182.js",
    "revision": "a2c2b42d551b60038891b4fc11a52545"
  },
  {
    "url": "assets/js/28.7df0b088.js",
    "revision": "0ca5b13bd12e3087b376301cf7ce61d7"
  },
  {
    "url": "assets/js/29.81ed2ce2.js",
    "revision": "87eb5a979595de108d77a29c0b92625a"
  },
  {
    "url": "assets/js/3.93769365.js",
    "revision": "e090ac9bcf72b6e9cc25abb7956f40bb"
  },
  {
    "url": "assets/js/30.587e5f10.js",
    "revision": "fe4801edec1acb909a0101f8fac2752c"
  },
  {
    "url": "assets/js/31.107ee136.js",
    "revision": "6b94a86f23567740d6a99fc9e1010025"
  },
  {
    "url": "assets/js/32.e7c3b70d.js",
    "revision": "47373bf79555f2af330c90ddc88346d8"
  },
  {
    "url": "assets/js/33.dffe7e7f.js",
    "revision": "a93e628393abf8812143e9052238eb78"
  },
  {
    "url": "assets/js/34.9e434435.js",
    "revision": "22360f2f966e48b3234c5d4eef12533a"
  },
  {
    "url": "assets/js/35.ee66cc51.js",
    "revision": "e6b4118324d68d7bb6d9b5a684e6972d"
  },
  {
    "url": "assets/js/36.96611999.js",
    "revision": "0601d9bb0b3e6ffdfba62c62c23ea717"
  },
  {
    "url": "assets/js/37.30a5bb57.js",
    "revision": "afbd449b9c8629ddfea1ccc765377d43"
  },
  {
    "url": "assets/js/38.12e60854.js",
    "revision": "cd8c48e062447f7a2e2257cd3a4940de"
  },
  {
    "url": "assets/js/39.dcb8bbc5.js",
    "revision": "772efdd2efb75e784ff4817a71a38784"
  },
  {
    "url": "assets/js/4.a76c7c2e.js",
    "revision": "0729c97fe2a654b3c275f4f55c64d4c2"
  },
  {
    "url": "assets/js/40.3de064db.js",
    "revision": "c3a16aac4cb998bfe1525b9582b0b52c"
  },
  {
    "url": "assets/js/41.df292826.js",
    "revision": "9c3e010c6a7530d09dfdc54ef2cbd1ca"
  },
  {
    "url": "assets/js/42.f8659c9c.js",
    "revision": "9c501d77faf195f12a837bc11b283fbd"
  },
  {
    "url": "assets/js/43.76f45375.js",
    "revision": "5864f82ca36b4359c183b03bd36ccb16"
  },
  {
    "url": "assets/js/44.ab7876c7.js",
    "revision": "6443c63b09c02ab78f91b3500461e060"
  },
  {
    "url": "assets/js/45.e0fc08ac.js",
    "revision": "533a2b9e8ac50884d3c67ea014fadb30"
  },
  {
    "url": "assets/js/5.727aef9d.js",
    "revision": "887f1fe271dde47ad04551330a517874"
  },
  {
    "url": "assets/js/6.5ce15e59.js",
    "revision": "01aab0e0f77bcfede04dcb349d8264a3"
  },
  {
    "url": "assets/js/7.487d215b.js",
    "revision": "8029b2c9f8cbe9618c4350941e7f071a"
  },
  {
    "url": "assets/js/8.dcf98705.js",
    "revision": "24ced4e7b4079e2dd06d4823e4b06f68"
  },
  {
    "url": "assets/js/9.75443d07.js",
    "revision": "a28799bdf3710d8be6bc59f5f7555de1"
  },
  {
    "url": "assets/js/app.6a5f3523.js",
    "revision": "a6f35b9a6402ec6d5fbc964adfc1187f"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~docsearch.c3d48c3b.js",
    "revision": "624ee701e7a010ee3947f51674f8e2cf"
  },
  {
    "url": "assets/js/vendors~flowchart.fe2b37f5.js",
    "revision": "4235d5f3268d7819b19dd0e704a2ea18"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "874e69cfdb7b74d2b3af50636e7d9d2d"
  },
  {
    "url": "categories/java/index.html",
    "revision": "3424e3cd32d7e74433989d14ba92f6d6"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "cc595837c22fca90d4ba1360fa572d5e"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "48437367ec906e70a6ef7377279bd2d9"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "f409e70950524e7e57294c2f16fe23d8"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "28497be4ab58be78f01129eb6308f763"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "cc7d8d4b3972337a88a39d8a79f5154a"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "7224b6e088bf78a901388b85d1329b45"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "c44e96576dc6c80e20c3af7076178fbe"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "7e8c578fb1a1d9a7d6b9aebbd805446a"
  },
  {
    "url": "tags/js/index.html",
    "revision": "e9f3c6081a98ac5fb18584bad8d471f8"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "a06c37d67a164d8f90a2eda20fb9e5c4"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "32ac58b3113344eba1328788ce921ad8"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "4e8fdc138f33f9f41f9fc3835f83e995"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "be04d749067659cd085ca76e4295a5ba"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "9b86ab9691fe114c346d54892fddd975"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "ff948555d6bfd35db293ebfef65cbfe7"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "032c98703a9a191106933c3e6fd19454"
  },
  {
    "url": "timeline/index.html",
    "revision": "9bec42e940d56fcf0e186de24e778ac4"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "4a0c005ee5af1a22ead22f40903bed61"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "97ac409dd08c8773a4f1e8a2368001f8"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "83f024fb43f0691097aa5208d6b3da42"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "7bb3ad43cff9d98fdb4de0ff1f073654"
  },
  {
    "url": "生活分享/life.html",
    "revision": "d3d44e6eda48b6688f46b1ea49ff3447"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
