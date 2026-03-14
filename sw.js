const CACHE_NAME = 'cancer-slayer-v2'; // 🎯 타이틀 변경에 맞춰 버전 업그레이드
const urlsToCache = [
  './index.html',
  './script.js',
  './manifest.json',
  // --- [Assets: UI & Characters] ---
  './assets/Title.png',
  './assets/Name.png',
  './assets/nana_welcome.png',
  './assets/nana_briefing.png',
  './assets/Room.webp',
  './assets/ending.jpg', // 🎯 엔딩 이미지 필수 추가
  // --- [Assets: Patients] ---
  './assets/P1.png', './assets/P2.png', './assets/P3.png',
  './assets/P4.png', './assets/P5.png', './assets/P6.png',
  // --- [Assets: Cancer & Bosses] ---
  './assets/Cancer1.png', './assets/Cancer2.png', './assets/Cancer3.png',
  './assets/Cancer4.png', './assets/Cancer5.png', './assets/Cancer6.png',
  './assets/boss_stage1.png', './assets/boss_stage2.png', './assets/boss_stage3.png',
  './assets/boss_stage4.png', './assets/boss_stage5.png', './assets/boss_stage6.png',
  // --- [Music & SFX] ---
  './Music/Title.mp3', './Music/brief.mp3', './Music/play.mp3',
  './Music/boss.mp3', './Music/heal.mp3', './Music/boot.mp3',
  './Music/click.mp3', './Music/type.mp3', './Music/shoot.mp3',
  './Music/hit.mp3', './Music/damage.mp3', './Music/boom.mp3',
  './Music/clear.mp3', './Music/fail.mp3'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});