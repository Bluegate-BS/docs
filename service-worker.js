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
    "url": "assets/css/0.styles.727e7545.css",
    "revision": "7eca325aa96e760fd23e68f0bdb223a3"
  },
  {
    "url": "assets/img/address-bar.a15ff370.png",
    "revision": "a15ff370eed2f8f0b8219ea3d4976318"
  },
  {
    "url": "assets/img/architecture.30de09c7.png",
    "revision": "30de09c7c6530bc11ece7d9553497563"
  },
  {
    "url": "assets/img/connex.186d320e.jpg",
    "revision": "186d320e35a63378da3873e4c359aae7"
  },
  {
    "url": "assets/img/mpp.58a89201.png",
    "revision": "58a892017c66b562945baeee15505c80"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/wallet-detail-activity.0f9d89a3.png",
    "revision": "0f9d89a34631323541d04818f4a00ac4"
  },
  {
    "url": "assets/js/10.ea619ca3.js",
    "revision": "5fbda109f5d4759a5770f24f7797f575"
  },
  {
    "url": "assets/js/11.2e96fa7e.js",
    "revision": "86ba77044b6a1473b1402b7ae68a3bd4"
  },
  {
    "url": "assets/js/12.86c19ea2.js",
    "revision": "4b70ef445e6358687e4da239c1f060b0"
  },
  {
    "url": "assets/js/13.a8ed1307.js",
    "revision": "4035353b09411aaf610054d9d5118333"
  },
  {
    "url": "assets/js/14.43cae04d.js",
    "revision": "f6cbc002ed5ab25c0f55545163fccbeb"
  },
  {
    "url": "assets/js/15.2166d056.js",
    "revision": "d7cfa1626f801d8cb5471982e7c16463"
  },
  {
    "url": "assets/js/16.a05bb904.js",
    "revision": "82e6aed3cd5823304f63f3e0d29fc93b"
  },
  {
    "url": "assets/js/17.9da18bbc.js",
    "revision": "474ca68b36ea7792b52c0d89cb467a44"
  },
  {
    "url": "assets/js/18.db5b11a0.js",
    "revision": "eed29e24be0a2153f86a6518c81a53e2"
  },
  {
    "url": "assets/js/19.40aa8734.js",
    "revision": "bf15e495c63dec8bef4658ef974f52e5"
  },
  {
    "url": "assets/js/20.8cb58c1e.js",
    "revision": "0602827bae1334831d07c48aa670f9bd"
  },
  {
    "url": "assets/js/21.52c33a17.js",
    "revision": "b7f2ff6f098ade23cac2075bdf54abd4"
  },
  {
    "url": "assets/js/22.6dff57a3.js",
    "revision": "1903f83ead913a9e14dd01cca6d36312"
  },
  {
    "url": "assets/js/23.6bfb969d.js",
    "revision": "4f70653403ec62380e2e83b0ec0e95f3"
  },
  {
    "url": "assets/js/24.44b7716f.js",
    "revision": "6693e8c28f8b9347c6d592355885ba02"
  },
  {
    "url": "assets/js/25.c8c583d5.js",
    "revision": "c90e0cbc31db66673b0fe44a92457264"
  },
  {
    "url": "assets/js/26.c9d896a1.js",
    "revision": "2670845563160d22434f0ad59ac747e1"
  },
  {
    "url": "assets/js/27.e27f4cb8.js",
    "revision": "41b481975b044d131b9e7e0d60e0a281"
  },
  {
    "url": "assets/js/28.306478c0.js",
    "revision": "8a9c33e92e89914a69456ab09b322118"
  },
  {
    "url": "assets/js/29.5fd52193.js",
    "revision": "e1f5fa279700cd83d9efdf0a664f2098"
  },
  {
    "url": "assets/js/3.b4a9e1a9.js",
    "revision": "1454d9f6fce0e672a1336bd7f0656a38"
  },
  {
    "url": "assets/js/30.42427fe8.js",
    "revision": "efbba081258a6fb225540067a58e5537"
  },
  {
    "url": "assets/js/31.030b20b3.js",
    "revision": "55a87fcc21fdb617bc888d99aa680c0b"
  },
  {
    "url": "assets/js/32.c6982e54.js",
    "revision": "5cf2fe8e3764756621989d0aa0c1a855"
  },
  {
    "url": "assets/js/33.c1ce93b2.js",
    "revision": "3306eb441ef6bc7bc059e59aec04e4d6"
  },
  {
    "url": "assets/js/34.63d5aaad.js",
    "revision": "6c50487f24af1bb4389aef71783b2be9"
  },
  {
    "url": "assets/js/35.95dcba5e.js",
    "revision": "e3a75460952c5c3aead54a680e5839a3"
  },
  {
    "url": "assets/js/36.54b1fe82.js",
    "revision": "9994436c51337569d07eb32e664848d8"
  },
  {
    "url": "assets/js/37.bbf14b99.js",
    "revision": "1fa3b9b461bcd226a9d7c5b61ec03f86"
  },
  {
    "url": "assets/js/38.7d53e192.js",
    "revision": "5410d7808e5179f05437dad1bdc337c8"
  },
  {
    "url": "assets/js/39.1dfab5b6.js",
    "revision": "7361b8059d191dcc960562ced788ec39"
  },
  {
    "url": "assets/js/4.9fbef010.js",
    "revision": "dea51d6e08ba423935ceb7688d137358"
  },
  {
    "url": "assets/js/40.ffcf8941.js",
    "revision": "e8f3886115ae3751d566196d75c07482"
  },
  {
    "url": "assets/js/41.90f59d3b.js",
    "revision": "b1bd3dda00121f77cf36cd46f2b7ac03"
  },
  {
    "url": "assets/js/42.ba529dcf.js",
    "revision": "60a741ab18d45e268f1d120a70a39a9f"
  },
  {
    "url": "assets/js/43.b32cbe1f.js",
    "revision": "174321de191910140918e289ab0f5371"
  },
  {
    "url": "assets/js/44.8bd65a8b.js",
    "revision": "5250438062f991f3740c35656ddd884c"
  },
  {
    "url": "assets/js/45.4f15ee9d.js",
    "revision": "318b24fa44f0d09a005bc1ee600f0424"
  },
  {
    "url": "assets/js/46.3e43704f.js",
    "revision": "7ef836737b37ac4a9411423379e6fb5a"
  },
  {
    "url": "assets/js/47.d5b1169f.js",
    "revision": "a2c94a3313d8b22c38c46a42f816b3fb"
  },
  {
    "url": "assets/js/48.19c560d9.js",
    "revision": "d30c60bc8cb5524d8f2980079218b30d"
  },
  {
    "url": "assets/js/5.5d2a96e6.js",
    "revision": "fe3aa5d0c99cf2ea92a98e75185a6240"
  },
  {
    "url": "assets/js/6.0779f2ad.js",
    "revision": "af0bd9aacc7e4a4af42da514ef841ea3"
  },
  {
    "url": "assets/js/7.d14b27ba.js",
    "revision": "aebd2b5327e2d31296b2e8704d61b16b"
  },
  {
    "url": "assets/js/8.77fe2b1e.js",
    "revision": "c4b451fe69490443fd7f63303041b222"
  },
  {
    "url": "assets/js/9.885e62d8.js",
    "revision": "0d32aa145c7441df6b83c6a7e98afb2c"
  },
  {
    "url": "assets/js/app.b295645b.js",
    "revision": "19bbffb56d4ba1e5d6a2d093c376b773"
  },
  {
    "url": "assets/js/vendors~docsearch.f7385de5.js",
    "revision": "0e139e7e3e0d0e8bc373456260e50940"
  },
  {
    "url": "connex/api.html",
    "revision": "0b633515d9c132b4dc920cd357542c29"
  },
  {
    "url": "connex/demos-and-service.html",
    "revision": "5752f4461d4e0cd5547a81ec8790e647"
  },
  {
    "url": "connex/implementation.html",
    "revision": "772572dfde308cc8a81401079ee33b27"
  },
  {
    "url": "connex/index.html",
    "revision": "7b7cc9e31675eabe6e6469a525c65ee1"
  },
  {
    "url": "icons/144.png",
    "revision": "ef022f52c54f8ee6ccc8f005d52b99de"
  },
  {
    "url": "icons/168.png",
    "revision": "cd596353879cab531903b1f9c0f8d6dc"
  },
  {
    "url": "icons/192.png",
    "revision": "6aaa85947b9a315ac47970a54c3a66f4"
  },
  {
    "url": "icons/48.png",
    "revision": "2d20f253068748053fc7082400c88f4b"
  },
  {
    "url": "icons/72.png",
    "revision": "02b333d138cc4764e770eb1d7274e7ea"
  },
  {
    "url": "icons/96.png",
    "revision": "b3240f2ffb00f383cbc3783370a782cc"
  },
  {
    "url": "index.html",
    "revision": "f78193fec9d6be947c3cee63f8bdbd9d"
  },
  {
    "url": "logo.png",
    "revision": "1f7569a7fb96e141f556669c77877f1f"
  },
  {
    "url": "others/index.html",
    "revision": "0dd6fbbf567ac047b95ce0ba6069216c"
  },
  {
    "url": "sync/download-and-install.html",
    "revision": "e42ba719260f6da7fd0eef198069e5ee"
  },
  {
    "url": "sync/faq.html",
    "revision": "537c69d051e803e24eff2c0e76afd970"
  },
  {
    "url": "sync/user-guide/activities.html",
    "revision": "f65130182e2faac93744f867c223aa39"
  },
  {
    "url": "sync/user-guide/browse-dapp-and-web.html",
    "revision": "d2244dbc98f18e98215f5eb47be767a5"
  },
  {
    "url": "sync/user-guide/contribute.html",
    "revision": "69153db05f782246446af3e170669fd7"
  },
  {
    "url": "sync/user-guide/contributing.html",
    "revision": "4ca3d2a1fe07f792ea360b0a6cc9bc81"
  },
  {
    "url": "sync/user-guide/import-ledger.html",
    "revision": "e403b9a816d7c4ef9d3c92c1dedea341"
  },
  {
    "url": "sync/user-guide/index.html",
    "revision": "f0789b2c611bd3d78a42e10e950fa8ad"
  },
  {
    "url": "sync/user-guide/interact-with-dapps.html",
    "revision": "abc742d3bc594a8f95cf97e979a18d84"
  },
  {
    "url": "sync/user-guide/report-issue.html",
    "revision": "16af73dab00927a7c45c7e7d81834897"
  },
  {
    "url": "sync/user-guide/settings.html",
    "revision": "4e5981b490c60b7ea5c8729efe882b45"
  },
  {
    "url": "thor/get-started/api.html",
    "revision": "efa7f3824e7e128ddc51c265e966b53b"
  },
  {
    "url": "thor/get-started/custom-network.html",
    "revision": "c8145d417fd9498c3e609fa9c2ec1ac6"
  },
  {
    "url": "thor/get-started/installation.html",
    "revision": "9b289afa952d8480a0f6d857f1b72259"
  },
  {
    "url": "thor/learn/block.html",
    "revision": "c5952862f67d1658f4fb4dea84d61f92"
  },
  {
    "url": "thor/learn/builtin-contracts.html",
    "revision": "b5be0965d19fa23823dc1264826958a0"
  },
  {
    "url": "thor/learn/faq.html",
    "revision": "eea5799281ae6d281d178263f2a2af3b"
  },
  {
    "url": "thor/learn/fee-delegation.html",
    "revision": "02bb688348333d5bbea36773fd8f45e4"
  },
  {
    "url": "thor/learn/index.html",
    "revision": "a9ce5efb2408aeecd6d53438f70d342b"
  },
  {
    "url": "thor/learn/proof-of-authority.html",
    "revision": "82f16cbd442cc261829689e42f370795"
  },
  {
    "url": "thor/learn/transaction-calculation.html",
    "revision": "46c409170d52d72f606a5725f38bc4ce"
  },
  {
    "url": "thor/learn/transaction-model.html",
    "revision": "651841fe052c99afa812b606044314f4"
  },
  {
    "url": "thor/learn/two-token-design.html",
    "revision": "98f80d653a72ef1fb6c12da3f7869c7a"
  },
  {
    "url": "tutorials/contribute.html",
    "revision": "15f1d6e3dffe87d0e534708c511fb31a"
  },
  {
    "url": "tutorials/designated-fee-delegation.html",
    "revision": "e901601dcbba617697a4ebd65bc0d2b2"
  },
  {
    "url": "tutorials/forcible-transaction-dependency.html",
    "revision": "3dcd25b3b7f96fd2387c956870e3a590"
  },
  {
    "url": "tutorials/how-to-develop-a-dapp-on-vechain-1.html",
    "revision": "decdbeb6ab0cde4e1dc3d68d53efd7cb"
  },
  {
    "url": "tutorials/how-to-develop-a-dapp-on-vechain-2.html",
    "revision": "cd3479e37362479b6afb31c29b0e1217"
  },
  {
    "url": "tutorials/how-to-develop-a-dapp-on-vechain-3.html",
    "revision": "d20178b313bd0e9ebda891f8cc3021cb"
  },
  {
    "url": "tutorials/how-to-integrate-VIP-191-1.html",
    "revision": "a617ba33f4076bb175b732b7dfed15a2"
  },
  {
    "url": "tutorials/how-to-integrate-VIP-191-2.html",
    "revision": "87407f3666269500e8ace1841ec0fb56"
  },
  {
    "url": "tutorials/how-to-integrate-VIP-191-3.html",
    "revision": "f2b3530d0ea0a098fa6c42f806b1d35d"
  },
  {
    "url": "tutorials/index.html",
    "revision": "ffe5274de7d25817ec2f60b14dacc2d6"
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
