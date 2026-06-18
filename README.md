# 🎮 Open Source Games Hub

Open Source Games Hub is a **searchable, filterable web directory** of open source games hosted on GitHub, built with **HTML5 🌐, CSS3 🎨, and Vanilla JavaScript ⚡**.

The site lets you browse 136+ open source games by platform (Browser, Native, Mobile), genre (Arcade, RPG, Strategy, Puzzle, FPS, Sandbox, and more), or search by name. Games with live play links are highlighted so you can jump straight in.

Perfect for game developers, open source enthusiasts, learners exploring game mechanics, and anyone who loves free games.

---

# ✨ Features

🔍 Live Search

* Instant filtering as you type — searches titles and descriptions

🗂️ Category Sidebar

* Filter by Platform: Browser, Native, Mobile
* Filter by Genre: Arcade, RPG, FPS, Strategy, Puzzle, Sandbox, Racing, Board Game, MMORPG, Platform, Action, Clicker

▷ Play Now Filter

* Toggle to show only games with live play links

⊞ Grid & List Views

* Switch between card grid and compact list layout

🖱️ Game Detail Modal

* Click any game for full description, tags, GitHub link, and Play Now button

📊 Live Count Badge

* Always shows how many games match your current filter

🌐 LAN Accessible

* Run on your local network — share with anyone on the same Wi-Fi

🎨 Dark Gaming Aesthetic

* Deep navy palette, accent gradients, mono fonts — built for the vibe

⚡ Zero Dependencies

* No frameworks, no build step — pure HTML/CSS/JS, runs anywhere

---

# 📂 Project Structure

```text
games-master/
│
├── index.html          ← Main site
├── start-server.bat    ← Windows launcher (localhost + LAN IP)
├── README.md
├── css/
│   └── style.css       ← All styling
└── js/
    ├── games.js        ← Games database (136+ entries)
    └── app.js          ← Search, filter, modal, view logic
```

---

# ⚙️ Installation

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/rsamwilson2323-cloud/games-master.git

cd games-master
```

---

## 2️⃣ No Dependencies to Install

This project runs with zero npm install or pip install.

All you need is **Python 3** (comes pre-installed on most systems) or **Node.js** as a fallback.

---

# ▶️ Usage

## Windows — Double-click to launch

```text
Double-click start-server.bat
```

The script will:
* Auto-detect Python or Node.js
* Print your **localhost** and **LAN IP** address
* Open the browser automatically

## Mac / Linux — Terminal

```bash
cd games-master
python3 -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

---

# 🌐 Access on Local Network

When you run `start-server.bat`, the terminal will display:

```text
Local:    http://localhost:8080
Network:  http://192.168.x.x:8080
```

Anyone on the same Wi-Fi or LAN can open the network URL on their phone or laptop.

---

# 🎮 How to Use the Site

| Action | How |
| --- | --- |
| Search games | Type in the search bar at the top |
| Filter by platform | Click Browser / Native / Mobile in sidebar |
| Filter by genre | Click any genre in the sidebar |
| Show only playable | Click "Has Play Link" toggle |
| Switch layout | Click ⊞ grid or ☰ list button |
| View game details | Click any game card |
| Open on GitHub | Click "View on GitHub" in the modal |
| Play in browser | Click "▷ Play Now" in the modal |
| Close modal | Press Escape or click ✕ |

---

# 🗂️ Genres Covered

* 🕹️ Arcade — Asteroids, Snake, Space Shooters, Flappy Bird clones
* ⚔️ RPG — Roguelikes, dungeon crawlers, Diablo clones
* 🧠 Strategy — RTS, city builders, turn-based
* 🧩 Puzzle — Tetris variants, logic games, maze games
* 🔫 FPS — Doom-style, Quake ports, arena shooters
* 🏗️ Sandbox — Minecraft clones, voxel worlds, physics toys
* 🏎️ Racing — 3D racing, rally, futuristic
* ♟️ Board Games — Chess, Mahjong, Card games
* 🌍 MMORPG — Browser-based multiplayer worlds
* 🏃 Platform — Side scrollers, jump and run
* 💥 Action — Top-down shooters, beat-em-ups
* 👆 Clicker — Incremental and idle games

---

# 🚀 Future Improvements

🔖 Bookmark Favorite Games

🌟 Star Count from GitHub API

🖼️ Screenshot Previews

🌙 Light Mode Toggle

📱 Mobile Sidebar Drawer

🔗 Shareable Filter URLs

🗃️ Add More Games via Pull Request

---

# 🎯 Tech Stack

* HTML5
* CSS3 (Custom Properties, Grid, Flexbox)
* Vanilla JavaScript (ES6+)
* Python 3 http.server (for local hosting)

---

# ⚠️ Disclaimer

This project is a directory of open source games — all games link to their original GitHub repositories.

All game titles, descriptions, and links belong to their respective creators and are licensed under their own terms.

---

# 👨‍💻 Author

**R. Sam Wilson**

🌐 GitHub

https://github.com/rsamwilson2323-cloud

💼 LinkedIn

https://www.linkedin.com/in/sam-wilson-14b554385

---

# 📜 License

This project is licensed under the MIT License.
