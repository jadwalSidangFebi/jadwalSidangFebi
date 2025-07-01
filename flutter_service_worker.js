'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/asset/bg_android.png": "223ef614d750eebb9553d90888259fc1",
"assets/asset/bg_dekstop.png": "8d064701e7c09d50d224d46e7b9554fe",
"assets/asset/febi%2520gedung%2520hd.png": "cb508bd66ee2e2e0f9bc3812ddb03477",
"assets/asset/logo%2520UIN%2520small.png": "5742c820fffb8f1570a08bb40bf82e33",
"assets/AssetManifest.bin": "de925d7498d245491b41aeb3069f27aa",
"assets/AssetManifest.bin.json": "a5b53e7583f16ac61a65920898a3384c",
"assets/AssetManifest.json": "1d48b5728a1770dda1221693fc7eaee5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "edfbd82834577016ca786f477911ee01",
"assets/NOTICES": "2a2b833939d235046e2c1405453c292a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5742c820fffb8f1570a08bb40bf82e33",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "3d24a69ab5d5d87aa4642caae4f00e31",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "82ec206fb6787ca2bc37cb61dc90288c",
"/": "82ec206fb6787ca2bc37cb61dc90288c",
"jadwalSidangFebi/.git/COMMIT_EDITMSG": "2136123818c9863993c4b3d6a73a8b2a",
"jadwalSidangFebi/.git/config": "374c82d44b1907c626909f34d67d982b",
"jadwalSidangFebi/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"jadwalSidangFebi/.git/FETCH_HEAD": "3c618b2d80c7d8f3d6024b48ac36663d",
"jadwalSidangFebi/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"jadwalSidangFebi/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"jadwalSidangFebi/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"jadwalSidangFebi/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"jadwalSidangFebi/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"jadwalSidangFebi/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"jadwalSidangFebi/.git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
"jadwalSidangFebi/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"jadwalSidangFebi/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"jadwalSidangFebi/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"jadwalSidangFebi/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"jadwalSidangFebi/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"jadwalSidangFebi/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"jadwalSidangFebi/.git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
"jadwalSidangFebi/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"jadwalSidangFebi/.git/index": "f49297c6302bf0c10501cb156008d297",
"jadwalSidangFebi/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"jadwalSidangFebi/.git/logs/HEAD": "84d808375eb26273350d0ccaf0510e7e",
"jadwalSidangFebi/.git/logs/refs/heads/main": "84d808375eb26273350d0ccaf0510e7e",
"jadwalSidangFebi/.git/logs/refs/remotes/origin/HEAD": "46f9833d5ac0b7794019fde689da3393",
"jadwalSidangFebi/.git/logs/refs/remotes/origin/main": "9f93055bb4156dfb603784682f7c02c6",
"jadwalSidangFebi/.git/objects/03/6cd18856aac568e58d834f3700674dc2291203": "316221de0bbfc963643030f1d345595a",
"jadwalSidangFebi/.git/objects/08/7662c42a11f3de4021c3ed528167aa010bbaf3": "1d524704dedaf74f6f835c3ebf02f127",
"jadwalSidangFebi/.git/objects/0e/e066db4a73acd42d9c5a64830ecf0a096fd2ae": "ba9f63b7d645e29684c602a6ffbde361",
"jadwalSidangFebi/.git/objects/1e/d387521bb02d84635c37be5f43d75867d71391": "b9c3f7d8a90290d25d1370bac97d7042",
"jadwalSidangFebi/.git/objects/2c/c29101b34f31f18f8f3e4038a97914e84e9765": "a878419daff0831cdc5788be14caed1b",
"jadwalSidangFebi/.git/objects/38/d64736122047482ce381ed2eeeeaf4990710c8": "dc0d9c799e6c905b48824a9a4456a33b",
"jadwalSidangFebi/.git/objects/39/1ffef858ebb762aaa0b60bf97d7b920ccf9239": "09c3f0ab93758108a67054f4bfd3ec30",
"jadwalSidangFebi/.git/objects/3a/83c2f087b9568780f528dbc06b0f83bb14179a": "37f8628f2b9878f5f98c4fdd6429318d",
"jadwalSidangFebi/.git/objects/45/70bf6815d3aa72443f9b9aa7affcd88b9b5447": "b3aa2b45f61ad645b69b0edd6aefd4f6",
"jadwalSidangFebi/.git/objects/54/d6d953bf1646fa7224823b0ee962c4486659ed": "230611eb39fe51736473700e18bf4f37",
"jadwalSidangFebi/.git/objects/70/5410e6881565836defaca2248b8a83ca2453ec": "96b3526aee10a5dbe3c89e1252c1d190",
"jadwalSidangFebi/.git/objects/7c/4c13961b43b33093d8346f67943148858bc287": "10ec7bd4ac63e7d944c0ec18741f2eb1",
"jadwalSidangFebi/.git/objects/80/2b427a349e7213c33bbacbdea6346a290a853b": "a47960d045308118fda9c22114edb10a",
"jadwalSidangFebi/.git/objects/8e/615de072f248bfdd33bc2497063adf1e8124f6": "9cc84483c8417bb97c6a16349b4ed9fe",
"jadwalSidangFebi/.git/objects/92/79ec4dcb5553573e07d0b73df5b7eb98e044de": "099b0b5a98459c3d3916086ac084a119",
"jadwalSidangFebi/.git/objects/93/6882080d241b00139819580db5dcadd456ee20": "63bd6e3c717705fe017527cae46d0b8d",
"jadwalSidangFebi/.git/objects/a6/04bb3b1ed48d9dd6bcfe21991b8e4679678ab4": "0c9e50c073fffad5278702262032e437",
"jadwalSidangFebi/.git/objects/cd/bc6b8c8586c12485c1291f7ef5634df7748971": "9fea9b6851ae4a875b6c6e921f16ea87",
"jadwalSidangFebi/.git/objects/d4/8146e50a6aa19e99a429e621eb9ce1848f5194": "708059f78ed90de04f5c18c17f4ed5ef",
"jadwalSidangFebi/.git/objects/d7/3f41f024822f84bc505e3b9d92712282aaccfc": "bd7d47d4a735246838aa43972adb17dc",
"jadwalSidangFebi/.git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
"jadwalSidangFebi/.git/objects/e5/cb0ed1342fd03fd0b0c8e0b446bc5b0f770573": "bb3596ddcc8f97f7bcc572f95e4df6f5",
"jadwalSidangFebi/.git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
"jadwalSidangFebi/.git/objects/f0/2ab05ddb49c41d0fca56992fb6d40e612965db": "c59d611878e5fdb4d60736994d420e83",
"jadwalSidangFebi/.git/objects/f0/a8bfe4b153179ec405e8b7f414df23551e56bd": "b7d494a5edc64aa0c2d12aec30bc4dc0",
"jadwalSidangFebi/.git/objects/pack/pack-443d28eaea9875d49030c15e1bad4c82ecfa9e95.idx": "31259bb07c3480c87db2fdd6037a8691",
"jadwalSidangFebi/.git/objects/pack/pack-443d28eaea9875d49030c15e1bad4c82ecfa9e95.pack": "2abd4cd80d1e2a1e876f29c638d06854",
"jadwalSidangFebi/.git/objects/pack/pack-443d28eaea9875d49030c15e1bad4c82ecfa9e95.rev": "56805e2ca5d07031c47547731d429700",
"jadwalSidangFebi/.git/packed-refs": "b753f78d9891ebe13b2ec270bdcea64a",
"jadwalSidangFebi/.git/refs/heads/main": "b3dac973f09de190de21a5b566a075bf",
"jadwalSidangFebi/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"jadwalSidangFebi/.git/refs/remotes/origin/main": "b3dac973f09de190de21a5b566a075bf",
"jadwalSidangFebi/assets/asset/febi%2520gedung%2520hd.png": "cb508bd66ee2e2e0f9bc3812ddb03477",
"jadwalSidangFebi/assets/asset/logo%2520UIN%2520small.png": "5742c820fffb8f1570a08bb40bf82e33",
"jadwalSidangFebi/assets/AssetManifest.bin": "8f904cde1062d570ade590ce2e6df417",
"jadwalSidangFebi/assets/AssetManifest.bin.json": "ae0da4de7d297e73746ea88428e65d0e",
"jadwalSidangFebi/assets/AssetManifest.json": "e15e2533f2fb810da99c411900cbcab4",
"jadwalSidangFebi/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"jadwalSidangFebi/assets/fonts/MaterialIcons-Regular.otf": "edfbd82834577016ca786f477911ee01",
"jadwalSidangFebi/assets/NOTICES": "2a2b833939d235046e2c1405453c292a",
"jadwalSidangFebi/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"jadwalSidangFebi/assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"jadwalSidangFebi/canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"jadwalSidangFebi/canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"jadwalSidangFebi/canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"jadwalSidangFebi/canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"jadwalSidangFebi/canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"jadwalSidangFebi/canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"jadwalSidangFebi/canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"jadwalSidangFebi/canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"jadwalSidangFebi/canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"jadwalSidangFebi/favicon.png": "5742c820fffb8f1570a08bb40bf82e33",
"jadwalSidangFebi/flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"jadwalSidangFebi/flutter_bootstrap.js": "ab661cb7c7ddf58349299a9ef046af5f",
"jadwalSidangFebi/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"jadwalSidangFebi/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"jadwalSidangFebi/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"jadwalSidangFebi/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"jadwalSidangFebi/index.html": "82ec206fb6787ca2bc37cb61dc90288c",
"jadwalSidangFebi/main.dart.js": "c4874def534c731811e8d3064b57a161",
"jadwalSidangFebi/manifest.json": "ca22907f66ceb47079b77cd32d172f18",
"jadwalSidangFebi/tes.txt": "d41d8cd98f00b204e9800998ecf8427e",
"jadwalSidangFebi/version.json": "ea975f20c684a0ef99429e55c0929825",
"main.dart.js": "add66c2231c106f2f0b26e9c422f7f25",
"manifest.json": "ca22907f66ceb47079b77cd32d172f18",
"tes.txt": "d41d8cd98f00b204e9800998ecf8427e",
"version.json": "ea975f20c684a0ef99429e55c0929825"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
