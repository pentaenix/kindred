const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const extOrder = ['webp', 'jpg', 'jpeg', 'png', 'avif', 'gif'];
const remote = {
  people: {
    maya: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80',
    leo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
    sofia: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80',
    arturo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80',
    noor: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
    ren: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80',
    amelia: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80',
    jules: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=900&q=80',
    ines: 'https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=900&q=80',
    mina: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80'
  },
  places: {
    library: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1400&q=80',
    bookstore: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1400&q=80',
    cinema: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1400&q=80',
    cafe: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1400&q=80',
    museum: 'https://images.unsplash.com/photo-1491156855053-9cdff72c7f85?auto=format&fit=crop&w=1400&q=80',
    park: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1400&q=80',
    gallery: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=1400&q=80',
    gamecafe: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&w=1400&q=80',
    studio: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=80',
    market: 'https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&w=1400&q=80'
  },
  sponsors: {
    aurora: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1400&q=80',
    nook: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1400&q=80',
    cafe: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1400&q=80',
    museum: 'https://images.unsplash.com/photo-1491156855053-9cdff72c7f85?auto=format&fit=crop&w=1400&q=80'
  },
  circles: {
    readers: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=1400&q=80',
    film: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1400&q=80',
    walkers: 'https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&w=1400&q=80',
    cafe: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1400&q=80'
  }
};

const navItems = [
  { id: 'today', label: 'Today', icon: '✦' },
  { id: 'explore', label: 'Explore', icon: '⌕' },
  { id: 'plans', label: 'Plans', icon: '◷' },
  { id: 'circles', label: 'Circles', icon: '◎' },
  { id: 'you', label: 'You', icon: '◡' }
];

const people = [
  { id: 'maya', name: 'Maya', age: 27, handle: 'quiet cinema goblin', fit: 94, vibe: ['Books', 'Small groups', 'Slow replies'], bio: 'Finds good corners in public places. Likes magical realism, post-movie coffee, and plans that do not become loud by accident.', ideal: 'Bookstore drift, one strange recommendation each, optional coffee after.', rhythm: 'Plans 2–4 days ahead · group-first · public places only' },
  { id: 'leo', name: 'Leo', age: 31, handle: 'movie overthinker', fit: 88, vibe: ['Cinema', 'Deep talk', 'Night plans'], bio: 'Will defend a flawed movie if it has one beautiful scene. Good at finding cinemas with quiet lobbies.', ideal: 'Indie film, 20-minute walk, then kind disagreement over coffee.', rhythm: 'Usually confirms · one-on-one okay after group context' },
  { id: 'sofia', name: 'Sofía', age: 25, handle: 'museum wanderer', fit: 91, vibe: ['Museums', 'Daytime', 'Curious'], bio: 'Reads every other wall label and saves the rest for the group chat. Prefers public daytime plans.', ideal: 'Tiny exhibition, favorite piece exchange, no pressure to be profound.', rhythm: 'Group friendly · daytime preferred · low pressure' },
  { id: 'arturo', name: 'Arturo', age: 29, handle: 'board game diplomat', fit: 84, vibe: ['Games', 'Tea', 'Beginner-safe'], bio: 'Can teach rules without becoming the rules. Likes calm tables, nice tea, and groups where nobody dominates.', ideal: 'Beginner board games at a staffed café with easy exits.', rhythm: 'Reliable planner · groups of 4–6 · confirms day-of' },
  { id: 'noor', name: 'Noor', age: 30, handle: 'parallel café person', fit: 90, vibe: ['No-chat', 'Creative', 'Cafés'], bio: 'Loves being near people while everyone does their own thing. Sketchbook, headphones, optional chat at the end.', ideal: 'Parallel café sprint with a five-minute show-and-tell.', rhythm: 'Low social battery friendly · soft commitment' },
  { id: 'ren', name: 'Ren', age: 28, handle: 'rainy walk collector', fit: 86, vibe: ['Walks', 'Parks', 'Quiet'], bio: 'Collects good benches, park routes, and conversations that do not need to fill every silence.', ideal: 'Daytime park loop with a bookstore nearby as backup.', rhythm: 'Public routes · weather-aware · own transport' },
  { id: 'amelia', name: 'Amelia', age: 26, handle: 'playlist walker', fit: 82, vibe: ['Music', 'Walks', 'Gentle'], bio: 'Makes tiny playlists for specific streets. Likes walks that end at someplace warm.', ideal: 'A 40-minute route, swap one song, stop for tea.', rhythm: 'Prefers daylight · small groups · flexible timing' },
  { id: 'jules', name: 'Jules', age: 32, handle: 'bad movie society', fit: 87, vibe: ['Comedy', 'Cinema', 'Groups'], bio: 'Hosts bad movie nights in actual public cinemas and refuses to call anything guilty pleasure.', ideal: 'A questionable screening with excellent post-film jokes.', rhythm: 'Group host · reliable · public venues only' },
  { id: 'ines', name: 'Inés', age: 24, handle: 'zine table regular', fit: 85, vibe: ['Creative', 'Markets', 'Zines'], bio: 'Knows which weekend markets have the best handmade paper and least overwhelming crowds.', ideal: 'Browse zines, pick one weird print, decompress with coffee.', rhythm: 'Weekend daytime · group-first · gentle pace' },
  { id: 'mina', name: 'Mina', age: 29, handle: 'library loyalist', fit: 89, vibe: ['Libraries', 'Books', 'Quiet'], bio: 'Can happily spend an hour in silence near other people and call it a perfect afternoon.', ideal: 'Silent reading hour, then optional favorite-page exchange.', rhythm: 'Low chat · public venues · planned ahead' }
];

const venues = [
  { id: 'library', name: 'Central Library', type: 'Library', imageId: 'library', note: 'Staffed, calm, public, and excellent for low-pressure first hangs.', tags: ['Public', 'Quiet', 'Free', 'Staffed'] },
  { id: 'bookstore', name: 'Nook & Spine', type: 'Bookstore', imageId: 'bookstore', note: 'Partner place with browse-friendly aisles and a café next door.', tags: ['Partner', 'Books', 'Public'] },
  { id: 'cinema', name: 'Aurora Cinema', type: 'Cinema', imageId: 'cinema', note: 'Indie screenings, bright lobby, and post-film café options nearby.', tags: ['Partner', 'Cinema', 'Evening'] },
  { id: 'cafe', name: 'Café Pendiente', type: 'Café', imageId: 'cafe', note: 'Reserved first-hang tables, visible staff, and easy exits.', tags: ['Partner', 'Cozy', 'Staffed'] },
  { id: 'museum', name: 'Modern Museum', type: 'Museum', imageId: 'museum', note: 'Daytime-friendly, public, paced for wandering and short conversations.', tags: ['Art', 'Public', 'Daytime'] },
  { id: 'park', name: 'Alameda Loop', type: 'Park', imageId: 'park', note: 'Recommended during daylight only; routes stay near populated exits.', tags: ['Walks', 'Daytime', 'Public'] },
  { id: 'gallery', name: 'North Gallery', type: 'Gallery', imageId: 'gallery', note: 'Small exhibitions, staffed entry, and quiet side rooms.', tags: ['Art', 'Quiet', 'Public'] },
  { id: 'gamecafe', name: 'Meeple House', type: 'Board game café', imageId: 'gamecafe', note: 'Beginner tables, visible hosts, and group-first events.', tags: ['Partner', 'Games', 'Groups'] }
];

