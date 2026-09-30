/**
 * GETO // TELEGRAM SYSTEM
 * Main Script - Dynamic Multi-Page Engine
 * Tech Stack: Pure JavaScript (ES Module)
 */

import { CONFIG } from './config.js';

// Global reference
window.CONFIG = CONFIG;

document.addEventListener('DOMContentLoaded', () => {
  initMatrixRain();
  renderSharedNavbar();
  renderSharedFooter();
  initThemeMusic();

  const page = document.body.dataset.page || 'home';

  switch (page) {
    case 'home':
      renderHomePage();
      break;
    case 'bots':
      renderBotsPage();
      break;
    case 'communities':
      renderCommunitiesPage();
      break;
    case 'about':
      renderAboutPage();
      break;
    case 'contact':
      renderContactPage();
      break;
    default:
      renderHomePage();
  }
});

/* ==========================================================================
   1. MATRIX RAIN BACKGROUND (CANVAS)
   ========================================================================== */
function initMatrixRain() {
  const canvas = document.getElementById('matrix-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const characters = 'ｦｱｳｴｵｶｷｹｺｻｼｽｾｿﾀﾂﾃﾅﾆﾇﾈﾊﾋﾎﾏﾐﾑﾒﾓﾔﾕﾗﾘﾜ109876543210ABCDEF@#$%&*';
  const fontSize = 14;
  let columns = Math.floor(width / fontSize);
  let drops = [];

  for (let i = 0; i < columns; i++) {
    drops[i] = Math.floor(Math.random() * -height);
  }

  function draw() {
    ctx.fillStyle = 'rgba(5, 0, 10, 0.08)';
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = '#00ff9d';
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
      const text = characters.charAt(Math.floor(Math.random() * characters.length));
      const x = i * fontSize;
      const y = drops[i] * fontSize;

      // Color variation for subtle cyber aesthetic
      if (Math.random() > 0.95) {
        ctx.fillStyle = '#00e5ff';
      } else if (Math.random() > 0.98) {
        ctx.fillStyle = '#ff006e';
      } else {
        ctx.fillStyle = '#00ff9d';
      }

      ctx.fillText(text, x, y);

      if (y > height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  let animationFrame;
  function animate() {
    draw();
    animationFrame = requestAnimationFrame(animate);
  }
  animate();

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    columns = Math.floor(width / fontSize);
    drops = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * -height);
    }
  });
}

/* ==========================================================================
   2. SHARED NAVBAR
   ========================================================================== */
function renderSharedNavbar() {
  const navContainer = document.getElementById('navbar-container');
  if (!navContainer) return;

  const currentPage = document.body.dataset.page || 'home';

  const navLinks = [
    { page: 'home', label: 'HOME', href: '/index.html' },
    { page: 'bots', label: 'BOTS', href: '/bots.html' },
    { page: 'communities', label: 'COMMUNITIES', href: '/communities.html' },
    { page: 'about', label: 'ABOUT', href: '/about.html' },
    { page: 'contact', label: 'CONTACT', href: '/contact.html' }
  ];

  const linksHtml = navLinks
    .map(link => {
      const isActive = link.page === currentPage ? 'active' : '';
      return `<li><a href="${link.href}" class="nav-link ${isActive}">${link.label}</a></li>`;
    })
    .join('');

  navContainer.innerHTML = `
    <nav class="cyber-navbar">
      <div class="nav-inner">
        <a href="/index.html" class="nav-brand">
          <div class="brand-icon-box">
            <span>G</span>
          </div>
          <div class="brand-text">
            <span class="brand-name">GETO <span class="brand-slash">//</span> SYSTEM</span>
            <span class="brand-sub">${CONFIG.system.version}</span>
          </div>
        </a>

        <ul class="nav-links">
          ${linksHtml}
        </ul>

        <div class="nav-meta">
          <div class="status-pill">
            <span class="status-dot"></span>
            <span>${CONFIG.system.statusText}</span>
          </div>
        </div>

        <button class="mobile-toggle" id="mobile-menu-btn" aria-label="Toggle navigation">
          <i class="fa-solid fa-bars"></i>
        </button>
      </div>

      <div class="mobile-drawer" id="mobile-drawer">
        ${linksHtml}
      </div>
    </nav>
  `;

  // Toggle mobile drawer
  const toggleBtn = document.getElementById('mobile-menu-btn');
  const drawer = document.getElementById('mobile-drawer');
  if (toggleBtn && drawer) {
    toggleBtn.addEventListener('click', () => {
      drawer.classList.toggle('open');
      const icon = toggleBtn.querySelector('i');
      if (icon) {
        if (drawer.classList.contains('open')) {
          icon.className = 'fa-solid fa-xmark';
        } else {
          icon.className = 'fa-solid fa-bars';
        }
      }
    });
  }
}

