/* ============================================================
   GETO // TELEGRAM SYSTEM — RENDER SCRIPT
   ============================================================ */

const page = document.body.dataset.page || 'home';

/* ---------- NAVBAR ---------- */
document.getElementById('navbar-container').innerHTML = `
<header class="topbar">
    <div class="logo">
        <span class="glitch">G</span>
        <span class="brand">${CONFIG.system.label}</span>
    </div>
    <nav class="nav-links">
        <a href="index.html" class="${page === 'home' ? 'active' : ''}">HOME</a>
        <a href="bots.html" class="${page === 'bots' ? 'active' : ''}">BOTS</a>
        <a href="communities.html" class="${page === 'communities' ? 'active' : ''}">COMMUNITIES</a>
        <a href="about.html" class="${page === 'about' ? 'active' : ''}">ABOUT</a>
        <a href="contact.html" class="${page === 'contact' ? 'active' : ''}">CONTACT</a>
    </nav>
    <div class="status-pill">
        <span class="dot"></span> <span>${CONFIG.profile.status}</span>
    </div>
</header>`;

/* ---------- FOOTER ---------- */
document.getElementById('footer-container').innerHTML = `
<footer class="footer">
    <p>© ${new Date().getFullYear()} ${CONFIG.system.title} • ALL RIGHTS RESERVED</p>
</footer>`;

/* ---------- HELPERS ---------- */
const uniqueBots = (() => {
    const seen = new Set();
    return CONFIG.bots.filter(b => {
        if (seen.has(b.username)) return false;
        seen.add(b.username);
        return true;
    });
})();

const activeBots = uniqueBots.filter(b => b.status === 'active').length;
const deactiveBots = uniqueBots.filter(b => b.status === 'deactive').length;

function botCard(bot) {
    return `<a href="${bot.url}" target="_blank" rel="noopener" class="bot-item ${bot.status}">
        <div class="bot-info">
            <span class="bot-name">${bot.name}</span>
            <span class="bot-user">${bot.username}</span>
            <span class="bot-cat">${bot.category}</span>
            <span class="bot-desc">${bot.description}</span>
        </div>
        <span class="bot-status ${bot.status}">${bot.status.toUpperCase()}</span>
    </a>`;
}

function communityCard(c) {
    return `<a href="${c.url}" target="_blank" rel="noopener" class="community-card">
        <span class="community-type">${c.type}</span>
        <h3 class="community-name">${c.name}</h3>
        <p class="community-desc">${c.description}</p>
        <p class="community-cta">→ Open in Telegram</p>
    </a>`;
}

/* ---------- RENDER PAGES ---------- */
const content = document.getElementById('page-content');