const plans = [
  { id: 'silent-reading', title: 'Silent Reading Hour', badge: 'Low-pressure', activity: 'Books', venueId: 'library', time: 'Today · 5:30 PM', duration: '75 min', group: '3–6 people', cost: 'Free', energy: 'Quiet', mood: ['Low pressure','Quiet','Books','No-chat','Daytime'], match: 96, people: ['maya','mina','noor'], description: 'Read together quietly, then trade one favorite line only if the room feels right.', safety: ['Public', 'Staffed', 'Group-friendly'], opener: 'What book did you bring, and why today?' },
  { id: 'indie-film', title: 'Indie Film + Coffee Debrief', badge: 'Partner pick', activity: 'Cinema', venueId: 'cinema', time: 'Tonight · 7:10 PM', duration: '2.5 hrs', group: '2–4 people', cost: '$$', energy: 'Curious', mood: ['Cinema','Curious','Social'], match: 92, people: ['leo','jules','maya'], description: 'Watch something strange, then discuss the scene nobody can stop thinking about.', safety: ['Verified venue', 'Public lobby', 'Own transport'], opener: 'What makes a movie worth talking about afterward?' },
  { id: 'bookstore-drift', title: 'Bookstore Drift', badge: 'Soft join', activity: 'Books', venueId: 'bookstore', time: 'Sat · 4:00 PM', duration: '90 min', group: '2–5 people', cost: 'Free browse', energy: 'Cozy', mood: ['Books','Cozy','Low pressure'], match: 89, people: ['maya','ines','ren'], description: 'Browse separately for 20 minutes, pick one odd book for the group, optional coffee after.', safety: ['Public', 'Staffed', 'No private detours'], opener: 'What shelf do you always check first?' },
  { id: 'parallel-cafe', title: 'Parallel Café Sprint', badge: 'No-chat friendly', activity: 'Creative', venueId: 'cafe', time: 'Tomorrow · 10:30 AM', duration: '80 min', group: '3–5 people', cost: '$', energy: 'Low pressure', mood: ['No-chat','Creative','Low pressure','Cozy'], match: 94, people: ['noor','amelia','maya'], description: 'Bring a sketchbook, laptop, journal, or book. Exist together, then optional five-minute show-and-tell.', safety: ['Partner place', 'Staffed', 'Easy exit'], opener: 'What are you quietly working on?' },
  { id: 'museum-goblins', title: 'Museum Goblin Walk', badge: 'Daytime', activity: 'Museums', venueId: 'museum', time: 'Sun · 12:00 PM', duration: '2 hrs', group: '4–6 people', cost: '$', energy: 'Curious', mood: ['Curious','Daytime','Social'], match: 91, people: ['sofia','ren','ines'], description: 'Tiny exhibition route. Everyone picks one object to become weirdly attached to.', safety: ['Public', 'Daytime', 'Group route'], opener: 'Which object would you steal if stealing was legal and harmless?' },
  { id: 'board-game-tea', title: 'Beginner Board Games & Tea', badge: 'Partner pick', activity: 'Games', venueId: 'gamecafe', time: 'Thu · 6:00 PM', duration: '2 hrs', group: '4–6 people', cost: '$$', energy: 'Social', mood: ['Social','Cozy'], match: 84, people: ['arturo','jules','sofia'], description: 'Rules explained kindly. No tournament energy. Tea strongly encouraged.', safety: ['Verified host', 'Partner venue', 'Group-first'], opener: 'Do you prefer chaos games or cozy strategy?' },
  { id: 'park-loop', title: 'Daylight Park Loop', badge: 'Daylight only', activity: 'Walks', venueId: 'park', time: 'Sat · 9:30 AM', duration: '50 min', group: '3–5 people', cost: 'Free', energy: 'Gentle', mood: ['Daytime','Quiet','Low pressure'], match: 86, people: ['ren','amelia','mina'], description: 'A populated route with clear exits and a backup café if the weather misbehaves.', safety: ['Daytime', 'Public route', 'Buddy share'], opener: 'Are you a walk-in-silence person or a ramble person?' },
  { id: 'zine-market', title: 'Zine Market Micro-Crawl', badge: 'Weekend', activity: 'Creative', venueId: 'gallery', time: 'Sun · 1:00 PM', duration: '90 min', group: '3–6 people', cost: '$', energy: 'Curious', mood: ['Creative','Curious','Daytime'], match: 87, people: ['ines','noor','arturo'], description: 'Browse prints, zines, and tiny objects without needing to perform enthusiasm.', safety: ['Public', 'Staffed', 'Group-friendly'], opener: 'What tiny object are you weirdly drawn to?' }
];

const circles = [
  { id: 'readers', name: 'Slow Readers Club', imageId: 'readers', ritual: 'Bring whatever you are reading. Talk at the end only if people want to.', stats: ['12 regulars', 'Sundays', 'Quiet'], safety: 'Libraries and staffed cafés only.' },
  { id: 'film', name: 'Bad Movie Society', imageId: 'film', ritual: 'Kindly roast strange films without making anyone defend their taste.', stats: ['18 regulars', 'Fridays', 'Partner cinema'], safety: 'Public screenings and group exits.' },
  { id: 'walkers', name: 'Daylight Walkers', imageId: 'walkers', ritual: 'Short public routes, no isolated trails, backup café after.', stats: ['9 regulars', 'Mornings', 'Gentle'], safety: 'Daylight, mapped route, buddy share.' },
  { id: 'cafe', name: 'Café Parallel Play', imageId: 'cafe', ritual: 'People do their own thing together. Optional chat at the end.', stats: ['15 regulars', 'Weekdays', 'No-chat'], safety: 'Staffed partner venues.' }
];