/* ==========================================================================
   3. SHARED FOOTER
   ========================================================================== */
function renderSharedFooter() {
  const footerContainer = document.getElementById('footer-container');
  if (!footerContainer) return;

  footerContainer.innerHTML = `
    <footer class="cyber-footer">
      <div class="footer-inner">
        <div class="footer-brand">
          <span>GETO</span> // TELEGRAM SYSTEM
          <div style="font-size: 0.72rem; color: var(--text-muted); margin-top: 0.35rem; font-family: var(--font-mono);">
            ${CONFIG.system.label} • ${CONFIG.system.code}
          </div>
        </div>

        <ul class="footer-nav">
          <li><a href="/index.html">HOME</a></li>
          <li><a href="/bots.html">BOTS</a></li>
          <li><a href="/communities.html">COMMUNITIES</a></li>
          <li><a href="/about.html">ABOUT</a></li>
          <li><a href="/contact.html">CONTACT</a></li>
        </ul>

        <div class="footer-socials">
          <a href="${CONFIG.social.telegram}" target="_blank" rel="noopener noreferrer" class="footer-social-icon" title="Telegram">
            <i class="fa-brands fa-telegram"></i>
          </a>
          <a href="${CONFIG.social.instagram}" target="_blank" rel="noopener noreferrer" class="footer-social-icon" title="Instagram">
            <i class="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>

      <div class="footer-bottom">
        <div>&copy; ${new Date().getFullYear()} GETO // TELEGRAM FLEET. ALL RIGHTS RESERVED.</div>
        <div style="color: var(--neon-cyan);">STATUS: ${CONFIG.system.statusText} // SECURE PROTOCOL</div>
      </div>
    </footer>
  `;
}

/* ==========================================================================
   4. THEME MUSIC COMPONENT (DISABLED BY DEFAULT)
   ========================================================================== */
function initThemeMusic() {
  // Always include audio element container
  let audioEl = document.getElementById('theme-audio');
  if (!audioEl) {
    audioEl = document.createElement('audio');
    audioEl.id = 'theme-audio';
    audioEl.loop = true;
    if (CONFIG.themeSong) {
      audioEl.src = CONFIG.themeSong;
    }
    document.body.appendChild(audioEl);
  }

  let musicBtn = document.getElementById('music-toggle-btn');
  if (!musicBtn) {
    musicBtn = document.createElement('button');
    musicBtn.id = 'music-toggle-btn';
    musicBtn.className = 'music-toggle-btn';
    musicBtn.innerHTML = `<i class="fa-solid fa-volume-xmark"></i> <span>AUDIO: OFF</span>`;
    document.body.appendChild(musicBtn);
  }

  // Show only if musicEnabled is true in CONFIG
  if (CONFIG.musicEnabled && CONFIG.themeSong) {
    musicBtn.style.display = 'flex';
  } else {
    musicBtn.style.display = 'none';
  }

  let isPlaying = false;
  musicBtn.addEventListener('click', () => {
    if (!isPlaying) {
      audioEl.play().then(() => {
        isPlaying = true;
        musicBtn.classList.add('playing');
        musicBtn.innerHTML = `<i class="fa-solid fa-volume-high"></i> <span>AUDIO: ON</span>`;
      }).catch(err => {
        console.warn("Audio playback prevented:", err);
      });
    } else {
      audioEl.pause();
      isPlaying = false;
      musicBtn.classList.remove('playing');
      musicBtn.innerHTML = `<i class="fa-solid fa-volume-xmark"></i> <span>AUDIO: OFF</span>`;
    }
  });
}

/* ==========================================================================
   5. REUSABLE AVATAR HELPER
   ========================================================================== */
