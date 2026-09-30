/**
 * GETO // TELEGRAM SYSTEM
 * Global Central Configuration File
 * 
 * All website data is managed in this file.
 * Any future edits (bots, communities, status, social links, theme song, etc.)
 * should ONLY be made here.
 */

export const CONFIG = {
  profile: {
    name: "GETO",
    username: "@ll_DARK_GETO_ll",
    bio: "#𝐃ᴏɴᴛ_𝐖ᴏʀʀʏ_𝐖ᴇ_𝐀ʀᴇ_𝐓ʜᴇ_𝐒𝐭𝐫ᴏɴɢᴇ𝐬𝐭_\n#𝐃𝛆𝖋𝛂υℓ𝛕𝛆ɤ𝛅_𝛅𝛂ɤ𝛋𝛂ɤ",
    // Leave profileImage empty ("") to show the neon CSS text-avatar.
    // To use a custom image later, provide a direct URL here: e.g. "https://..."
    profileImage: "",
    status: "ONLINE",
    role: "TELEGRAM BOT FLEET OPERATOR"
  },

  system: {
    title: "GETO // TELEGRAM SYSTEM",
    shortTitle: "GETO SYSTEM",
    code: "GETO OS",
    label: "TELEGRAM BOT FLEET OPERATOR",
    terminal: "GETO@TELEGRAM:~$",
    version: "v4.0.9-CYBER",
    statusText: "ONLINE"
  },

  about: {
    description: "Architect of the sovereign GETO Telegram ecosystem. Operating a high-performance cyber fleet of automated SUDO bots, moderation relays, utility engines, and underground communities. Built under a strict dark cyber aesthetic for resilient command, multi-group defense, and seamless bot operations across the network."
  },

  social: {
    telegram: "https://t.me/ll_DARK_GETO_ll",
    instagram: "https://www.instagram.com/miyamura_kun07?stkn=azUxZWR1bHlqd3J5"
  },

  // 14 Total Bots (10 SUDO + 4 Special)
  bots: [
    {
      id: "sudo-1",
      name: "SUDO BOT 1",
      username: "@ll_SUPRRME_XD_1_ll_BOT",
      url: "https://t.me/ll_SUPRRME_XD_1_ll_BOT",
      category: "SUDO",
      description: "SUDO ecosystem bot under the GETO fleet.",
      status: "active"
    },
    {
      id: "sudo-2",
      name: "SUDO BOT 2",
      username: "@ll_SUPRRME_XD_2_ll_BOT",
      url: "https://t.me/ll_SUPRRME_XD_2_ll_BOT",
      category: "SUDO",
      description: "SUDO ecosystem bot under the GETO fleet.",
      status: "active"
    },
    {
      id: "sudo-3",
      name: "SUDO BOT 3",
      username: "@ll_SUPRRME_XD_3_ll_BOT",
      url: "https://t.me/ll_SUPRRME_XD_3_ll_BOT",
      category: "SUDO",
      description: "SUDO ecosystem bot under the GETO fleet.",
      status: "active"
    },
    {
      id: "sudo-4",
      name: "SUDO BOT 4",
      username: "@ll_SUPRRME_XD_4_ll_BOT",
      url: "https://t.me/ll_SUPRRME_XD_4_ll_BOT",
      category: "SUDO",
      description: "SUDO ecosystem bot under the GETO fleet.",
      status: "active"
    },
    {
      id: "sudo-5",
      name: "SUDO BOT 5",
      username: "@ll_SUPRRME_XD_5_ll_BOT",
      url: "https://t.me/ll_SUPRRME_XD_5_ll_BOT",
      category: "SUDO",
      description: "SUDO ecosystem bot under the GETO fleet.",
      status: "active"
    },
    {
      id: "sudo-6",
      name: "SUDO BOT 6",
      username: "@ll_SUPRRME_XD_6_ll_BOT",
      url: "https://t.me/ll_SUPRRME_XD_6_ll_BOT",
      category: "SUDO",
      description: "SUDO ecosystem bot under the GETO fleet.",
      status: "active"
    },
    {
      id: "sudo-7",
      name: "SUDO BOT 7",
      username: "@ll_SUPRRME_XD_7_ll_BOT",
      url: "https://t.me/ll_SUPRRME_XD_7_ll_BOT",
      category: "SUDO",
      description: "SUDO ecosystem bot under the GETO fleet.",
      status: "active"
    },
    {
      id: "sudo-8",
      name: "SUDO BOT 8",
      username: "@ll_SUPRRME_XD_8_l_l_BOT",
      url: "https://t.me/ll_SUPRRME_XD_8_l_l_BOT",
      category: "SUDO",
      description: "SUDO ecosystem bot under the GETO fleet.",
      status: "active"
    },
    {
      id: "sudo-9",
      name: "SUDO BOT 9",
      username: "@ll_SUPRRME_XD_9_ll_BOT",
      url: "https://t.me/ll_SUPRRME_XD_9_ll_BOT",
      category: "SUDO",
      description: "SUDO ecosystem bot under the GETO fleet.",
      status: "active"
    },
    {
      id: "sudo-10",
      name: "SUDO BOT 10",
      username: "@ll_SUPRRME_XD_10_ll_BOT",
      url: "https://t.me/ll_SUPRRME_XD_10_ll_BOT",
      category: "SUDO",
      description: "SUDO ecosystem bot under the GETO fleet.",
      status: "active"
    },
    {
      id: "special-sudo",
      name: "SUDO",
      username: "@ll_SUPRRME_XD_ll_BOT",
      url: "https://t.me/ll_SUPRRME_XD_ll_BOT",
      category: "SUDO / UTILITY",
      description: "Core SUDO utility & command protocol bot for the GETO fleet.",
      status: "active"
    },
    {
      id: "special-aiko",
      name: "Aiko",
      username: "@Aiko07_bot",
      url: "https://t.me/Aiko07_bot",
      category: "AI BOT",
      description: "A friendly AI-powered Telegram assistant designed to interact with users and provide useful conversational assistance.",
      status: "active"
    },
    {
      id: "special-group",
      name: "Group Bot",
      username: "@Groupmodertion_bot",
      url: "https://t.me/Groupmodertion_bot",
      category: "GROUP HELP BOT",
      description: "A Telegram group assistance bot designed to help communities with moderation and group-management tasks.",
      status: "active"
    },
    {
      id: "special-font",
      name: "Font Bot",
      username: "@CHANGE_THE_FONT_BOT",
      url: "https://t.me/CHANGE_THE_FONT_BOT",
      category: "FONT CHANGING BOT",
      description: "A Telegram utility bot for transforming normal text into different stylish and decorative font formats.",
      status: "active"
    }
  ],

  // Communities (3 total - no invented member counts)
  communities: [
    {
      id: "comm-1",
      name: "SUDO USE",
      type: "SUDO USE BOT",
      url: "https://t.me/GETO_SUDO_USE",
      description: "Official SUDO ecosystem space for users and community members.",
      badge: "SUDO USE BOT"
    },
    {
      id: "comm-2",
      name: "DO NOT ENTRY",
      type: "CHATTING GROUP",
      url: "https://t.me/+hp2bEQ4WBNBjMWQ1",
      description: "A Telegram chatting community for conversation and interaction.",
      badge: "CHATTING GROUP"
    },
    {
      id: "comm-3",
      name: "DEFAULTER",
      type: "FIGHTING GROUP AND MY COMMUNITY",
      url: "https://t.me/+6q5QlKh32L9hNGI1",
      description: "A community space connected to the DEFAULTER group.",
      badge: "FIGHTING GROUP & COMMUNITY"
    }
  ],

  // Background audio settings (disabled by default)
  // To enable music: set musicEnabled: true, and add audio URL in themeSong
  musicEnabled: false,
  themeSong: "",

  // Sudo Request Protocol configuration (disabled by default)
  sudoRequest: {
    enabled: false,
    botToken: "",
    chatId: ""
  }
};

if (typeof window !== "undefined") {
  window.CONFIG = CONFIG;
}

export default CONFIG;