const sponsors = [
  { id: 'aurora', name: 'Aurora Cinema', imageId: 'aurora', copy: 'Sponsored screenings show only when they match your mood, time, and safety settings.' },
  { id: 'nook', name: 'Nook & Spine', imageId: 'nook', copy: 'Partner bookstores host public, low-pressure circles with clear start and end times.' },
  { id: 'cafe', name: 'Café Pendiente', imageId: 'cafe', copy: 'Reserved first-hang tables: visible staff, public floor, and graceful exits.' },
  { id: 'museum', name: 'Modern Museum', imageId: 'museum', copy: 'Micro-tour sponsors work because they create better public plans, not random banners.' }
];

const MOBILE_LAYOUT_QUERY = '(max-width: 768px)';

const state = {
  view: 'today',
  theme: 'dusk',
  layout: 'desktop',
  nativePhone: false,
  mood: 'Low pressure',
  filter: 'All',
  search: '',
  shuffled: false
};
const moods = ['Low pressure', 'Quiet', 'Cozy', 'Curious', 'Books', 'Cinema', 'Creative', 'Social', 'Daytime', 'No-chat'];
const filters = ['All', 'Public only', 'Free', 'This week', 'Books', 'Cinema', 'Low pressure', 'Group 3–6', 'Partner picks'];
const lifecycle = {
  Saved: ['bookstore-drift', 'zine-market'],
  Interested: ['silent-reading', 'museum-goblins'],
  Confirmed: ['parallel-cafe'],
  Again: ['indie-film']
};