function getAvatarHtml(size = 170) {
  if (CONFIG.profile.profileImage && CONFIG.profile.profileImage.trim() !== '') {
    return `
      <div class="avatar-wrapper" style="width: ${size}px; height: ${size}px;">
        <div class="avatar-frame">
          <img src="${CONFIG.profile.profileImage}" alt="${CONFIG.profile.name}" class="avatar-custom-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
          <div style="display:none; flex-direction:column; align-items:center;">
            <div class="avatar-text-neon">${CONFIG.profile.name}</div>
            <div class="avatar-subtitle">TELEGRAM FLEET</div>
          </div>
        </div>
      </div>
    `;
  }

  return `
    <div class="avatar-wrapper" style="width: ${size}px; height: ${size}px;">
      <div class="avatar-frame">
        <div class="avatar-text-neon">${CONFIG.profile.name}</div>
        <div class="avatar-subtitle">TELEGRAM FLEET</div>
      </div>
    </div>
  `;
}

/* ==========================================================================
   6. STATS DASHBOARD HELPER (Auto-computed from CONFIG)
   ========================================================================== */
function getStatsDashboardHtml() {
  const totalBots = CONFIG.bots.length;
  const activeBots = CONFIG.bots.filter(b => b.status.toLowerCase() === 'active').length;
  const deactiveBots = CONFIG.bots.filter(b => b.status.toLowerCase() === 'deactive').length;

  return `
    <div class="stats-bar">
      <div class="stat-card">
        <div class="stat-label">TOTAL BOTS <i class="fa-solid fa-robot" style="color: var(--neon-cyan);"></i></div>
        <div class="stat-val highlight-green">${totalBots}</div>
      </div>

      <div class="stat-card">
        <div class="stat-label">ACTIVE <i class="fa-solid fa-signal" style="color: var(--neon-green);"></i></div>
        <div class="stat-val highlight-green">${activeBots}</div>
      </div>

      <div class="stat-card">
        <div class="stat-label">DEACTIVATED <i class="fa-solid fa-power-off" style="color: var(--neon-pink);"></i></div>
        <div class="stat-val">${deactiveBots}</div>
      </div>

      <div class="stat-card">
        <div class="stat-label">SYSTEM <i class="fa-solid fa-microchip" style="color: var(--neon-purple);"></i></div>
        <div class="stat-val highlight-cyan" style="font-size: 1.35rem; padding-top: 0.25rem;">${CONFIG.system.code}</div>
      </div>

      <div class="stat-card">
        <div class="stat-label">STATUS <i class="fa-solid fa-satellite-dish" style="color: var(--neon-green);"></i></div>
        <div class="stat-val highlight-green" style="font-size: 1.35rem; padding-top: 0.25rem;">${CONFIG.system.statusText}</div>
      </div>
    </div>
  `;
}

/* ==========================================================================
   7. BOT CARD HELPER
   ========================================================================== */
function getBotCardHtml(bot) {
  const isActive = bot.status.toLowerCase() === 'active';
  const badgeClass = isActive ? 'badge-active' : 'badge-deactive';
  const statusLabel = isActive ? 'ACTIVE' : 'DEACTIVE';

  return `
    <a href="${bot.url}" target="_blank" rel="noopener noreferrer" class="bot-card" data-category="${bot.category}" data-status="${bot.status.toLowerCase()}">
      <div>
        <div class="bot-card-top">
          <div>
            <div class="bot-name">${bot.name}</div>
            <div class="bot-username">${bot.username}</div>
          </div>
          <span class="badge ${badgeClass}">
            <i class="fa-solid ${isActive ? 'fa-bolt' : 'fa-circle-pause'}"></i> ${statusLabel}
          </span>
        </div>

        <div class="bot-category">
          <i class="fa-solid fa-terminal" style="color: var(--neon-cyan);"></i> ${bot.category}
        </div>

        <p class="bot-desc">${bot.description}</p>
      </div>

      <div class="bot-card-footer">
        <span><i class="fa-brands fa-telegram"></i> TELEGRAM BOT</span>
        <span class="bot-action-cta">LAUNCH PROTOCOL &rarr;</span>
      </div>
    </a>
  `;
}

/* ==========================================================================
   8. COMMUNITY CARD HELPER
   ========================================================================== */