if (page === 'home') {
    content.innerHTML = `
    <section class="hero">
        <div class="hero-left">
            <p class="pre-title">// TELEGRAM ECOSYSTEM • SUDO NETWORK</p>
            <p class="greet">Hey there, I am</p>
            <h1 class="main-name">${CONFIG.profile.name}</h1>
            <p class="subtitle">> Telegram Bot Fleet Operator</p>
            <p class="desc">${CONFIG.profile.bio.replace(/\n/g, '<br>')}</p>
            <div class="hero-handles">
                <a href="${CONFIG.social.telegram.url}" target="_blank"><i class="fab fa-telegram"></i> ${CONFIG.social.telegram.username}</a>
                <a href="${CONFIG.social.instagram.url}" target="_blank"><i class="fab fa-instagram"></i> ${CONFIG.social.instagram.username}</a>
            </div>
        </div>
        <div class="hero-right">
            <div class="avatar-frame">
                <div class="corner tl"></div><div class="corner tr"></div>
                <div class="corner bl"></div><div class="corner br"></div>
                <div class="text-avatar">${CONFIG.profile.name}</div>
            </div>
        </div>
    </section>
    <section class="stats-bar">
        <div class="stat"><p class="stat-label">TOTAL BOTS</p><h3 class="stat-val">${uniqueBots.length}</h3></div>
        <div class="stat"><p class="stat-label">ACTIVE</p><h3 class="stat-val">${activeBots}</h3></div>
        <div class="stat"><p class="stat-label">DEACTIVATED</p><h3 class="stat-val">${deactiveBots}</h3></div>
        <div class="stat"><p class="stat-label">SYSTEM</p><h3 class="stat-val">GETO OS</h3></div>
        <div class="stat"><p class="stat-label">STATUS</p><h3 class="stat-val" style="color:#00ff9d">ONLINE</h3></div>
    </section>
    <section class="section">
        <p class="sec-tag">// BOT NETWORK CLUSTER</p>
        <h2 class="sec-title">GETO BOTS MATRIX</h2>
        <p class="sec-sub">Preview. <a href="bots.html" style="color:#00e5ff;">→ View All Bots</a></p>
        <div class="bots-list">${uniqueBots.slice(0, 4).map(botCard).join('')}</div>
    </section>
    <section class="section">
        <p class="sec-tag">// COMMUNITY NETWORK</p>
        <h2 class="sec-title">ACTIVE COMMUNITIES</h2>
        <p class="sec-sub">Official Telegram communities. <a href="communities.html" style="color:#00e5ff;">→ All Communities</a></p>
        <div class="communities-list">${CONFIG.communities.map(communityCard).join('')}</div>
    </section>`;
}
else if (page === 'bots') {
    content.innerHTML = `
    <section class="section">
        <p class="sec-tag">// BOT NETWORK CLUSTER</p>
        <h2 class="sec-title">GETO BOTS MATRIX</h2>
        <p class="sec-sub">Total: ${uniqueBots.length} | Active: ${activeBots} | Deactive: ${deactiveBots}</p>
        <div class="bots-list">${uniqueBots.map(botCard).join('')}</div>
    </section>`;
}
else if (page === 'communities') {
    content.innerHTML = `
    <section class="section">
        <p class="sec-tag">// COMMUNITY NETWORK</p>
        <h2 class="sec-title">ACTIVE COMMUNITIES</h2>
        <p class="sec-sub">Official Telegram communities connected to the GETO network.</p>
        <div class="communities-list">${CONFIG.communities.map(communityCard).join('')}</div>
    </section>`;
}
else if (page === 'about') {
    content.innerHTML = `
    <section class="section">
        <p class="sec-tag">// ROOT OPERATOR</p>
        <h2 class="sec-title">ABOUT ${CONFIG.profile.name}</h2>
        <div class="about-card">
            <div class="about-avatar">${CONFIG.profile.name}</div>
            <h3 class="about-name">${CONFIG.profile.name}</h3>
            <p class="about-role">TELEGRAM BOT FLEET OPERATOR</p>
            <p class="about-desc">${CONFIG.about.description}</p>
            <div class="about-links">
                <div class="about-line"><span>TELEGRAM:</span><a href="${CONFIG.social.telegram.url}" target="_blank">${CONFIG.social.telegram.username}</a></div>
                <div class="about-line"><span>INSTAGRAM:</span><a href="${CONFIG.social.instagram.url}" target="_blank">${CONFIG.social.instagram.username}</a></div>
                <div class="about-line"><span>SUDO HUB:</span><a href="${CONFIG.communities[0].url}" target="_blank">${CONFIG.communities[0].name}</a></div>
            </div>
        </div>
    </section>`;
}
else if (page === 'contact') {
    content.innerHTML = `
    <section class="section">
        <p class="sec-tag">// DIRECT COMMS</p>
        <h2 class="sec-title">CONTACT CHANNELS</h2>
        <div class="contact-grid">
            <a href="${CONFIG.social.telegram.url}" target="_blank" class="contact-card"><p class="c-label">TELEGRAM</p><p class="c-val">${CONFIG.social.telegram.username}</p></a>
            <a href="${CONFIG.social.instagram.url}" target="_blank" class="contact-card"><p class="c-label">INSTAGRAM</p><p class="c-val">${CONFIG.social.instagram.username}</p></a>
            <a href="${CONFIG.communities[0].url}" target="_blank" class="contact-card"><p class="c-label">SUDO COMMUNITY</p><p class="c-val">${CONFIG.communities[0].name}</p></a>
            <a href="${CONFIG.communities[2].url}" target="_blank" class="contact-card"><p class="c-label">FIGHTING GROUP</p><p class="c-val">${CONFIG.communities[2].name}</p></a>
        </div>
    </section>
    <section class="section">
        <p class="sec-tag">// INTERACTIVE SHELL</p>
        <h2 class="sec-title">GETO BASH CLI</h2>
        <p class="sec-sub">Try: help, bots, communities, sudo, insta, tg, stats, whoami, clear</p>
        <div class="terminal">
            <div class="term-header">
                <span class="dot r"></span><span class="dot y"></span><span class="dot g"></span>
                <span class="term-title">${CONFIG.system.terminal}</span>
            </div>
            <div class="term-body" id="termBody">
                <p class="term-out">${CONFIG.system.label} CORE [${CONFIG.profile.status}]</p>
                <p class="term-out">Type <span class="cyan">help</span> or <span class="cyan">bots</span> to begin.</p>
            </div>
            <div class="term-input-line">
                <span class="prompt">${CONFIG.system.terminal}</span>
                <input type="text" id="termInput" autocomplete="off" spellcheck="false" placeholder="type command...">
            </div>
        </div>
    </section>`;

    // Terminal logic
    const termInput = document.getElementById('termInput');
    const termBody = document.getElementById('termBody');
    termInput.addEventListener('keydown', (e) => {
        if (e.key !== 'Enter') return;
        const cmd = termInput.value.trim().toLowerCase();
        if (!cmd) return;

        const addLine = (text, cls = 'term-out') => {
            const p = document.createElement('p');
            p.className = cls;
            p.innerHTML = text;
            termBody.appendChild(p);
            termBody.scrollTop = termBody.scrollHeight;
        };

        addLine(`<span style="color:#00ff9d">${CONFIG.system.terminal}</span> ${cmd}`, 'term-info');
        termInput.value = '';

        if (cmd === 'help') addLine('Commands: bots, communities, sudo, insta, tg, stats, whoami, clear');
        else if (cmd === 'bots') {
            addLine(`Total: ${uniqueBots.length} | Active: ${activeBots} | Deactive: ${deactiveBots}`);
            uniqueBots.forEach((b, i) => addLine(`&nbsp;&nbsp;[${i+1}] <span class="cyan">${b.username}</span> — ${b.status.toUpperCase()}`));
        }
        else if (cmd === 'communities') CONFIG.communities.forEach((c, i) => addLine(`&nbsp;&nbsp;[${i+1}] <span class="cyan">${c.name}</span> — ${c.type}`));
        else if (cmd === 'sudo') addLine(`SUDO → <a href="${CONFIG.communities[0].url}" target="_blank" class="term-link">${CONFIG.communities[0].url}</a>`);
        else if (cmd === 'insta') addLine(`Instagram → <a href="${CONFIG.social.instagram.url}" target="_blank" class="term-link">${CONFIG.social.instagram.url}</a>`);
        else if (cmd === 'tg') addLine(`Telegram → <a href="${CONFIG.social.telegram.url}" target="_blank" class="term-link">${CONFIG.social.telegram.url}</a>`);
        else if (cmd === 'stats') addLine(`Total: ${uniqueBots.length} | Active: ${activeBots} | Deactive: ${deactiveBots}`);
        else if (cmd === 'whoami') addLine(`You are talking to ${CONFIG.profile.name} — ${CONFIG.profile.username}`);
        else if (cmd === 'clear') termBody.innerHTML = '';
        else addLine(`Command not found: ${cmd}. Type <span class="cyan">help</span>.`, 'term-err');
    });
}

/* ---------- MATRIX RAIN ---------- */
const canvas = document.getElementById('matrix-canvas');
if (canvas) {
    const ctx = canvas.getContext('2d');
    function resize() { canvas.width = innerWidth; canvas.height = innerHeight; }
    resize();
    addEventListener('resize', resize);

    const chars = 'ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎ0123456789ABCDEF';
    const fontSize = 14;
    let columns = Math.floor(canvas.width / fontSize);
    let drops = Array(columns).fill(1);
    addEventListener('resize', () => {
        columns = Math.floor(canvas.width / fontSize);
        drops = Array(columns).fill(1);
    });

    setInterval(() => {
        ctx.fillStyle = 'rgba(5, 0, 10, 0.08)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#00ff9d';
        ctx.font = fontSize + 'px monospace';
        for (let i = 0; i < drops.length; i++) {
            const t = chars.charAt(Math.floor(Math.random() * chars.length));
            ctx.fillText(t, i * fontSize, drops[i] * fontSize);
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
            drops[i]++;
        }
    }, 50);
}
