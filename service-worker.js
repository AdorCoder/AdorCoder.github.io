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
    "revision": "6a6b621daeeaec5fe97deae396f6b81c"
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
    "url": "assets/js/37.6041fb3f.js",
    "revision": "0961d64cf388b6613e8a3cb3adc6c670"
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
    "url": "assets/js/42.dbc130bf.js",
    "revision": "6338748067743f47b3b6bb72d5cad0a2"
  },
  {
    "url": "assets/js/43.76f45375.js",
    "revision": "5864f82ca36b4359c183b03bd36ccb16"
  },
  {
    "url": "assets/js/44.2c2c11d5.js",
    "revision": "6faec221dd86bb5ebfaf9c55cb2acb7b"
  },
  {
    "url": "assets/js/45.84a87f72.js",
    "revision": "c76c6789ef7793168b0e2adc944531f4"
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
    "url": "assets/js/app.b993c91e.js",
    "revision": "fb083f1c937bf58c50127af1df563433"
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
    "revision": "e7b4db237fc90e4b89d90e41eefcd464"
  },
  {
    "url": "categories/java/index.html",
    "revision": "4e33613160c580887049700154cad8c4"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "7529fac8980e2d9389c3b2073344945e"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "bcf2300bdec497efaf71f4ae9a50e82e"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "8f2d0960ce28553b720b340aa1505b63"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "e68fbbcba3cf8329e5afd0da6417c2e9"
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
    "revision": "383c8591955bdefb77aecb3b31ec1328"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "1357f0de8d1fc385a01808ad61f5aa68"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "a29e2bf56bd8dc025638331e98c5463e"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "9ad00aa7d5b53a5e548d7e7f1110cb16"
  },
  {
    "url": "tags/js/index.html",
    "revision": "02057d92869778601f7994c0ca9b6a92"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "2ff2624c85a000d0c46a7992f16bd3c2"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "7285ddb66a4c612c3a88dd191f818d58"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "48ce99379b1b565dbd713d97435ca04e"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "dbf0dd97563fd9220afd4b074a1fb86d"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "3f4f36baf61a27685c24d1c732fb35f7"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "cc7931b2d89f285042d2d302444705fe"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "27b5b45b92c5056bcfc8748056590715"
  },
  {
    "url": "timeline/index.html",
    "revision": "89f78a6c46c77a8650f008cbbda9ddae"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "db8c89d6701255e6d0bc996aef347b5a"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "bac2a57836190513a581dd4ef06609dc"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "e0bfd9419eba2a21bddaeb9e1a25144e"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "511646323324e6a913faf6a01b78044a"
  },
  {
    "url": "生活分享/life.html",
    "revision": "2e267652cfd971088efd8c7d09cefc07"
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