function getCommunityCardHtml(comm) {
  return `
    <a href="${comm.url}" target="_blank" rel="noopener noreferrer" class="comm-card">
      <div>
        <div class="comm-type-pill">// ${comm.type}</div>
        <h3 class="comm-name">${comm.name}</h3>
        <p class="comm-desc">${comm.description}</p>
      </div>

      <div class="comm-footer">
        <span><i class="fa-solid fa-users-viewfinder"></i> COMMUNITY SPACE</span>
        <span>JOIN CHAT &rarr;</span>
      </div>
    </a>
  `;
}

/* ==========================================================================
   PAGE: HOME (index.html)
   ========================================================================== */
function renderHomePage() {
  const container = document.getElementById('page-content');
  if (!container) return;

  const quickBots = CONFIG.bots.slice(0, 4);
  const quickBotsHtml = quickBots.map(getBotCardHtml).join('');
  const commsHtml = CONFIG.communities.map(getCommunityCardHtml).join('');

  container.innerHTML = `
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-corner-tag">GETO // OS ONLINE</div>

      ${getAvatarHtml(180)}

      <div class="hero-content">
        <div class="hero-meta-row">
          <span>// ${CONFIG.profile.role}</span>
          <span>•</span>
          <span style="color: var(--neon-green);">${CONFIG.system.statusText}</span>
        </div>

        <h1 class="hero-title">
          <span>${CONFIG.profile.name}</span>
          <span class="hero-username">${CONFIG.profile.username}</span>
        </h1>

        <div class="hero-bio">${CONFIG.profile.bio}</div>

        <div class="hero-actions">
          <a href="${CONFIG.social.telegram}" target="_blank" rel="noopener noreferrer" class="cyber-btn cyber-btn-tg">
            <i class="fa-brands fa-telegram"></i> TELEGRAM
          </a>
          <a href="${CONFIG.social.instagram}" target="_blank" rel="noopener noreferrer" class="cyber-btn cyber-btn-insta">
            <i class="fa-brands fa-instagram"></i> INSTAGRAM
          </a>
          <a href="/bots.html" class="cyber-btn cyber-btn-primary">
            <i class="fa-solid fa-network-wired"></i> VIEW BOTS MATRIX
          </a>
        </div>
      </div>
    </section>

    <!-- Auto-computed Stats Bar -->
    ${getStatsDashboardHtml()}

    <!-- Bots Quick Preview -->
    <section style="margin-top: 3.5rem;">
      <div class="section-header-row">
        <h2 class="section-title">FLEET QUICK MATRIX</h2>
        <a href="/bots.html" class="section-link">→ View All Bots (${CONFIG.bots.length})</a>
      </div>
      <div class="bots-grid">
        ${quickBotsHtml}
      </div>
    </section>

    <!-- Communities Quick Preview -->
    <section style="margin-top: 4rem;">
      <div class="section-header-row">
        <h2 class="section-title">COMMUNITY NEXUS</h2>
        <a href="/communities.html" class="section-link">→ All Communities (${CONFIG.communities.length})</a>
      </div>
      <div class="communities-grid">
        ${commsHtml}
      </div>
    </section>
  `;
}

/* ==========================================================================
   PAGE: BOTS (bots.html)
   ========================================================================== */