function localCandidates(kind, id) {
  const custom = window.KINDRED_ASSET_OVERRIDES?.[kind]?.[id];
  const folder = `assets/${kind}`;
  const guesses = extOrder.flatMap(ext => [
    `${folder}/${id}.${ext}`,
    `${folder}/${id.replaceAll('-', '_')}.${ext}`,
    `${folder}/${id.replaceAll('-', '')}.${ext}`
  ]);
  return [...(custom ? [custom] : []), ...guesses];
}
function imageCandidates(kind, id, remoteUrl) {
  return [...localCandidates(kind, id), remoteUrl].filter(Boolean);
}
function imageWrap(kind, id, label, options = {}) {
  const candidates = imageCandidates(kind, id, remote[kind]?.[id]);
  const first = candidates[0] || '';
  const data = escapeHtml(JSON.stringify(candidates));
  const labelSafe = escapeHtml(label || id);
  const classes = ['image-wrap', options.className || ''].filter(Boolean).join(' ');
  return `<div class="${classes}" data-fallback-label="${labelSafe}"><img class="smart-img" src="${escapeHtml(first)}" data-candidates='${data}' alt="${labelSafe}" loading="lazy" decoding="async" /></div>`;
}
function avatarSlot(personId, className = '') {
  const p = personById(personId);
  const candidates = imageCandidates('people', personId, remote.people[personId]);
  const data = escapeHtml(JSON.stringify(candidates));
  return `<span class="avatar-slot ${className}" data-fallback-label="${escapeHtml(p.name)}"><img class="smart-img" src="${escapeHtml(candidates[0])}" data-candidates='${data}' alt="${escapeHtml(p.name)}" loading="lazy" decoding="async" /></span>`;
}
function installSmartImages(root = document) {
  $$('.smart-img', root).forEach(img => {
    if (img.dataset.ready === '1') return;
    img.dataset.ready = '1';
    let candidates = [];
    try { candidates = JSON.parse(img.dataset.candidates || '[]'); } catch { candidates = []; }
    let idx = candidates.indexOf(img.getAttribute('src'));
    if (idx < 0) idx = 0;
    img.onerror = () => {
      idx += 1;
      if (idx < candidates.length) {
        img.src = candidates[idx];
        return;
      }
      const wrap = img.closest('[data-fallback-label]') || img.parentElement;
      const label = wrap?.dataset?.fallbackLabel || img.alt || 'Kindred';
      const fallback = document.createElement('div');
      fallback.className = 'image-fallback';
      fallback.innerHTML = `<strong>${escapeHtml(initials(label))}</strong>`;
      img.replaceWith(fallback);
    };
  });
}
function initials(label) {
  return String(label).split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase() || 'K';
}
function escapeHtml(str = '') {
  return String(str).replace(/[&<>'"]/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[ch]));
}
function planById(id) { return plans.find(p => p.id === id) || plans[0]; }
function personById(id) { return people.find(p => p.id === id) || people[0]; }
function venueById(id) { return venues.find(v => v.id === id) || venues[0]; }

function renderNav() {
  const side = navItems.map(item => `<button class="nav-item ${state.view === item.id ? 'is-active' : ''}" data-view-link="${item.id}" type="button"><span class="nav-icon">${item.icon}</span><span>${item.label}</span></button>`).join('');
  const bottom = navItems.map(item => `<button class="bottom-item ${state.view === item.id ? 'is-active' : ''}" data-view-link="${item.id}" type="button" aria-label="${item.label}"><strong>${item.icon}</strong><span>${item.label}</span></button>`).join('');
  $('#sideNav').innerHTML = side;
  $('#bottomNav').innerHTML = bottom;
}
function setView(view) {
  if (!navItems.some(n => n.id === view)) return;
  state.view = view;
  $$('.view').forEach(el => el.classList.toggle('is-active', el.dataset.view === view));
  renderNav();
  if (state.nativePhone) window.scrollTo({ top: 0, behavior: 'smooth' });
  else $('#appMain')?.scrollTo({ top: 0, behavior: 'smooth' });
}
function isMobileViewport() {
  return window.matchMedia(MOBILE_LAYOUT_QUERY).matches;
}

function syncViewportHeight() {
  const vv = window.visualViewport;
  const height = Math.round(vv?.height ?? window.innerHeight);
  const offsetTop = Math.round(vv?.offsetTop ?? 0);
  const layoutHeight = window.innerHeight;
  const bottomChrome = Math.max(0, Math.round(layoutHeight - offsetTop - height));
  document.documentElement.style.setProperty('--kindred-vh', `${height}px`);
  document.documentElement.style.setProperty('--kindred-vv-top', `${offsetTop}px`);
  document.documentElement.style.setProperty('--kindred-ui-bottom', `${bottomChrome}px`);
}

let viewportHeightBound = false;
function bindViewportHeight() {
  syncViewportHeight();
  if (viewportHeightBound) return;
  viewportHeightBound = true;
  const onViewportChange = () => syncViewportHeight();
  window.addEventListener('resize', onViewportChange, { passive: true });
  window.visualViewport?.addEventListener('resize', onViewportChange, { passive: true });
  window.visualViewport?.addEventListener('scroll', onViewportChange, { passive: true });
  window.addEventListener('orientationchange', () => setTimeout(syncViewportHeight, 120), { passive: true });
}

function syncNativePhoneUI() {
  state.nativePhone = isMobileViewport();
  document.body.classList.toggle('native-phone', state.nativePhone);
  document.documentElement.classList.toggle('native-phone-root', state.nativePhone);
  const layoutToggles = $('#layoutToggles');
  if (layoutToggles) layoutToggles.hidden = state.nativePhone;
  const settingsPhone = $('#settingsPhone')?.closest('.setting-row');
  if (settingsPhone) settingsPhone.hidden = state.nativePhone;
  if (state.nativePhone) bindViewportHeight();
  else {
    document.documentElement.style.removeProperty('--kindred-vh');
    document.documentElement.style.removeProperty('--kindred-vv-top');
    document.documentElement.style.removeProperty('--kindred-ui-bottom');
  }
}

function setLayout(layout) {
  if (state.nativePhone) layout = 'phone';
  state.layout = layout;
  document.body.classList.toggle('layout-phone', layout === 'phone');
  document.body.classList.toggle('layout-desktop', layout !== 'phone');
  const phoneToggle = $('#phoneToggle');
  const desktopToggle = $('#desktopToggle');
  if (phoneToggle) {
    phoneToggle.classList.toggle('is-active', layout === 'phone');
    phoneToggle.setAttribute('aria-pressed', layout === 'phone');
  }
  if (desktopToggle) {
    desktopToggle.classList.toggle('is-active', layout !== 'phone');
    desktopToggle.setAttribute('aria-pressed', layout !== 'phone');
  }
  closeSheet();
}
function setTheme(theme) {
  state.theme = theme;
  document.body.classList.toggle('theme-light', theme === 'light');
  document.body.classList.toggle('theme-dusk', theme !== 'light');
  $('#themeToggle').classList.toggle('is-active', theme === 'light');
  $('#themeToggle').textContent = theme === 'light' ? 'Dusk mode' : 'Warm light';
  $('#themeToggle').setAttribute('aria-pressed', theme === 'light');
}

function renderMoodChips() {
  $('#moodChips').innerHTML = moods.map(m => `<button class="chip ${state.mood === m ? 'is-active' : ''}" data-mood="${escapeHtml(m)}" type="button">${escapeHtml(m)}</button>`).join('');
}
function renderFilterChips() {
  $('#filterChips').innerHTML = filters.map(f => `<button class="chip ${state.filter === f ? 'is-active' : ''}" data-filter="${escapeHtml(f)}" type="button">${escapeHtml(f)}</button>`).join('');
}
function peopleLine(ids) {
  return `<span class="avatars">${ids.slice(0, 3).map(id => avatarSlot(id)).join('')}</span><span>${ids.length + 2} interested · plan fit</span>`;
}
function planImage(plan) {
  const venue = venueById(plan.venueId);
  return imageWrap('places', venue.imageId, venue.name);
}
function renderPlanCard(plan) {
  const partner = /partner/i.test(plan.badge);
  return `<article class="plan-card">
    <div class="image-wrap-holder">${planImage(plan)}<span class="card-badge ${partner ? 'partner' : ''}">${escapeHtml(plan.badge)}</span></div>
    <div class="plan-body">
      <div class="meta-row"><span class="meta-pill">${escapeHtml(plan.time)}</span><span class="meta-pill">${escapeHtml(plan.energy)}</span><span class="meta-pill">${escapeHtml(plan.duration)}</span></div>
      <div><h3>${escapeHtml(plan.title)}</h3><p>${escapeHtml(plan.description)}</p></div>
      <div class="safety-strip">${plan.safety.map(s => `<span>${escapeHtml(s)}</span>`).join('')}</div>
      <div class="plan-footer"><div class="people-line">${peopleLine(plan.people)}</div><button class="join-btn" data-open-plan="${plan.id}" type="button">Details</button></div>
    </div>
  </article>`;
}
function sortedTodayPlans() {
  const selected = plans.filter(plan => plan.mood.includes(state.mood) || plan.energy === state.mood || plan.activity === state.mood);
  const rest = plans.filter(plan => !selected.includes(plan));
  const deck = [...selected, ...rest];
  return state.shuffled ? [...deck].reverse() : deck;
}
function renderToday() {
  renderMoodChips();
  $('#heroAvatars').innerHTML = ['maya','leo','sofia','noor'].map(id => avatarSlot(id)).join('');
  $('#todayPlans').innerHTML = sortedTodayPlans().slice(0, 6).map(renderPlanCard).join('');
  installSmartImages($('#appMain'));
}
function matchesSearch(plan) {
  const q = state.search.trim().toLowerCase();
  if (!q) return true;
  const venue = venueById(plan.venueId);
  const haystack = [plan.title, plan.badge, plan.activity, plan.time, plan.duration, plan.group, plan.cost, plan.energy, plan.description, plan.opener, ...plan.mood, ...plan.safety, venue.name, venue.type, venue.note, ...venue.tags].join(' ').toLowerCase();
  return haystack.includes(q);
}
function matchesFilter(plan) {
  if (state.filter === 'All') return true;
  if (state.filter === 'Public only') return plan.safety.join(' ').toLowerCase().includes('public') || plan.safety.join(' ').toLowerCase().includes('staffed') || plan.safety.join(' ').toLowerCase().includes('venue');
  if (state.filter === 'Free') return plan.cost.toLowerCase().includes('free');
  if (state.filter === 'This week') return true;
  if (state.filter === 'Group 3–6') return /3|4|5|6/.test(plan.group);
  if (state.filter === 'Partner picks') return /partner/i.test(plan.badge) || venueById(plan.venueId).tags.includes('Partner');
  return plan.mood.includes(state.filter) || plan.activity === state.filter || plan.energy === state.filter;
}
function filteredPlans() { return plans.filter(p => matchesSearch(p) && matchesFilter(p)); }
function renderExplore() {
  renderFilterChips();
  const results = filteredPlans();
  $('#resultCount').textContent = results.length;
  $('#exploreResults').innerHTML = results.length ? results.map(plan => {
    const venue = venueById(plan.venueId);
    return `<article class="result-card">
      ${imageWrap('places', venue.imageId, venue.name)}
      <div><div class="meta-row"><span class="meta-pill">${escapeHtml(plan.activity)}</span><span class="meta-pill">${escapeHtml(plan.group)}</span><span class="meta-pill">${escapeHtml(plan.cost)}</span></div><h3>${escapeHtml(plan.title)}</h3><p>${escapeHtml(plan.time)} · ${escapeHtml(venue.name)}. ${escapeHtml(plan.description)}</p><div class="safety-strip">${plan.safety.slice(0,2).map(s => `<span>${escapeHtml(s)}</span>`).join('')}</div></div>
      <button class="join-btn" data-open-plan="${plan.id}" type="button">Open</button>
    </article>`;
  }).join('') : `<div class="empty-state"><h3>No exact matches yet.</h3><p>Try a broader search, or create a public plan and let compatible people join softly.</p><button class="btn primary" data-open-composer type="button">Create this vibe</button></div>`;
  const venue = venues[1];
  $('#featuredVenue').innerHTML = `${imageWrap('places', venue.imageId, venue.name)}<span class="partner-label">Partner place</span><h3>${escapeHtml(venue.name)}</h3><p>${escapeHtml(venue.note)}</p><div class="tag-row">${venue.tags.map(t => `<span>${escapeHtml(t)}</span>`).join('')}</div><div class="button-row"><button class="btn secondary" data-open-venue="${venue.id}" type="button">View venue</button></div>`;
  installSmartImages($('#appMain'));
}
function renderPlanLifecycle() {
  $('#planLifecycle').innerHTML = Object.entries(lifecycle).map(([stage, ids]) => `<section class="life-column"><h2>${stage}</h2><div class="life-list">${ids.map(id => {
    const p = planById(id);
    return `<article class="life-card"><span class="eyebrow">${escapeHtml(p.activity)}</span><h3>${escapeHtml(p.title)}</h3><p>${escapeHtml(p.time)} · ${escapeHtml(venueById(p.venueId).name)}</p><div class="meta-row"><span class="meta-pill">${p.match}% fit</span><span class="meta-pill">${escapeHtml(p.group)}</span></div><button class="btn secondary" data-open-plan="${p.id}" type="button">Review</button></article>`;
  }).join('')}</div></section>`).join('');
}
function renderCircles() {
  $('#circleGrid').innerHTML = circles.map(circle => `<article class="circle-card">${imageWrap('circles', circle.imageId, circle.name)}<div class="circle-body"><div><span class="eyebrow">Circle</span><h3>${escapeHtml(circle.name)}</h3><p>${escapeHtml(circle.ritual)}</p></div><div class="stat-row">${circle.stats.map(s => `<span>${escapeHtml(s)}</span>`).join('')}</div><div class="safety-strip"><span>${escapeHtml(circle.safety)}</span></div><button class="btn secondary" data-open-circle="${circle.id}" type="button">View circle</button></div></article>`).join('');
  installSmartImages($('#appMain'));
}
function renderYou() {
  $$('[data-person-avatar]').forEach(slot => { slot.outerHTML = avatarSlot(slot.dataset.personAvatar, slot.classList.contains('hero-avatar') ? 'hero-avatar' : ''); });
  const stats = [['3','cinema nights'], ['2','book chats'], ['4','third places'], ['5','people met'], ['2','again candidates'], ['1','new circle']];
  $('#passportStats').innerHTML = stats.map(([n, label]) => `<div class="passport-stat"><strong>${n}</strong><span>${escapeHtml(label)}</span></div>`).join('');
  installSmartImages($('#appMain'));
}
function renderRails() {
  $('#railLive').innerHTML = `<span class="eyebrow">Live nearby</span><h3>8 people want a low-key plan tonight.</h3><div class="avatar-stack">${people.slice(0,6).map(p => avatarSlot(p.id)).join('')}</div><p>Kindred recommends a public group plan before any one-on-one invite.</p>`;
  const sponsor = sponsors[0];
  $('#railPartner').innerHTML = `${imageWrap('sponsors', sponsor.imageId, sponsor.name)}<span class="partner-label">Partner pick</span><h3>${escapeHtml(sponsor.name)}</h3><p>${escapeHtml(sponsor.copy)}</p>`;
  $('#railSafety').innerHTML = `<span class="eyebrow">Safety architecture</span><h3>Make risk inconvenient.</h3><p>Venue lock, public first meets, group defaults, safety buddy cards, and no private-location pressure.</p><div class="button-row"><button class="btn secondary" data-open-safety type="button">Open safety flow</button></div>`;
  installSmartImages($('#appShell'));
}
function renderAll() {
  renderNav(); renderToday(); renderExplore(); renderPlanLifecycle(); renderCircles(); renderYou(); renderRails(); installSmartImages(document);
}

function openSheet(title, eyebrow, body, options = {}) {
  const layer = $('#sheetLayer');
  layer.className = 'sheet-layer is-open';
  layer.innerHTML = `<div class="sheet-backdrop" data-close-sheet></div><article class="sheet ${options.full ? 'full' : ''}" role="dialog" aria-modal="true" aria-label="${escapeHtml(title)}"><header class="sheet-head"><div><span class="eyebrow">${escapeHtml(eyebrow)}</span><h2>${escapeHtml(title)}</h2></div><button class="close-sheet" data-close-sheet type="button" aria-label="Close">×</button></header><div class="sheet-body">${body}</div></article>`;
  installSmartImages(layer);
}
function closeSheet() { $('#sheetLayer').className = 'sheet-layer'; $('#sheetLayer').innerHTML = ''; }
function openPlan(id) {
  const plan = planById(id); const venue = venueById(plan.venueId);
  openSheet(plan.title, plan.badge, `${imageWrap('places', venue.imageId, venue.name, { className: 'sheet-image' })}<p>${escapeHtml(plan.description)}</p><div class="meta-row"><span class="meta-pill">${escapeHtml(plan.time)}</span><span class="meta-pill">${escapeHtml(plan.duration)}</span><span class="meta-pill">${escapeHtml(plan.group)}</span><span class="meta-pill">${escapeHtml(plan.cost)}</span></div><div class="compat-card"><strong>${plan.match}% compatibility receipt</strong><ul><li>Shared interest: ${escapeHtml(plan.activity)} and ${escapeHtml(plan.energy.toLowerCase())} energy.</li><li>Venue is ${escapeHtml(venue.type.toLowerCase())}, public, and first-hang friendly.</li><li>Suggested opener: “${escapeHtml(plan.opener)}”</li></ul></div><div class="profile-sheet-top"><div class="mini-avatars">${plan.people.map(id => avatarSlot(id)).join('')}</div><p>${plan.people.length + 2} people are curious. New users join softly before confirming.</p></div><div class="safety-strip">${plan.safety.map(s => `<span>${escapeHtml(s)}</span>`).join('')}<span>Buddy card</span><span>No private detours</span></div><div class="sheet-actions"><button class="btn primary" type="button">I’m curious</button><button class="btn secondary" type="button">Save</button><button class="btn secondary" data-open-composer type="button">Remix</button></div>`);
}
function openProfile(id) {
  const p = personById(id);
  openSheet(`${p.name}, ${p.age}`, p.handle, `<div class="profile-sheet-top">${avatarSlot(p.id, 'hero-avatar')}<div><p>${escapeHtml(p.bio)}</p><div class="tag-row">${p.vibe.map(v => `<span>${escapeHtml(v)}</span>`).join('')}</div></div></div><div class="two-mini"><div class="info-tile"><strong>Ideal hang</strong><p>${escapeHtml(p.ideal)}</p></div><div class="info-tile"><strong>Social rhythm</strong><p>${escapeHtml(p.rhythm)}</p></div></div><div class="compat-card"><strong>Why Kindred thinks you’d get along</strong><ul><li>Compatible public-first boundaries.</li><li>Similar pace for small-group plans.</li><li>Strong overlap with books, cafés, cinema, or quiet curiosity.</li></ul></div><div class="sheet-actions"><button class="btn primary" data-open-plan="silent-reading" type="button">See suggested plan</button><button class="btn secondary" type="button">Save profile</button></div>`);
}
function openVenue(id) {
  const v = venueById(id);
  const related = plans.filter(p => p.venueId === id).slice(0, 2);
  openSheet(v.name, v.type, `${imageWrap('places', v.imageId, v.name, { className: 'sheet-image' })}<p>${escapeHtml(v.note)}</p><div class="tag-row">${v.tags.map(t => `<span>${escapeHtml(t)}</span>`).join('')}</div><div class="compat-card"><strong>Why it is first-hang friendly</strong><ul><li>Public, staffed, or visibly hosted.</li><li>Clear exits and simple meeting points.</li><li>Works for groups before one-on-one hangs.</li></ul></div>${related.map(renderCompactPlan).join('')}`);
}
function renderCompactPlan(plan) {
  return `<article class="life-card"><span class="eyebrow">${escapeHtml(plan.activity)}</span><h3>${escapeHtml(plan.title)}</h3><p>${escapeHtml(plan.time)} · ${escapeHtml(plan.group)}</p><button class="btn secondary" data-open-plan="${plan.id}" type="button">Open plan</button></article>`;
}
function openCircle(id) {
  const c = circles.find(x => x.id === id) || circles[0];
  openSheet(c.name, 'Circle', `${imageWrap('circles', c.imageId, c.name, { className: 'sheet-image' })}<p>${escapeHtml(c.ritual)}</p><div class="stat-row">${c.stats.map(s => `<span>${escapeHtml(s)}</span>`).join('')}</div><div class="safety-strip"><span>${escapeHtml(c.safety)}</span><span>Recurring public plans</span><span>Host norms</span></div><div class="sheet-actions"><button class="btn primary" type="button">Join softly</button><button class="btn secondary" type="button">Save circle</button></div>`);
}
function openSafety() {
  openSheet('Safety is product architecture', 'Trust model', `<div class="compat-card"><strong>Launch rules</strong><ul><li>First meets default to public, staffed places.</li><li>Group plans are favored over private one-on-one plans.</li><li>Location changes require in-app approval and safety-card updates.</li><li>No address sharing, pickup pressure, sexual openers, or private-location first meets.</li></ul></div><div class="two-mini"><div class="info-tile"><strong>Safety buddy card</strong><p>Share plan, venue, group size, and timer status with someone you trust.</p></div><div class="info-tile"><strong>Escape hatch</strong><p>Fake call, alert buddy, leave plan, block/report, or see nearby exits.</p></div></div><div class="safety-strip"><span>Venue lock</span><span>Own transport</span><span>Check-ins</span><span>Report pressure</span></div>`);
}
function openComposer() {
  openSheet('Build me a plan', 'Plan composer', `<form class="composer-grid" id="composerForm"><label>Moment vibe<select name="vibe"><option>Quiet and cozy</option><option>Curious and cinematic</option><option>Creative but low-pressure</option><option>Social and playful</option></select></label><label>Group comfort<select name="group"><option>Small group · 3–5</option><option>One-on-one, public only</option><option>Browsing only</option><option>Open if a group forms</option></select></label><label>When<input name="when" value="This weekend afternoon" /></label><label>Activity seed<textarea name="seed" rows="3">Bookstore browsing, optional coffee, no pressure to be witty.</textarea></label><button class="btn primary" type="submit">Generate plan</button></form><div class="generated-plan compat-card" id="generatedPlan"><strong>Generated: Bookstore Drift</strong><p>Saturday afternoon at a staffed bookstore. Browse separately, pick one odd book for the group, optional coffee after. Best with 3–5 people.</p><div class="safety-strip"><span>Public</span><span>Staffed</span><span>Group-friendly</span><span>Soft join</span></div></div>`, { full: state.layout === 'phone' });
}

function bindEvents() {
  document.addEventListener('click', event => {
    const target = event.target.closest('button, [data-view-link], [data-open-plan], [data-open-profile], [data-open-venue], [data-open-circle], [data-close-sheet], [data-open-composer], [data-open-safety]');
    if (!target) return;
    if (target.dataset.viewLink) setView(target.dataset.viewLink);
    if (target.dataset.openPlan) openPlan(target.dataset.openPlan);
    if (target.dataset.openProfile) openProfile(target.dataset.openProfile);
    if (target.dataset.openVenue) openVenue(target.dataset.openVenue);
    if (target.dataset.openCircle) openCircle(target.dataset.openCircle);
    if (target.hasAttribute('data-open-composer')) openComposer();
    if (target.hasAttribute('data-open-safety')) openSafety();
    if (target.hasAttribute('data-close-sheet')) closeSheet();
  });
  $('#phoneToggle').addEventListener('click', () => setLayout('phone'));
  $('#desktopToggle').addEventListener('click', () => setLayout('desktop'));
  $('#themeToggle').addEventListener('click', () => setTheme(state.theme === 'light' ? 'dusk' : 'light'));
  $('#settingsTheme').addEventListener('click', () => setTheme(state.theme === 'light' ? 'dusk' : 'light'));
  $('#settingsPhone')?.addEventListener('click', () => {
    if (state.nativePhone) return;
    setLayout(state.layout === 'phone' ? 'desktop' : 'phone');
  });
  $('#resetMoodBtn').addEventListener('click', () => { state.mood = 'Low pressure'; renderToday(); });
  $('#shuffleBtn').addEventListener('click', () => { state.shuffled = !state.shuffled; renderToday(); });
  $('#searchInput').addEventListener('input', event => { state.search = event.target.value; renderExplore(); });
  $('#moodChips').addEventListener('click', event => { const chip = event.target.closest('[data-mood]'); if (!chip) return; state.mood = chip.dataset.mood; renderToday(); });
  $('#filterChips').addEventListener('click', event => { const chip = event.target.closest('[data-filter]'); if (!chip) return; state.filter = chip.dataset.filter; renderExplore(); });
  document.addEventListener('submit', event => {
    if (event.target.id !== 'composerForm') return;
    event.preventDefault();
    $('#generatedPlan')?.classList.add('is-visible');
  });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeSheet(); });
}

