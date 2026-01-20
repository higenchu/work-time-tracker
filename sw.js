// sw.js
// PWAとして認識させるための最低限の記述
self.addEventListener('fetch', function(event) {
  // キャッシュせずにネットワークへリクエスト（更新を即反映させるため）
  event.respondWith(fetch(event.request));
});