function renderBotsPage() {
  const container = document.getElementById('page-content');
  if (!container) return;

  const totalBots = CONFIG.bots.length;
  const activeBots = CONFIG.bots.filter(b => b.status.toLowerCase() === 'active').length;

  container.innerHTML = `
    <div style="margin-bottom: 2rem;">
      <div style="color: var(--neon-cyan); font-size: 0.8rem; letter-spacing: 0.15em; margin-bottom: 0.35rem;">
        // FULL FLEET REPERTORY [${totalBots} UNITS ONLINE: ${activeBots}]
      </div>
      <h1 style="font-family: var(--font-heading); font-size: 2.2rem; color: #fff; letter-spacing: 0.05em;">
        GETO BOTS MATRIX
      </h1>
      <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 0.4rem; max-width: 750px;">
        Complete listing of all operational bots under the GETO umbrella. Click any node card to launch the direct Telegram conversation protocol.
      </p>
    </div>

    <!-- Filter Bar -->
    <div class="filter-bar" id="bots-filter-bar">
      <button class="filter-btn active" data-filter="all">ALL (${totalBots})</button>
      <button class="filter-btn" data-filter="active">ACTIVE (${activeBots})</button>
      <button class="filter-btn" data-filter="deactive">DEACTIVE (${CONFIG.bots.length - activeBots})</button>
      <button class="filter-btn" data-filter="sudo">SUDO</button>
      <button class="filter-btn" data-filter="ai">AI</button>
      <button class="filter-btn" data-filter="utility">UTILITY</button>
      <button class="filter-btn" data-filter="group">GROUP</button>
      <button class="filter-btn" data-filter="font">FONT</button>
    </div>

    <!-- Bots Grid -->
    <div class="bots-grid" id="all-bots-grid">
      ${CONFIG.bots.map(getBotCardHtml).join('')}
    </div>
  `;

  // Filter interaction
  const filterButtons = document.querySelectorAll('.filter-btn');
  const botCards = document.querySelectorAll('#all-bots-grid .bot-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter.toLowerCase();

      botCards.forEach(card => {
        const category = (card.dataset.category || '').toLowerCase();
        const status = (card.dataset.status || '').toLowerCase();

        let visible = false;
        if (filter === 'all') {
          visible = true;
        } else if (filter === 'active' && status === 'active') {
          visible = true;
        } else if (filter === 'deactive' && status === 'deactive') {
          visible = true;
        } else if (filter === 'sudo' && category.includes('sudo')) {
          visible = true;
        } else if (filter === 'ai' && category.includes('ai')) {
          visible = true;
        } else if (filter === 'utility' && category.includes('utility')) {
          visible = true;
        } else if (filter === 'group' && category.includes('group')) {
          visible = true;
        } else if (filter === 'font' && category.includes('font')) {
          visible = true;
        }

        card.style.display = visible ? 'flex' : 'none';
      });
    });
  });
}

/* ==========================================================================
   PAGE: COMMUNITIES (communities.html)
   ========================================================================== */
function renderCommunitiesPage() {
  const container = document.getElementById('page-content');
  if (!container) return;

  container.innerHTML = `
    <div style="margin-bottom: 2.5rem;">
      <div style="color: var(--neon-pink); font-size: 0.8rem; letter-spacing: 0.15em; margin-bottom: 0.35rem;">
        // NETWORK NODES & SPACES [${CONFIG.communities.length} CHANNELS]
      </div>
      <h1 style="font-family: var(--font-heading); font-size: 2.2rem; color: #fff; letter-spacing: 0.05em;">
        ACTIVE COMMUNITIES
      </h1>
      <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 0.4rem; max-width: 750px;">
        Official community spaces, fighting groups, and utility hubs associated with the GETO Telegram ecosystem.
      </p>
    </div>

    <div class="communities-grid">
      ${CONFIG.communities.map(getCommunityCardHtml).join('')}
    </div>

    <!-- Quick Callout -->
    <div style="margin-top: 3.5rem; background: var(--bg-panel); border: 1px dashed var(--border-dim); padding: 1.5rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: gap: 1rem;">
      <div>
        <h4 style="font-family: var(--font-heading); color: var(--neon-green); font-size: 1.05rem;">DIRECT TELEGRAM ASSISTANCE</h4>
        <p style="color: var(--text-muted); font-size: 0.85rem; margin-top: 0.2rem;">Reach out directly to GETO via official username handle.</p>
      </div>
      <a href="${CONFIG.social.telegram}" target="_blank" rel="noopener noreferrer" class="cyber-btn cyber-btn-tg">
        <i class="fa-brands fa-telegram"></i> OPEN @ll_DARK_GETO_ll
      </a>
    </div>
  `;
}

/* ==========================================================================
   PAGE: ABOUT (about.html)
   ========================================================================== */
