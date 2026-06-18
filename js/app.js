// ===== STATE =====
let state = {
  platform: 'all',
  genre: 'all',
  search: '',
  playable: false,
  view: 'grid'
};

// ===== DOM REFS =====
const grid = document.getElementById('gamesGrid');
const noResults = document.getElementById('noResults');
const totalCount = document.getElementById('totalCount');
const searchInput = document.getElementById('searchInput');
const sectionTitle = document.getElementById('sectionTitle');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');

// ===== RENDER =====
function filtered() {
  return GAMES.filter(g => {
    const matchPlat = state.platform === 'all' || g.platform === state.platform;
    const matchGenre = state.genre === 'all' || g.genre === state.genre;
    const matchSearch = !state.search || 
      g.title.toLowerCase().includes(state.search) || 
      g.desc.toLowerCase().includes(state.search);
    const matchPlay = !state.playable || !!g.play;
    return matchPlat && matchGenre && matchSearch && matchPlay;
  });
}

function render() {
  const games = filtered();
  totalCount.textContent = `${games.length} Game${games.length !== 1 ? 's' : ''}`;

  if (!games.length) {
    grid.innerHTML = '';
    noResults.classList.remove('hidden');
    return;
  }
  noResults.classList.add('hidden');

  grid.innerHTML = games.map(g => `
    <div class="game-card" data-id="${g.id}">
      <div class="card-top">
        <span class="card-icon">${g.icon}</span>
        ${g.play ? '<span class="card-play-badge">PLAY NOW</span>' : ''}
      </div>
      <div class="card-title">${g.title}</div>
      <div class="card-desc">${g.desc}</div>
      <div class="card-footer">
        <span class="tag">${g.platform}</span>
        <span class="tag">${g.genre}</span>
      </div>
    </div>
  `).join('');

  grid.querySelectorAll('.game-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = parseInt(card.dataset.id);
      openModal(GAMES.find(g => g.id === id));
    });
  });
}

function updateTitle() {
  const genreMap = {
    all: 'All Games', arcade: 'Arcade', rpg: 'RPG', strategy: 'Strategy',
    puzzle: 'Puzzle', fps: 'FPS', sandbox: 'Sandbox', racing: 'Racing',
    boardgame: 'Board Games', mmorpg: 'MMORPG', platform: 'Platform',
    action: 'Action', clicker: 'Clicker', other: 'Others'
  };
  const platMap = { all: '', browser: '🌐 Browser ', native: '💻 Native ', mobile: '📱 Mobile ' };
  sectionTitle.textContent = (platMap[state.platform] || '') + (genreMap[state.genre] || 'All Games');
}

// ===== FILTERS =====
document.getElementById('platformFilter').addEventListener('click', e => {
  const li = e.target.closest('li');
  if (!li) return;
  document.querySelectorAll('#platformFilter li').forEach(x => x.classList.remove('active'));
  li.classList.add('active');
  state.platform = li.dataset.filter;
  updateTitle(); render();
});

document.getElementById('genreFilter').addEventListener('click', e => {
  const li = e.target.closest('li');
  if (!li) return;
  document.querySelectorAll('#genreFilter li').forEach(x => x.classList.remove('active'));
  li.classList.add('active');
  state.genre = li.dataset.genre;
  updateTitle(); render();
});

const playableToggle = document.getElementById('playableToggle');
playableToggle.addEventListener('click', () => {
  state.playable = !state.playable;
  playableToggle.classList.toggle('active', state.playable);
  render();
});

// ===== SEARCH =====
searchInput.addEventListener('input', () => {
  state.search = searchInput.value.toLowerCase().trim();
  render();
});

// ===== VIEW TOGGLE =====
document.getElementById('gridBtn').addEventListener('click', () => {
  state.view = 'grid';
  grid.classList.remove('list-view');
  document.getElementById('gridBtn').classList.add('active');
  document.getElementById('listBtn').classList.remove('active');
});
document.getElementById('listBtn').addEventListener('click', () => {
  state.view = 'list';
  grid.classList.add('list-view');
  document.getElementById('listBtn').classList.add('active');
  document.getElementById('gridBtn').classList.remove('active');
});

// ===== MODAL =====
function openModal(g) {
  document.getElementById('modalIcon').textContent = g.icon;
  document.getElementById('modalTitle').textContent = g.title;
  document.getElementById('modalDesc').textContent = g.desc;
  document.getElementById('modalGithub').href = g.github;

  const tagsEl = document.getElementById('modalTags');
  tagsEl.innerHTML = `<span class="tag">${g.platform}</span><span class="tag">${g.genre}</span>`;

  const playBtn = document.getElementById('modalPlay');
  if (g.play) {
    playBtn.href = g.play;
    playBtn.classList.remove('hidden');
  } else {
    playBtn.classList.add('hidden');
  }

  modalOverlay.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.add('hidden');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', e => {
  if (e.target === modalOverlay) closeModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// ===== INIT =====
render();
