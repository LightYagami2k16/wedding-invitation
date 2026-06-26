/* ══════════════════════════════════════════
   WEDDING INVITATION — script.js
   ══════════════════════════════════════════ */

// ── WEDDING DATE ──────────────────────────
const WEDDING_DATE = new Date('2026-06-30T16:00:00');

// ── MUSIC ────────────────────────────────
// Using royalty-free instrumental pieces via public CDN.
// Replace these URLs with your own audio files or hosted tracks.
const SONGS = [
  {
    title: 'A Thousand Years',
    url: 'https://www.image2url.com/r2/default/audio/1782450469981-f0c6de59-b6ae-4b70-ac07-c9d3cf9e75c1.mp3'
  }
];

let currentSong = null;
let isPlaying   = false;

const audio     = document.getElementById('wedding-audio');
const songTitle = document.getElementById('song-title');
const iconPlay  = document.getElementById('icon-play');
const iconPause = document.getElementById('icon-pause');

function pickRandomSong() {
  let pick;
  do { pick = SONGS[Math.floor(Math.random() * SONGS.length)]; }
  while (SONGS.length > 1 && pick === currentSong);
  return pick;
}

function loadSong(song) {
  currentSong   = song;
  audio.src     = song.url;
  songTitle.textContent = '♪ ' + song.title;
}

function playSong() {
  audio.play().then(() => {
    isPlaying = true;
    iconPlay.style.display  = 'none';
    iconPause.style.display = 'block';
  }).catch(() => {
    // Autoplay blocked — show play button
    iconPlay.style.display  = 'block';
    iconPause.style.display = 'none';
    songTitle.textContent = '♪ Click to play music';
  });
}

function toggleMusic() {
  if (isPlaying) {
    audio.pause();
    isPlaying = false;
    iconPlay.style.display  = 'block';
    iconPause.style.display = 'none';
  } else {
    if (!currentSong) loadSong(pickRandomSong());
    playSong();
  }
}

// Auto-advance to a new random track when one ends
audio.addEventListener('ended', () => {
  loadSong(pickRandomSong());
  playSong();
});

// Attempt autoplay on first user interaction with the page
function tryAutoplay() {
  if (!currentSong) {
    loadSong(pickRandomSong());
    playSong();
  }
  document.removeEventListener('click', tryAutoplay);
  document.removeEventListener('scroll', tryAutoplay);
  document.removeEventListener('keydown', tryAutoplay);
}
document.addEventListener('click',   tryAutoplay, { once: true });
document.addEventListener('scroll',  tryAutoplay, { once: true });
document.addEventListener('keydown', tryAutoplay, { once: true });

// Also attempt immediately (works in some browsers)
window.addEventListener('load', () => {
  loadSong(pickRandomSong());
  playSong();
});

// ── COUNTDOWN ─────────────────────────────
function updateCountdown() {
  const now  = new Date();
  const diff = WEDDING_DATE - now;

  if (diff <= 0) {
    document.getElementById('countdown').innerHTML =
      '<p style="font-family:var(--font-display);font-size:2.5rem;color:var(--gold-lt)">Today is the day! 🎉</p>';
    return;
  }

  const days  = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins  = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const secs  = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById('cd-days').textContent  = String(days).padStart(2, '0');
  document.getElementById('cd-hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('cd-mins').textContent  = String(mins).padStart(2, '0');
  document.getElementById('cd-secs').textContent  = String(secs).padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();

// ── MAP TABS ──────────────────────────────
function showMap(venue) {
  const isCeremony = venue === 'ceremony';

  document.getElementById('map-ceremony').classList.toggle('active-map', isCeremony);
  document.getElementById('map-reception').classList.toggle('active-map', !isCeremony);
  document.getElementById('dir-ceremony').style.display  = isCeremony  ? 'inline-block' : 'none';
  document.getElementById('dir-reception').style.display = !isCeremony ? 'inline-block' : 'none';

  document.querySelectorAll('.map-tab').forEach((btn, i) => {
    btn.classList.toggle('active', (i === 0) === isCeremony);
  });
}

// ── SCROLL REVEAL ─────────────────────────
const revealEls = document.querySelectorAll(
  '#countdown-section, #details, #entourage, #map-section, #cta-section, footer, ' +
  '.detail-card, .entourage-block, .cd-block'
);

revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealEls.forEach(el => observer.observe(el));