function renderAboutPage() {
  const container = document.getElementById('page-content');
  if (!container) return;

  container.innerHTML = `
    <div style="margin-bottom: 2rem;">
      <div style="color: var(--neon-cyan); font-size: 0.8rem; letter-spacing: 0.15em; margin-bottom: 0.35rem;">
        // ARCHITECT SPECIFICATION
      </div>
      <h1 style="font-family: var(--font-heading); font-size: 2.2rem; color: #fff; letter-spacing: 0.05em;">
        ABOUT GETO
      </h1>
    </div>

    <div class="about-container">
      <div class="about-sidebar">
        ${getAvatarHtml(180)}

        <h2 style="font-family: var(--font-heading); font-size: 1.6rem; color: #fff; margin-top: 1.25rem;">
          ${CONFIG.profile.name}
        </h2>
        <div style="color: var(--neon-pink); font-size: 0.9rem; font-family: var(--font-mono); margin-top: 0.2rem;">
          ${CONFIG.profile.username}
        </div>
        <div style="color: var(--neon-green); font-size: 0.75rem; letter-spacing: 0.15em; margin-top: 0.4rem; font-weight: 700;">
          ${CONFIG.profile.role}
        </div>

        <div style="display: flex; gap: 0.75rem; margin-top: 1.5rem;">
          <a href="${CONFIG.social.telegram}" target="_blank" rel="noopener noreferrer" class="footer-social-icon" title="Telegram">
            <i class="fa-brands fa-telegram"></i>
          </a>
          <a href="${CONFIG.social.instagram}" target="_blank" rel="noopener noreferrer" class="footer-social-icon" title="Instagram">
            <i class="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>

      <div class="about-details">
        <div>
          <div style="color: var(--neon-purple); font-size: 0.75rem; letter-spacing: 0.12em; text-transform: uppercase; font-weight: 700; margin-bottom: 0.4rem;">
            // SYSTEM BIOGRAPHY
          </div>
          <div class="about-quote">
            "${CONFIG.about.description}"
          </div>
        </div>

        <div>
          <div style="color: var(--neon-purple); font-size: 0.75rem; letter-spacing: 0.12em; text-transform: uppercase; font-weight: 700; margin-bottom: 0.6rem;">
            // SIGNATURE MOTTO
          </div>
          <div style="background: rgba(0, 0, 0, 0.45); border-left: 3px solid var(--neon-pink); padding: 0.75rem 1rem; font-size: 0.95rem; white-space: pre-line; line-height: 1.6;">
            ${CONFIG.profile.bio}
          </div>
        </div>

        <div class="about-meta-grid">
          <div class="about-meta-item">
            <div class="about-meta-label">TELEGRAM FLEET</div>
            <div class="about-meta-val">${CONFIG.bots.length} Active Nodes</div>
          </div>
          <div class="about-meta-item">
            <div class="about-meta-label">COMMUNITIES</div>
            <div class="about-meta-val">${CONFIG.communities.length} Active Spaces</div>
          </div>
          <div class="about-meta-item">
            <div class="about-meta-label">CORE SYSTEM</div>
            <div class="about-meta-val" style="color: var(--neon-cyan);">${CONFIG.system.code}</div>
          </div>
          <div class="about-meta-item">
            <div class="about-meta-label">SECURITY PROTOCOL</div>
            <div class="about-meta-val" style="color: var(--neon-green);">${CONFIG.system.statusText}</div>
          </div>
        </div>

        <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 0.5rem;">
          <a href="${CONFIG.social.telegram}" target="_blank" rel="noopener noreferrer" class="cyber-btn cyber-btn-tg">
            <i class="fa-brands fa-telegram"></i> CONNECT ON TELEGRAM
          </a>
          <a href="${CONFIG.communities[0].url}" target="_blank" rel="noopener noreferrer" class="cyber-btn cyber-btn-primary">
            <i class="fa-solid fa-users"></i> JOIN SUDO COMMUNITY
          </a>
        </div>
      </div>
    </div>
  `;
}

/* ==========================================================================
   PAGE: CONTACT & INTERACTIVE TERMINAL (contact.html)
   ========================================================================== */