function initLayout() {
  syncNativePhoneUI();
  setLayout(isMobileViewport() ? 'phone' : 'desktop');
  window.matchMedia(MOBILE_LAYOUT_QUERY).addEventListener('change', event => {
    syncNativePhoneUI();
    setLayout(event.matches ? 'phone' : 'desktop');
  });
}

renderAll();
bindEvents();
setTheme('dusk');
initLayout();

/* --- v2.1 polish pass: interactive save, generated plan success, safer sheets --- */
(function applyKindredV21Polish(){
  if (window.__kindredV21Applied) return;
  window.__kindredV21Applied = true;

  state.savedPlans = new Set(lifecycle.Saved || []);
  state.interestedPlans = new Set(lifecycle.Interested || []);
  state.generatedPlanCreated = false;

  const generatedPlanId = 'generated-bookstore-drift';
  const generatedPlan = {
    id: generatedPlanId,
    title: 'Generated Bookstore Drift',
    badge: 'Generated',
    activity: 'Books',
    venueId: 'bookstore',
    time: 'This weekend · afternoon',
    duration: '90 min',
    group: '3–5 people',
    cost: 'Free browse',
    energy: 'Cozy',
    mood: ['Books','Cozy','Low pressure','Generated'],
    match: 93,
    people: ['maya','mina','leo'],
    description: 'Browse separately, pick one odd book for the group, then keep coffee optional so nobody feels trapped in the plan.',
    safety: ['Public', 'Staffed', 'Group-friendly', 'Soft join'],
    opener: 'What shelf do you secretly judge first?'
  };

  function removeFromLifecycle(planId) {
    Object.keys(lifecycle).forEach(stage => {
      lifecycle[stage] = (lifecycle[stage] || []).filter(id => id !== planId);
    });
  }
  function addToLifecycle(planId, stage) {
    removeFromLifecycle(planId);
    if (!lifecycle[stage]) lifecycle[stage] = [];
    lifecycle[stage].unshift(planId);
  }
  function planStage(planId) {
    for (const [stage, ids] of Object.entries(lifecycle)) {
      if ((ids || []).includes(planId)) return stage;
    }
    return null;
  }
  function ensureGeneratedPlan() {
    if (!plans.some(p => p.id === generatedPlanId)) plans.unshift(generatedPlan);
    state.generatedPlanCreated = true;
  }
  function showToast(title, message, timeout = 2600) {
    let stack = $('#toastStack');
    if (!stack) {
      stack = document.createElement('div');
      stack.id = 'toastStack';
      stack.className = 'toast-stack';
      $('#appShell').appendChild(stack);
    }
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<div><strong>${escapeHtml(title)}</strong><span>${escapeHtml(message)}</span></div><button data-close-toast type="button">Okay</button>`;
    stack.appendChild(toast);
    window.setTimeout(() => toast.remove(), timeout);
  }
  function markPlan(planId, stage) {
    if (!planId) return;
    if (stage === 'Saved') state.savedPlans.add(planId);
    if (stage === 'Interested') state.interestedPlans.add(planId);
    addToLifecycle(planId, stage);
    renderPlanLifecycle();
    renderToday();
    renderExplore();
    const plan = planById(planId);
    showToast(stage === 'Saved' ? 'Saved to Plans' : 'Interest added', `${plan.title} is now under ${stage}.`);
  }

  const oldOpenSheet = openSheet;
  openSheet = function polishedOpenSheet(title, eyebrow, body, options = {}) {
    const layer = $('#sheetLayer');
    const classes = ['sheet'];
    if (options.full) classes.push('full');
    if (options.wide) classes.push('wide');
    if (options.className) classes.push(options.className);
    layer.className = 'sheet-layer is-open';
    layer.innerHTML = `<div class="sheet-backdrop" data-close-sheet></div><article class="${classes.join(' ')}" role="dialog" aria-modal="true" aria-label="${escapeHtml(title)}"><header class="sheet-head"><div><span class="eyebrow">${escapeHtml(eyebrow)}</span><h2>${escapeHtml(title)}</h2></div><button class="close-sheet" data-close-sheet type="button" aria-label="Close">×</button></header><div class="sheet-body">${body}</div></article>`;
    installSmartImages(layer);
  };

  renderPlanCard = function polishedRenderPlanCard(plan) {
    const partner = /partner/i.test(plan.badge);
    const stage = planStage(plan.id);
    const isSaved = state.savedPlans?.has(plan.id);
    const status = stage ? `<span class="status-chip">✓ ${escapeHtml(stage)}</span>` : '';
    return `<article class="plan-card ${isSaved ? 'is-saved' : ''}">
      <div class="image-wrap-holder">${planImage(plan)}<span class="card-badge ${partner ? 'partner' : ''}">${escapeHtml(plan.badge)}</span></div>
      <div class="plan-body">
        <div class="meta-row"><span class="meta-pill">${escapeHtml(plan.time)}</span><span class="meta-pill">${escapeHtml(plan.energy)}</span><span class="meta-pill">${escapeHtml(plan.duration)}</span></div>
        <div><h3>${escapeHtml(plan.title)}</h3><p>${escapeHtml(plan.description)}</p></div>
        <div class="safety-strip">${plan.safety.map(s => `<span>${escapeHtml(s)}</span>`).join('')}</div>
        ${status}
        <div class="plan-footer"><div class="people-line">${peopleLine(plan.people)}</div><div class="plan-mini-actions"><button class="join-btn ${isSaved ? 'is-done' : ''}" data-save-plan="${plan.id}" type="button">${isSaved ? 'Saved' : 'Save'}</button><button class="join-btn" data-open-plan="${plan.id}" type="button">Details</button></div></div>
      </div>
    </article>`;
  };

  renderPlanLifecycle = function polishedRenderPlanLifecycle() {
    $('#planLifecycle').innerHTML = Object.entries(lifecycle).map(([stage, ids]) => `<section class="life-column"><h2>${escapeHtml(stage)}</h2><div class="life-list">${(ids || []).map(id => {
      const p = planById(id);
      return `<article class="life-card"><span class="eyebrow">${escapeHtml(p.activity)}</span><h3>${escapeHtml(p.title)}</h3><p>${escapeHtml(p.time)} · ${escapeHtml(venueById(p.venueId).name)}</p><div class="meta-row"><span class="meta-pill">${p.match}% fit</span><span class="meta-pill">${escapeHtml(p.group)}</span></div><button class="btn secondary" data-open-plan="${p.id}" type="button">Review</button></article>`;
    }).join('') || `<div class="empty-state"><h3>Nothing here yet.</h3><p>Save a plan, mark interest, or generate a new idea.</p></div>`}</div></section>`).join('');
  };

  openPlan = function polishedOpenPlan(id) {
    const plan = planById(id);
    const venue = venueById(plan.venueId);
    const isSaved = state.savedPlans?.has(plan.id);
    const isInterested = state.interestedPlans?.has(plan.id);
    const stage = planStage(plan.id);
    openSheet(plan.title, plan.badge, `<div class="plan-detail-content">
      ${imageWrap('places', venue.imageId, venue.name, { className: 'plan-detail-image' })}
      ${stage ? `<span class="status-chip">✓ In ${escapeHtml(stage)}</span>` : ''}
      <p>${escapeHtml(plan.description)}</p>
      <div class="meta-row"><span class="meta-pill">${escapeHtml(plan.time)}</span><span class="meta-pill">${escapeHtml(plan.duration)}</span><span class="meta-pill">${escapeHtml(plan.group)}</span><span class="meta-pill">${escapeHtml(plan.cost)}</span></div>
      <div class="compat-card"><strong>${plan.match}% compatibility receipt</strong><ul><li>Shared interest: ${escapeHtml(plan.activity)} and ${escapeHtml(plan.energy.toLowerCase())} energy.</li><li>Venue is ${escapeHtml(venue.type.toLowerCase())}, public, and first-hang friendly.</li><li>Suggested opener: “${escapeHtml(plan.opener)}”</li></ul></div>
      <div class="profile-sheet-top"><div class="mini-avatars">${plan.people.map(pid => avatarSlot(pid)).join('')}</div><p>${plan.people.length + 2} people are curious. New users join softly before confirming.</p></div>
      <div class="safety-strip">${plan.safety.map(s => `<span>${escapeHtml(s)}</span>`).join('')}<span>Buddy card</span><span>No private detours</span></div>
      <div class="sheet-actions"><button class="btn primary ${isInterested ? 'is-done' : ''}" data-interest-plan="${plan.id}" type="button">${isInterested ? 'Curious ✓' : 'I’m curious'}</button><button class="btn secondary ${isSaved ? 'is-done' : ''}" data-save-plan="${plan.id}" type="button">${isSaved ? 'Saved ✓' : 'Save'}</button><button class="btn secondary" data-open-composer type="button">Remix</button></div>
    </div>`, { className: 'plan-sheet', full: state.layout === 'phone' });
  };

  openSafety = function polishedOpenSafety() {
    openSheet('Safety is product architecture', 'Trust model', `<div class="safety-flow">
      <div class="compat-card"><strong>Launch rules</strong><ul><li>First meets default to public, staffed places.</li><li>Group plans are favored over private one-on-one plans.</li><li>Location changes require in-app approval and safety-card updates.</li><li>No address sharing, pickup pressure, sexual openers, or private-location first meets.</li></ul></div>
      <div class="two-mini"><div class="info-tile"><strong>Safety buddy card</strong><p>Share plan, venue, group size, and timer status with someone you trust.</p></div><div class="info-tile"><strong>Escape hatch</strong><p>Fake call, alert buddy, leave plan, block/report, or see nearby exits.</p></div></div>
      <div class="two-mini"><div class="info-tile"><strong>Venue lock</strong><p>First-plan location changes have to stay public and update the safety card.</p></div><div class="info-tile"><strong>Private-pressure report</strong><p>Requests for addresses, pickups, or private detours are first-class report reasons.</p></div></div>
      <div class="safety-strip"><span>Venue lock</span><span>Own transport</span><span>Check-ins</span><span>Report pressure</span></div>
    </div>`, { className: 'safety-sheet', wide: true, full: state.layout === 'phone' });
  };

  openComposer = function polishedOpenComposer() {
    openSheet('Build me a plan', 'Plan composer', `<form class="composer-grid" id="composerForm"><label>Moment vibe<select name="vibe"><option>Quiet and cozy</option><option>Curious and cinematic</option><option>Creative but low-pressure</option><option>Social and playful</option></select></label><label>Group comfort<select name="group"><option>Small group · 3–5</option><option>One-on-one, public only</option><option>Browsing only</option><option>Open if a group forms</option></select></label><label>When<input name="when" value="This weekend afternoon" /></label><label>Activity seed<textarea name="seed" rows="3">Bookstore browsing, optional coffee, no pressure to be witty.</textarea></label><button class="btn primary" type="submit">Generate plan</button></form><div class="generated-plan compat-card" id="generatedPlan"><strong>Generated: Bookstore Drift</strong><p>Saturday afternoon at a staffed bookstore. Browse separately, pick one odd book for the group, optional coffee after. Best with 3–5 people.</p><div class="safety-strip"><span>Public</span><span>Staffed</span><span>Group-friendly</span><span>Soft join</span></div></div>`, { className: 'composer-sheet', full: state.layout === 'phone' });
  };

  document.addEventListener('click', event => {
    const save = event.target.closest('[data-save-plan]');
    const interest = event.target.closest('[data-interest-plan]');
    const closeToast = event.target.closest('[data-close-toast]');
    if (save) {
      event.preventDefault();
      markPlan(save.dataset.savePlan, 'Saved');
      const activeSheet = $('#sheetLayer.is-open .sheet');
      if (activeSheet) openPlan(save.dataset.savePlan);
    }
    if (interest) {
      event.preventDefault();
      markPlan(interest.dataset.interestPlan, 'Interested');
      const activeSheet = $('#sheetLayer.is-open .sheet');
      if (activeSheet) openPlan(interest.dataset.interestPlan);
    }
    if (closeToast) closeToast.closest('.toast')?.remove();
  });

  document.addEventListener('submit', event => {
    if (event.target.id !== 'composerForm') return;
    event.preventDefault();
    ensureGeneratedPlan();
    addToLifecycle(generatedPlanId, 'Saved');
    state.savedPlans.add(generatedPlanId);
    renderAll();
    closeSheet();
    setView('plans');
    showToast('Plan generated', 'A safe public bookstore plan was added to Saved.');
  });

  renderAll();
})();
