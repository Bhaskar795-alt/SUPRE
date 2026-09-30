# GETO // TELEGRAM SYSTEM

A sovereign, dark cyber / terminal-themed multi-page personal website and bot fleet matrix for the **GETO** Telegram ecosystem.

---

## 🚀 Quick Editing Guide (`src/config.js`)

All website data, counters, bots, and communities are controlled from **a single file**:  
`src/config.js`. You never need to touch HTML or CSS to make updates.

---

### 1. Change Bot Status (ACTIVE / DEACTIVE)
In `src/config.js`, locate the bot inside the `bots` array and modify the `status` property:

```javascript
{
  id: "sudo-1",
  name: "SUDO BOT 1",
  username: "@ll_SUPRRME_XD_1_ll_BOT",
  url: "https://t.me/ll_SUPRRME_XD_1_ll_BOT",
  category: "SUDO",
  description: "SUDO ecosystem bot under the GETO fleet.",
  status: "deactive" // Change to "active" or "deactive"
}
```
*Note: Dashboard counters for `TOTAL BOTS`, `ACTIVE`, and `DEACTIVATED` update automatically.*

---

### 2. Add New Bots
Add a new object to the `bots` array in `src/config.js`:

```javascript
{
  id: "sudo-11",
  name: "SUDO BOT 11",
  username: "@ll_SUPRRME_XD_11_ll_BOT",
  url: "https://t.me/ll_SUPRRME_XD_11_ll_BOT",
  category: "SUDO",
  description: "SUDO ecosystem bot under the GETO fleet.",
  status: "active"
}
```

---

### 3. Add or Modify Communities
Add a new object to the `communities` array in `src/config.js`:

```javascript
{
  id: "comm-4",
  name: "NEW DEFENSE MATRIX",
  type: "SECURITY GROUP",
  url: "https://t.me/+YourTelegramInviteLink",
  description: "Community hub for operations and updates."
}
```

---

### 4. Change Social Links
Update the `social` block in `src/config.js`:

```javascript
social: {
  telegram: "https://t.me/ll_DARK_GETO_ll",
  instagram: "https://www.instagram.com/your_new_handle"
}
```

---

### 5. Enable Theme Music
Set `musicEnabled: true` and specify a direct URL to an audio file (`.mp3`, `.ogg`, or streaming link):

```javascript
musicEnabled: true,
themeSong: "https://your-audio-host.com/cyber-theme.mp3"
```
*When enabled, a floating audio toggle button appears in the top-right corner (`AUDIO: ON / OFF`).*

---

### 6. Add Custom Profile Photo
By default, `profileImage: ""` displays the neon cyberpunk CSS text-avatar with **"GETO"**.  
To switch to a picture, supply the image URL:

```javascript
profile: {
  name: "GETO",
  username: "@ll_DARK_GETO_ll",
  bio: "#𝐃ᴏɴᴛ_𝐖ᴏʀʀʏ_𝐖ᴇ_𝐀ʀᴇ_𝐓ʜᴇ_𝐒𝐭𝐫ᴏɴɢᴇ𝐬𝐭_\n#𝐃𝛆𝖋𝛂υℓ𝛕𝛆ɤ𝛅_𝛅𝛂ɤ𝛋𝛂ɤ",
  profileImage: "https://your-image-url.com/avatar.jpg", // Leave "" for neon text avatar
  status: "ONLINE",
  role: "TELEGRAM BOT FLEET OPERATOR"
}
```

---

## 🖥️ File Architecture

```
/
├── index.html        → Home (hero, counters, previews, quick links)
├── bots.html         → All Bots Matrix (filter bar, 14 bot cards)
├── communities.html  → Communities Nexus (3 communities)
├── about.html        → Operator Dossier (text-avatar, bio, stats)
├── contact.html      → Contact Channels & Interactive Terminal
├── style.css         → Cyberpunk theme, animations & responsiveness
├── README.md         → Configuration manual
└── src/
    ├── config.js     → Central data store
    └── script.js     → Multi-page dynamic rendering engine & Matrix canvas
```