function renderContactPage() {
  const container = document.getElementById('page-content');
  if (!container) return;

  container.innerHTML = `
    <div style="margin-bottom: 2rem;">
      <div style="color: var(--neon-green); font-size: 0.8rem; letter-spacing: 0.15em; margin-bottom: 0.35rem;">
        // PROTOCOL ACCESS & DIRECT DISPATCH
      </div>
      <h1 style="font-family: var(--font-heading); font-size: 2.2rem; color: #fff; letter-spacing: 0.05em;">
        CONTACT CHANNELS
      </h1>
      <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 0.4rem;">
        Connect directly through verified Telegram handles or execute terminal instructions below.
      </p>
    </div>

    <div class="contact-grid">
      <!-- Contact Cards -->
      <div class="contact-channels">
        <a href="${CONFIG.social.telegram}" target="_blank" rel="noopener noreferrer" class="channel-card">
          <div class="channel-icon" style="color: var(--neon-cyan); border-color: var(--neon-cyan); background: rgba(0, 229, 255, 0.08);">
            <i class="fa-brands fa-telegram"></i>
          </div>
          <div class="channel-info">
            <h4>OFFICIAL TELEGRAM</h4>
            <p>${CONFIG.profile.username}</p>
          </div>
        </a>

        <a href="${CONFIG.social.instagram}" target="_blank" rel="noopener noreferrer" class="channel-card">
          <div class="channel-icon" style="color: var(--neon-pink); border-color: var(--neon-pink); background: rgba(255, 0, 110, 0.08);">
            <i class="fa-brands fa-instagram"></i>
          </div>
          <div class="channel-info">
            <h4>INSTAGRAM ACCOUNT</h4>
            <p>@miyamura_kun07</p>
          </div>
        </a>

        <a href="${CONFIG.communities[0].url}" target="_blank" rel="noopener noreferrer" class="channel-card">
          <div class="channel-icon" style="color: var(--neon-green); border-color: var(--neon-green); background: rgba(0, 255, 157, 0.08);">
            <i class="fa-solid fa-users"></i>
          </div>
          <div class="channel-info">
            <h4>SUDO COMMUNITY SPACE</h4>
            <p>Official SUDO User Community</p>
          </div>
        </a>

        <a href="${CONFIG.communities[2].url}" target="_blank" rel="noopener noreferrer" class="channel-card">
          <div class="channel-icon" style="color: var(--neon-purple); border-color: var(--neon-purple); background: rgba(160, 0, 255, 0.08);">
            <i class="fa-solid fa-shield-halved"></i>
          </div>
          <div class="channel-info">
            <h4>DEFAULTER COMMUNITY</h4>
            <p>Fighting Group & Community Space</p>
          </div>
        </a>
      </div>

      <!-- Interactive Cyber Terminal -->
      <div class="terminal-window">
        <div class="terminal-header">
          <div class="terminal-dots">
            <span class="t-dot red"></span>
            <span class="t-dot yellow"></span>
            <span class="t-dot green"></span>
          </div>
          <div class="terminal-title">${CONFIG.system.terminal}</div>
          <div style="font-size: 0.65rem; color: var(--text-dim);">${CONFIG.system.code}</div>
        </div>

        <div class="terminal-body" id="terminal-output">
          <div class="terminal-line" style="color: var(--neon-cyan);">
            GETO CYBER TERMINAL INTERFACE [${CONFIG.system.version}]
          </div>
          <div class="terminal-line" style="color: var(--text-muted);">
            Type <span style="color: var(--neon-green); font-weight: bold;">help</span> to inspect available subsystem instructions.
          </div>
          <div class="terminal-line" style="margin-bottom: 0.5rem; color: var(--text-dim);">
            --------------------------------------------------------
          </div>
        </div>

        <div style="padding: 0.75rem 1rem; border-top: 1px solid rgba(0, 255, 157, 0.2); background: rgba(5, 0, 10, 0.9);">
          <div class="terminal-input-row">
            <span class="terminal-prompt-color">${CONFIG.system.terminal}</span>
            <input type="text" id="terminal-input" class="terminal-input" placeholder="type command (help, bots, tg, stats...)" autocomplete="off" spellcheck="false" autofocus>
          </div>
        </div>
      </div>
    </div>
  `;

  initInteractiveTerminal();
}

/* ==========================================================================
   INTERACTIVE TERMINAL ENGINE
   ========================================================================== */
function initInteractiveTerminal() {
  const input = document.getElementById('terminal-input');
  const output = document.getElementById('terminal-output');
  if (!input || !output) return;

  function appendLine(html, color) {
    const line = document.createElement('div');
    line.className = 'terminal-line';
    if (color) line.style.color = color;
    line.innerHTML = html;
    output.appendChild(line);
    output.scrollTop = output.scrollHeight;
  }

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const rawCmd = input.value.trim();
      input.value = '';

      if (!rawCmd) return;

      appendLine(`<span class="terminal-prompt-color">${CONFIG.system.terminal}</span> <span style="color: #fff;">${escapeHtml(rawCmd)}</span>`);

      const cmd = rawCmd.toLowerCase();

      switch (cmd) {
        case 'help':
          appendLine(`Available System Commands:
  • <span style="color:var(--neon-green)">help</span>        - Display command manifest
  • <span style="color:var(--neon-green)">whoami</span>      - Display current identity and role
  • <span style="color:var(--neon-green)">bots</span>        - Print all 14 bots in the fleet
  • <span style="color:var(--neon-green)">communities</span> - Print registered community nodes
  • <span style="color:var(--neon-green)">stats</span>       - Echo system counters & fleet status
  • <span style="color:var(--neon-green)">tg</span>          - Open official Telegram in new tab
  • <span style="color:var(--neon-green)">insta</span>       - Open official Instagram in new tab
  • <span style="color:var(--neon-green)">sudo</span>        - Print SUDO network spaces
  • <span style="color:var(--neon-green)">clear</span>       - Reset terminal buffer`);
          break;

        case 'whoami':
          appendLine(`NAME: ${CONFIG.profile.name}
HANDLE: ${CONFIG.profile.username}
ROLE: ${CONFIG.profile.role}
SYSTEM: ${CONFIG.system.code} [${CONFIG.system.statusText}]
BIO:
${CONFIG.profile.bio}`);
          break;

        case 'bots':
          appendLine(`REGISTERED FLEET BOTS (${CONFIG.bots.length} total):`);
          CONFIG.bots.forEach((bot, idx) => {
            const num = (idx + 1).toString().padStart(2, '0');
            appendLine(`[${num}] <span style="color:var(--neon-cyan)">${bot.name}</span> | ${bot.username} | <span style="color:var(--neon-green)">${bot.status.toUpperCase()}</span> (${bot.category})`);
          });
          break;

        case 'communities':
          appendLine(`GETO ACTIVE COMMUNITIES:`);
          CONFIG.communities.forEach((comm, idx) => {
            appendLine(`[0${idx + 1}] <span style="color:var(--neon-pink)">${comm.name}</span> - ${comm.type}
     URL: <a href="${comm.url}" target="_blank" rel="noopener noreferrer" style="color:var(--neon-green)">${comm.url}</a>`);
          });
          break;

        case 'stats':
          const activeCount = CONFIG.bots.filter(b => b.status.toLowerCase() === 'active').length;
          const deactiveCount = CONFIG.bots.filter(b => b.status.toLowerCase() === 'deactive').length;
          appendLine(`TELEGRAM FLEET METRICS:
  TOTAL BOTS:   ${CONFIG.bots.length}
  ACTIVE:       ${activeCount}
  DEACTIVATED:  ${deactiveCount}
  SYSTEM:       ${CONFIG.system.code}
  STATUS:       ${CONFIG.system.statusText}`);
          break;

        case 'tg':
          appendLine(`Dispatching connection to Telegram: <a href="${CONFIG.social.telegram}" target="_blank" rel="noopener noreferrer" style="color:var(--neon-green)">${CONFIG.social.telegram}</a>`);
          window.open(CONFIG.social.telegram, '_blank', 'noopener,noreferrer');
          break;

        case 'insta':
          appendLine(`Opening Instagram profile: <a href="${CONFIG.social.instagram}" target="_blank" rel="noopener noreferrer" style="color:var(--neon-green)">${CONFIG.social.instagram}</a>`);
          window.open(CONFIG.social.instagram, '_blank', 'noopener,noreferrer');
          break;

        case 'sudo':
          appendLine(`SUDO FLEET OVERVIEW:
  10 Dedicated SUDO bots (@ll_SUPRRME_XD_1_ll_BOT ... 10)
  1 Core SUDO Utility (@ll_SUPRRME_XD_ll_BOT)
  Official Community: <a href="${CONFIG.communities[0].url}" target="_blank" rel="noopener noreferrer" style="color:var(--neon-green)">${CONFIG.communities[0].url}</a>`);
          break;

        case 'clear':
          output.innerHTML = '';
          break;

        default:
          appendLine(`bash: command not found: ${escapeHtml(rawCmd)}. Type <span style="color:var(--neon-green)">help</span> for available commands.`, '#ff006e');
          break;
      }
    }
  });

  function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
}
