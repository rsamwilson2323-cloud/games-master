const GAMES = [
  // ===== BROWSER - BOARDGAME =====
  { id:1, title:"3D Hartwig Chess Set", desc:"3D chess game done in HTML/CSS/JS.", platform:"browser", genre:"boardgame", icon:"♟️", github:"https://github.com/juliangarnier/3D-Hartwig-chess-set", play:"http://codepen.io/juliangarnier/full/BsIih" },
  { id:2, title:"c4 Connect Four", desc:"Connect Four game with AI, in HTML/CSS/JS.", platform:"browser", genre:"boardgame", icon:"🔴", github:"https://github.com/kenrick95/c4", play:"https://kenrick95.github.io/c4/demo/" },
  { id:3, title:"Desperate Gods", desc:"Free online board game with no computer-enforced rules, just like real life.", platform:"browser", genre:"boardgame", icon:"🎲", github:"https://github.com/David20321/FTJ", play:"http://www.wolfire.com/desperate-gods" },
  { id:4, title:"Green Mahjong", desc:"Solitaire mahjong game done in HTML/CSS/JS.", platform:"browser", genre:"boardgame", icon:"🀄", github:"https://github.com/danbeck/green-mahjong", play:null },
  { id:5, title:"Kriegspiel", desc:"The game of imperfect information, the Kriegspiel chess variant.", platform:"browser", genre:"boardgame", icon:"♟️", github:"https://github.com/binarymax/kriegspiel", play:null },
  { id:6, title:"Lichess", desc:"Free chess game using HTML5 and websockets, built with Scala and MongoDB.", platform:"browser", genre:"boardgame", icon:"♚", github:"https://github.com/ornicar/lila", play:"http://lichess.org/" },

  // ===== BROWSER - ARCADE =====
  { id:7, title:"Alien Invasion", desc:"Demo game for Mobile HTML5 Game Development.", platform:"browser", genre:"arcade", icon:"👾", github:"https://github.com/cykod/AlienInvasion", play:"http://cykod.github.io/AlienInvasion/" },
  { id:8, title:"Arashi", desc:"Clone of the Arcade game Tempest.", platform:"browser", genre:"arcade", icon:"🌀", github:"https://github.com/stephank/arashi-js", play:"http://stephank.github.io/arashi-js/" },
  { id:9, title:"Asteroids", desc:"Pure JavaScript asteroids game.", platform:"browser", genre:"arcade", icon:"☄️", github:"http://github.com/dmcinnes/HTML5-Asteroids", play:"http://dougmcinnes.com/html-5-asteroids/" },
  { id:10, title:"Ball And Wall", desc:"Pure JavaScript Arkanoid style game.", platform:"browser", genre:"arcade", icon:"🎱", github:"https://github.com/budnix/ball-and-wall", play:"http://ballandwall.com/" },
  { id:11, title:"Clumsy Bird", desc:"Flappy Bird clone in JavaScript using MelonJS.", platform:"browser", genre:"arcade", icon:"🐦", github:"https://github.com/ellisonleao/clumsy-bird", play:"http://www.varunpant.com/static/resources/CrappyBird/index.html" },
  { id:12, title:"Coffee Snake", desc:"HTML5 snake game written in CoffeeScript.", platform:"browser", genre:"arcade", icon:"🐍", github:"https://github.com/dommmel/coffee-snake", play:"http://dommmel.github.com/coffee-snake/" },
  { id:13, title:"Custom Tetris", desc:"Play the classic Tetris game the way you like it.", platform:"browser", genre:"arcade", icon:"🟦", github:"https://github.com/ondras/custom-tetris", play:"http://ondras.github.io/custom-tetris/" },
  { id:14, title:"DuckHunt JS", desc:"DuckHunt ported to JS and HTML5 with a level creator.", platform:"browser", genre:"arcade", icon:"🦆", github:"https://github.com/MattSurabian/DuckHunt-JS", play:"http://mattsurabian.com/duckhunt/" },
  { id:15, title:"Flappy Bird", desc:"Flappy bird in HTML5.", platform:"browser", genre:"arcade", icon:"🐤", github:"https://github.com/hyspace/flappy", play:null },
  { id:16, title:"HotFix", desc:"Help Hotfix collect stargazers and avoid enemies. Collect commits to upgrade.", platform:"browser", genre:"arcade", icon:"🔧", github:"https://github.com/sdrdis/hotfix", play:"http://sdrdis.github.com/hotfix/" },
  { id:17, title:"Jolly Jumper", desc:"Made in Phaser — a classic jumper arcade game.", platform:"browser", genre:"arcade", icon:"🦘", github:"https://github.com/shohan4556/jolly-jumper", play:"http://shohan4556.github.io/jolly-jumper/" },
  { id:18, title:"Mario 5 HTML", desc:"Infinite Mario in HTML5 JavaScript using Canvas and Audio elements.", platform:"browser", genre:"arcade", icon:"🍄", github:"https://github.com/robertkleffner/mariohtml5", play:null },
  { id:19, title:"Onslaught Arena", desc:"Fight off hordes of classic medieval monsters in this fast paced arcade shooter!", platform:"browser", genre:"arcade", icon:"⚔️", github:"https://github.com/lostdecade/onslaught_arena", play:"http://arcade.lostdecadegames.com/onslaught_arena/" },
  { id:20, title:"Phaser Snake", desc:"JavaScript version of the snake game, created using the Phaser Engine.", platform:"browser", genre:"arcade", icon:"🐍", github:"https://github.com/gamedolphin/javascript_snake", play:null },
  { id:21, title:"Save The Forest", desc:"Save the burning forest! A JavaScript arcade game.", platform:"browser", genre:"arcade", icon:"🌲", github:"https://github.com/softvar/save-the-forest", play:"http://js13kgames.com/games/save-the-forest/index.html" },
  { id:22, title:"Ski Free", desc:"JavaScript port of the classic PC Game, Skifree.", platform:"browser", genre:"arcade", icon:"⛷️", github:"https://github.com/basicallydan/skifree.js", play:"http://basicallydan.github.com/skifree.js" },
  { id:23, title:"Snake", desc:"Clone of the classic Snake game.", platform:"browser", genre:"arcade", icon:"🐍", github:"https://github.com/jrgdiz/snake", play:"http://diz.es/snake/" },
  { id:24, title:"Space Invaders", desc:"Remake of Space Invaders in require.js.", platform:"browser", genre:"arcade", icon:"🚀", github:"https://github.com/StrykerKKD/SpaceInvaders", play:"http://strykerkkd.github.io/SpaceInvaders/" },
  { id:25, title:"Super Mario Bros", desc:"Super Mario Bros level one written with Backbone Game Engine.", platform:"browser", genre:"arcade", icon:"🍄", github:"https://github.com/martindrapeau/backbone-game-engine", play:"http://martindrapeau.github.io/backbone-game-engine/super-mario-bros/index.html" },
  { id:26, title:"FullScreenMario", desc:"Free HTML5 remake of Super Mario Bros with additional features.", platform:"browser", genre:"arcade", icon:"🌟", github:"https://github.com/FullScreenShenanigans/FullScreenMario/", play:null },
  { id:27, title:"Space-Shooter", desc:"Classic shoot'em up space shooter in HTML5 with multiplayer.", platform:"browser", genre:"arcade", icon:"🛸", github:"https://github.com/Couchfriends/Space-Shooter", play:"http://couchfriends.com/games/5" },
  { id:28, title:"Chromacore", desc:"2D musical platformer set in a dark black & white world that becomes colorful through gameplay.", platform:"browser", genre:"arcade", icon:"🎨", github:"https://github.com/Murkantilism/game-off-2013", play:null },
  { id:29, title:"CHANG€", desc:"Intense game about the extreme life of supermarket cashiers.", platform:"browser", genre:"arcade", icon:"💰", github:"https://github.com/RothschildGames/change", play:"http://change-game.herokuapp.com/" },
  { id:30, title:"Coil", desc:"HTML5 canvas game where you defeat enemies by wrapping them in your trail.", platform:"browser", genre:"arcade", icon:"🌀", github:"https://github.com/leereilly/Coil", play:"http://hakim.se/experiments/html5/coil/" },

  // ===== BROWSER - FPS =====
  { id:31, title:"BananaBread", desc:"Port of Cube 2/Sauerbraten 3D shooter to the web using Emscripten.", platform:"browser", genre:"fps", icon:"🔫", github:"https://github.com/kripken/BananaBread", play:"https://kripken.github.io/BananaBread/cube2/bb.html" },

  // ===== BROWSER - RPG =====
  { id:32, title:"Diablo JS", desc:"Isometric minimal-code style game at HTML5 canvas and JavaScript.", platform:"browser", genre:"rpg", icon:"⚔️", github:"https://github.com/mitallast/diablo-js", play:"http://mitallast.github.io/diablo-js/" },
  { id:33, title:"Roguish", desc:"RPG/Rogue-like game created in JavaScript.", platform:"browser", genre:"rpg", icon:"🗡️", github:"https://github.com/CamHenlin/Roguish", play:null },
  { id:34, title:"Room for Change", desc:"Randomly generated action RPG.", platform:"browser", genre:"rpg", icon:"🎲", github:"https://github.com/antionio/game-off-2013", play:null },

  // ===== BROWSER - MMORPG =====
  { id:35, title:"BrowserQuest", desc:"HTML5/JavaScript multiplayer game experiment by Mozilla.", platform:"browser", genre:"mmorpg", icon:"🌍", github:"https://github.com/mozilla/BrowserQuest", play:"http://browserquest.mozilla.org/" },
  { id:36, title:"Tap Tap Adventure", desc:"Expansion of BrowserQuest MMORPG.", platform:"browser", genre:"mmorpg", icon:"🗺️", github:"https://github.com/Tach-Yon/Tap-Tap-Adventure", play:"http://taptapadventure.com/play" },

  // ===== BROWSER - STRATEGY =====
  { id:37, title:"Ancient Beast", desc:"Materialize and control beasts in order to defeat your opponents!", platform:"browser", genre:"strategy", icon:"🐉", github:"https://github.com/FreezingMoon/AncientBeast", play:"http://ancientbeast.com/play" },
  { id:38, title:"Command & Conquer", desc:"Clone of the popular RTS Command & Conquer.", platform:"browser", genre:"strategy", icon:"🏗️", github:"https://github.com/adityaravishankar/command-and-conquer", play:"http://www.adityaravishankar.com/projects/games/command-and-conquer/" },
  { id:39, title:"Freeciv-web", desc:"Turn-based strategy game implemented in HTML5.", platform:"browser", genre:"strategy", icon:"🗺️", github:"https://github.com/freeciv/freeciv-web", play:null },
  { id:40, title:"Hexa Battle", desc:"Turn based dungeon crawler written with TypeScript, using React and SVG.", platform:"browser", genre:"strategy", icon:"🔷", github:"https://github.com/itajaja/hb", play:"http://giacomotag.io/hb/" },
  { id:41, title:"Tower Defense", desc:"3D Tower Defense built with Three.js in HTML5.", platform:"browser", genre:"strategy", icon:"🗼", github:"https://github.com/Casmo/tower-defense", play:null },

  // ===== BROWSER - RACING =====
  { id:42, title:"HexGL", desc:"Futuristic HTML5 racing game using HTML5, Javascript and WebGL.", platform:"browser", genre:"racing", icon:"🏎️", github:"https://github.com/BKcore/HexGL", play:"http://hexgl.bkcore.com/" },
  { id:43, title:"Trigger Rally", desc:"Fast arcade rally racing game.", platform:"browser", genre:"racing", icon:"🚗", github:"https://github.com/CodeArtemis/TriggerRally", play:null },

  // ===== BROWSER - SANDBOX =====
  { id:44, title:"3d.city", desc:"3D city builder game.", platform:"browser", genre:"sandbox", icon:"🏙️", github:"https://github.com/lo-th/3d.city", play:"http://lo-th.github.io/3d.city/index.html" },
  { id:45, title:"Blk Game", desc:"Multiplayer JavaScript/WebGL voxel world game demo.", platform:"browser", genre:"sandbox", icon:"🧱", github:"https://github.com/morozd/blk-game", play:"http://benvanik.github.io/blk-game/" },
  { id:46, title:"Project Cube", desc:"Voxel game based on Minecraft made with HTML5.", platform:"browser", genre:"sandbox", icon:"📦", github:"https://github.com/B-Train04/Project-Cube", play:"https://b-train04.github.io/Project-Cube/projectCube/index.html" },

  // ===== BROWSER - PUZZLE =====
  { id:47, title:"2048", desc:"Sliding addition puzzle game.", platform:"browser", genre:"puzzle", icon:"🔢", github:"https://github.com/gabrielecirulli/2048", play:"http://gabrielecirulli.github.io/2048/" },
  { id:48, title:"A Dark Room", desc:"Minimalist Text Adventure game written in JavaScript.", platform:"browser", genre:"puzzle", icon:"🕯️", github:"https://github.com/doublespeakgames/adarkroom", play:"http://adarkroom.doublespeakgames.com/" },
  { id:49, title:"Astray", desc:"WebGL maze game built with Three.js and Box2dWeb.", platform:"browser", genre:"puzzle", icon:"🧩", github:"https://github.com/wwwtyro/Astray", play:"http://wwwtyro.github.io/Astray/" },
  { id:50, title:"Blockrain.js", desc:"Embed and play the classic Tetris-like game on your site.", platform:"browser", genre:"puzzle", icon:"🟥", github:"https://github.com/Aerolab/blockrain.js", play:"http://aerolab.github.io/blockrain.js/" },
  { id:51, title:"cube-composer", desc:"A puzzle game inspired by functional programming.", platform:"browser", genre:"puzzle", icon:"🎮", github:"https://github.com/sharkdp/cube-composer", play:"http://david-peter.de/cube-composer" },
  { id:52, title:"Hextris", desc:"Addictive puzzle game inspired by Tetris.", platform:"browser", genre:"puzzle", icon:"🔺", github:"https://github.com/Hextris/hextris", play:"http://hextris.io/" },
  { id:53, title:"Pop Pop Win", desc:"Implementation of Minesweeper in Dart.", platform:"browser", genre:"puzzle", icon:"💣", github:"https://github.com/dart-lang/pop-pop-win", play:"http://dart-lang.github.io/sample-pop_pop_win/" },
  { id:54, title:"Sudoku JS", desc:"A Sudoku puzzle game with a clean design and mobile devices in mind.", platform:"browser", genre:"puzzle", icon:"🔢", github:"https://github.com/baruchel/sudoku-js", play:"http://baruchel.insomnia247.nl/sudoku-js/sudoku.html" },
  { id:55, title:"untrusted", desc:"Meta-JavaScript adventure game — escape the dungeon by modifying the game's source code.", platform:"browser", genre:"puzzle", icon:"💻", github:"https://github.com/AlexNisnevich/untrusted", play:"http://alex.nisnevich.com/untrusted/" },
  { id:56, title:"Zop", desc:"Connect like colors — simple but addictive puzzle.", platform:"browser", genre:"puzzle", icon:"🎨", github:"https://github.com/Zolmeister/zop", play:"https://zop.zolmeister.com/" },
  { id:57, title:"0hh1", desc:"Lovely little logic game by Q42.", platform:"browser", genre:"puzzle", icon:"⬛", github:"https://github.com/Q42/0hh1", play:"http://0hh1.com" },
  { id:58, title:"0hh0", desc:"Companion logic game to 0hh1 by Q42.", platform:"browser", genre:"puzzle", icon:"⬜", github:"https://github.com/Q42/0hn0", play:"http://0hh0.com" },
  { id:59, title:"Hexahedral", desc:"Push down all the blocks in the minimum number of moves.", platform:"browser", genre:"puzzle", icon:"🔷", github:"https://github.com/mminer/hexahedral", play:"http://matthewminer.com/hexahedral" },
  { id:60, title:"Drunken Viking", desc:"Retrace your drunken rampage in reverse time.", platform:"browser", genre:"puzzle", icon:"🍺", github:"https://github.com/cxong/DrunkenViking", play:"http://congusbongus.itch.io/drunken-viking" },

  // ===== BROWSER - CLICKER =====
  { id:61, title:"Particle Clicker", desc:"Addictive incremental game that teaches players the history of high energy particle physics.", platform:"browser", genre:"clicker", icon:"⚛️", github:"https://github.com/particle-clicker/particle-clicker", play:"http://cern.ch/particle-clicker" },

  // ===== BROWSER - OTHER =====
  { id:62, title:"binb", desc:"Competitive, multiplayer, realtime, guess the song game.", platform:"browser", genre:"other", icon:"🎵", github:"https://github.com/lpinca/binb", play:"https://binb.co" },
  { id:63, title:"The House", desc:"You're in a strange house. Can you find the way out?", platform:"browser", genre:"other", icon:"🏠", github:"https://github.com/arturkot/the-house-game", play:"https://the-house.arturkot.pl/" },
  { id:64, title:"Psiral", desc:"JavaScript/HTML5 game, GitHub Game Off 2 winner.", platform:"browser", genre:"other", icon:"🌀", github:"https://github.com/petarov/game-off-2013", play:"http://psiral.herokuapp.com/" },
  { id:65, title:"Square Off!", desc:"Multiplayer 1v1 air-hockey style game — place squares to deflect the ball.", platform:"browser", genre:"other", icon:"🟩", github:"https://github.com/ScriptaGames/SquareOff/", play:"http://sqoff.com/" },
  { id:66, title:"JumpSuit", desc:"Multiplayer space shooter set in a wrapped universe.", platform:"browser", genre:"arcade", icon:"🚀", github:"https://github.com/KordonBleu/jumpsuit", play:"http://jumpsuit.space/" },
  { id:67, title:"PolyBranch", desc:"Minimalist 3D game — dodge branches as you approach terminal velocity.", platform:"browser", genre:"arcade", icon:"🌿", github:"https://github.com/gbatha/PolyBranch", play:"http://gregbatha.com/branches/" },

  // ===== NATIVE - ACTION =====
  { id:68, title:"OpenTomb", desc:"Open-source Tomb Raider 1–5 engine remake.", platform:"native", genre:"action", icon:"🏺", github:"https://github.com/opentomb/OpenTomb", play:null },

  // ===== NATIVE - ARCADE =====
  { id:69, title:"C-Dogs SDL", desc:"Overhead shoot-em-up port of the classic DOS game.", platform:"native", genre:"arcade", icon:"🔫", github:"https://github.com/cxong/cdogs-sdl", play:null },
  { id:70, title:"DynaDungeons", desc:"Bomberman clone using the Godot game engine.", platform:"native", genre:"arcade", icon:"💣", github:"https://github.com/akien-mga/dynadungeons", play:null },
  { id:71, title:"Epic Inventor", desc:"Indie, side-scrolling, action RPG.", platform:"native", genre:"arcade", icon:"⚙️", github:"https://github.com/BlkStormy/epic-inventor", play:null },
  { id:72, title:"Mystic Mine", desc:"Single and multiplayer action game with mining carts.", platform:"native", genre:"arcade", icon:"⛏️", github:"https://github.com/koonsolo/MysticMine", play:null },
  { id:73, title:"Space Shooter", desc:"Cross platform, 2D space shooting game made using Pygame.", platform:"native", genre:"arcade", icon:"🛸", github:"https://github.com/prodicus/spaceShooter", play:null },
  { id:74, title:"Teeworlds", desc:"Online multi-player platform 2D shooter.", platform:"native", genre:"arcade", icon:"🐾", github:"https://github.com/teeworlds/teeworlds/", play:null },
  { id:75, title:"Witch Blast", desc:"Roguelite dungeon crawl shooter similar to The Binding of Isaac.", platform:"native", genre:"arcade", icon:"🧙", github:"https://github.com/Cirrus-Minor/witchblast", play:null },

  // ===== NATIVE - FPS =====
  { id:76, title:"AssaultCube", desc:"Total conversion of Wouter van Oortmerssen's FPS called Cube.", platform:"native", genre:"fps", icon:"🔫", github:"https://github.com/assaultcube/AC", play:null },
  { id:77, title:"Freedoom", desc:"Free software FPS based on the classic Doom engine.", platform:"native", genre:"fps", icon:"💀", github:"https://github.com/freedoom/freedoom", play:null },
  { id:78, title:"GlPortal", desc:"A modern 3D game and engine with portals written in C++.", platform:"native", genre:"fps", icon:"🌀", github:"https://github.com/GlPortal/glPortal", play:null },
  { id:79, title:"ioquake3", desc:"The free software FPS engine that can be used to play Quake 3 or make your own game.", platform:"native", genre:"fps", icon:"🎯", github:"https://github.com/ioquake/ioq3", play:null },
  { id:80, title:"OpenLara", desc:"Tomb Raider open-source engine.", platform:"native", genre:"fps", icon:"🏛️", github:"https://github.com/XProger/OpenLara", play:"http://xproger.info/projects/OpenLara/" },
  { id:81, title:"Red Eclipse", desc:"Free, casual arena shooter featuring parkour.", platform:"native", genre:"fps", icon:"🔴", github:"https://github.com/red-eclipse", play:null },
  { id:82, title:"Unvanquished", desc:"Fast-paced, futuristic FPS with RTS elements.", platform:"native", genre:"fps", icon:"🚀", github:"https://github.com/Unvanquished/Unvanquished", play:null },
  { id:83, title:"Warsow", desc:"Fast-paced FPS in a futuristic cartoonish world.", platform:"native", genre:"fps", icon:"⚡", github:"https://github.com/Warsow", play:null },

  // ===== NATIVE - MMORPG =====
  { id:84, title:"Open Meridian", desc:"The first 3D MMORPG, released in 1996 and open sourced in 2012.", platform:"native", genre:"mmorpg", icon:"🌍", github:"https://github.com/OpenMeridian/Meridian59", play:"http://openmeridian.org" },
  { id:85, title:"Stendhal", desc:"Fun friendly and free 2D multiplayer online adventure game with an old school feel.", platform:"native", genre:"mmorpg", icon:"🗺️", github:"https://github.com/arianne/stendhal", play:"https://stendhalgame.org" },

  // ===== NATIVE - RPG =====
  { id:86, title:"Angband", desc:"Single-player dungeon exploration game in the universe of JRR Tolkien.", platform:"native", genre:"rpg", icon:"💍", github:"https://github.com/angband/angband", play:null },
  { id:87, title:"Cataclysm: Dark Days Ahead", desc:"Roguelike set in a post-apocalyptic world.", platform:"native", genre:"rpg", icon:"☣️", github:"https://github.com/CleverRaven/Cataclysm-DDA", play:null },
  { id:88, title:"Dungeon Crawl Stone Soup", desc:"Single-player roguelike dungeon exploration game with a larger focus on combat.", platform:"native", genre:"rpg", icon:"🗡️", github:"https://github.com/crawl/crawl", play:null },
  { id:89, title:"Flare RPG", desc:"Fantasy action RPG game with its own engine.", platform:"native", genre:"rpg", icon:"🔥", github:"https://github.com/clintbellanger/flare-game", play:null },
  { id:90, title:"NetHack", desc:"Single-player roguelike dungeon exploration game — one of the most popular in its genre.", platform:"native", genre:"rpg", icon:"⚔️", github:"https://github.com/NetHack/NetHack", play:null },
  { id:91, title:"OpenMW", desc:"Reimplementation of the Morrowind game engine.", platform:"native", genre:"rpg", icon:"🧙", github:"https://github.com/OpenMW/openmw", play:null },
  { id:92, title:"Freeablo", desc:"Open-source implementation of the Diablo I engine.", platform:"native", genre:"rpg", icon:"😈", github:"https://github.com/wheybags/freeablo", play:null },

  // ===== NATIVE - PLATFORM =====
  { id:93, title:"Frogatto", desc:"Action-adventure game, starring a certain quixotic frog.", platform:"native", genre:"platform", icon:"🐸", github:"https://github.com/frogatto/frogatto", play:null },
  { id:94, title:"Gish", desc:"Award-winning physics platformer.", platform:"native", genre:"platform", icon:"🟤", github:"https://github.com/blinry/gish", play:null },
  { id:95, title:"SuperTux", desc:"Classic 2D jump'n'run sidescroller with Tux the penguin.", platform:"native", genre:"platform", icon:"🐧", github:"https://github.com/SuperTux/supertux", play:null },
  { id:96, title:"The Legend of Edgar", desc:"2D platform game with a persistent world.", platform:"native", genre:"platform", icon:"🗺️", github:"https://github.com/riksweeney/edgar", play:null },
  { id:97, title:"Mario-Level-1", desc:"First level of Super Mario Bros made with Python and Pygame.", platform:"native", genre:"platform", icon:"🍄", github:"https://github.com/justinmeister/Mario-Level-1", play:null },

  // ===== NATIVE - PUZZLE/CARD/BOARD =====
  { id:98, title:"Dominion", desc:"C# implementation of Dominion, a board/card game.", platform:"native", genre:"boardgame", icon:"👑", github:"https://github.com/paulbatum/Dominion", play:null },
  { id:99, title:"Minilens", desc:"Cute puzzle platformer starring a cleaning robot on post-apocalyptic Earth.", platform:"native", genre:"puzzle", icon:"🤖", github:"https://github.com/KOBUGE-Games/minilens", play:null },
  { id:100, title:"nudoku", desc:"ncurses based CLI sudoku game.", platform:"native", genre:"puzzle", icon:"🔢", github:"https://github.com/jubalh/nudoku", play:null },
  { id:101, title:"PokerTH", desc:"Implementation of Texas Hold'em supporting online multiplayer and bot play.", platform:"native", genre:"boardgame", icon:"🃏", github:"https://github.com/pokerth/pokerth", play:"http://www.pokerth.net/" },
  { id:102, title:"Wizznic", desc:"Most awesome puzzle game.", platform:"native", genre:"puzzle", icon:"🧩", github:"https://github.com/DusteDdk/Wizznic", play:null },

  // ===== NATIVE - RACING =====
  { id:103, title:"Stunt Rally", desc:"Rally game with Track Editor, based on VDrift and OGRE.", platform:"native", genre:"racing", icon:"🏁", github:"https://github.com/stuntrally/stuntrally", play:null },
  { id:104, title:"SuperTuxKart", desc:"Free 3D kart racing game featuring open source mascots.", platform:"native", genre:"racing", icon:"🏎️", github:"https://github.com/supertuxkart/stk-code", play:null },

  // ===== NATIVE - SANDBOX =====
  { id:105, title:"Craft", desc:"Simple Minecraft clone written in C using modern OpenGL.", platform:"native", genre:"sandbox", icon:"⛏️", github:"https://github.com/fogleman/Craft", play:null },
  { id:106, title:"Endless Sky", desc:"Space trading and combat game similar to the classic Escape Velocity series.", platform:"native", genre:"sandbox", icon:"🌌", github:"https://github.com/endless-sky/endless-sky", play:null },
  { id:107, title:"Minetest", desc:"Infinite-world block sandbox game with survival and crafting.", platform:"native", genre:"sandbox", icon:"🧱", github:"https://github.com/minetest/minetest", play:null },
  { id:108, title:"Space Engineers", desc:"Voxel-based sandbox game set in an asteroid field in space.", platform:"native", genre:"sandbox", icon:"🚀", github:"https://github.com/KeenSoftwareHouse/SpaceEngineers", play:null },
  { id:109, title:"The Powder Toy", desc:"Falling-sand physics sandbox game.", platform:"native", genre:"sandbox", icon:"⚗️", github:"https://github.com/simtr/The-Powder-Toy", play:null },
  { id:110, title:"Terasology", desc:"Voxel world game engine inspired by Minecraft with fancy graphic effects.", platform:"native", genre:"sandbox", icon:"🌿", github:"https://github.com/MovingBlocks/Terasology", play:null },

  // ===== NATIVE - STRATEGY =====
  { id:111, title:"0 A.D.", desc:"3D RTS similar to Age of Empires II.", platform:"native", genre:"strategy", icon:"🏛️", github:"https://github.com/0ad/0ad", play:null },
  { id:112, title:"CorsixTH", desc:"Clone of Theme Hospital.", platform:"native", genre:"strategy", icon:"🏥", github:"https://github.com/CorsixTH/CorsixTH", play:null },
  { id:113, title:"Hedgewars", desc:"Turn based strategy, artillery, action and comedy game.", platform:"native", genre:"strategy", icon:"🦔", github:"https://github.com/hedgewars/hw", play:null },
  { id:114, title:"KeeperRL", desc:"Roguelike dungeon builder inspired by Dwarf Fortress.", platform:"native", genre:"strategy", icon:"🏰", github:"https://github.com/miki151/keeperrl", play:null },
  { id:115, title:"MegaGlest", desc:"MegaGlest real-time strategy game engine (cross-platform, 3D).", platform:"native", genre:"strategy", icon:"⚔️", github:"https://github.com/MegaGlest/megaglest-source", play:null },
  { id:116, title:"Micropolis", desc:"City-building game based on the original code for SimCity.", platform:"native", genre:"strategy", icon:"🏙️", github:"https://github.com/SimHacker/micropolis", play:null },
  { id:117, title:"OpenRA", desc:"Open-source implementation of the Red Alert engine using .NET/mono and OpenGL.", platform:"native", genre:"strategy", icon:"🎖️", github:"https://github.com/OpenRA/OpenRA", play:null },
  { id:118, title:"OpenTTD", desc:"Transport simulation game based upon Transport Tycoon Deluxe.", platform:"native", genre:"strategy", icon:"🚂", github:"https://github.com/OpenTTD/OpenTTD", play:null },
  { id:119, title:"OpenRCT2", desc:"Open source recreation of Rollercoaster Tycoon 2.", platform:"native", genre:"strategy", icon:"🎢", github:"https://github.com/OpenRCT2/OpenRCT2", play:null },
  { id:120, title:"The Battle for Wesnoth", desc:"Turn-based strategy game with a high fantasy theme.", platform:"native", genre:"strategy", icon:"⚔️", github:"https://github.com/wesnoth/wesnoth", play:null },
  { id:121, title:"Warzone 2100", desc:"Postnuclear realtime strategy game.", platform:"native", genre:"strategy", icon:"💣", github:"https://github.com/Warzone2100/warzone2100", play:null },
  { id:122, title:"Zero-K", desc:"Open source RTS game with physical projectiles and smart units.", platform:"native", genre:"strategy", icon:"🤖", github:"https://github.com/ZeroK-RTS/Zero-K", play:null },
  { id:123, title:"Caesaria", desc:"Remake of the popular citybuilder and economic sim Caesar III.", platform:"native", genre:"strategy", icon:"🏛️", github:"https://github.com/dalerank/caesaria-game", play:null },
  { id:124, title:"Pioneer", desc:"Game of lonely space adventure.", platform:"native", genre:"sandbox", icon:"🌠", github:"https://github.com/pioneerspacesim/pioneer", play:null },

  // ===== MOBILE - ANDROID =====
  { id:125, title:"Pixel Dungeon", desc:"Traditional roguelike game with pixel-art graphics and simple interface.", platform:"mobile", genre:"rpg", icon:"🎮", github:"https://github.com/watabou/pixel-dungeon", play:null },
  { id:126, title:"Game of Life", desc:"Conway's Game of Life with editable rules for Android.", platform:"mobile", genre:"other", icon:"🔵", github:"https://github.com/zsoltk/GameOfLife", play:null },
  { id:127, title:"Green Wall", desc:"Weirdly addictive arcade-style Android game where you fling fruit at a wall.", platform:"mobile", genre:"arcade", icon:"🍎", github:"https://github.com/awlzac/greenwall", play:null },
  { id:128, title:"Memory Game", desc:"Simple and beautiful memory game for kids on Android.", platform:"mobile", genre:"puzzle", icon:"🧠", github:"https://github.com/sromku/memory-game", play:null },
  { id:129, title:"Colorphun", desc:"Simple color-based Android game.", platform:"mobile", genre:"other", icon:"🌈", github:"https://github.com/prakhar1989/colorphun", play:null },

  // ===== MOBILE - IOS =====
  { id:130, title:"Bridges", desc:"Puzzle game with bridges, houses, tolls, and subways for iOS.", platform:"mobile", genre:"puzzle", icon:"🌉", github:"https://github.com/zgrossbart/bridges", play:null },
  { id:131, title:"Canabalt", desc:"Release of the iconic auto-running game Canabalt for iOS.", platform:"mobile", genre:"arcade", icon:"🏃", github:"https://github.com/ericjohnson/canabalt-ios", play:null },
  { id:132, title:"Doom iOS", desc:"Doom Classic for iOS.", platform:"mobile", genre:"fps", icon:"💀", github:"https://github.com/id-Software/DOOM-iOS", play:null },
  { id:133, title:"Lumio", desc:"Puzzle game for iOS developed using Cocos2D.", platform:"mobile", genre:"puzzle", icon:"💡", github:"https://github.com/joannecdyer/lumio", play:null },
  { id:134, title:"Sakura Fly", desc:"iOS action game developed using SpriteKit.", platform:"mobile", genre:"action", icon:"🌸", github:"https://github.com/l800891/Sakura-Fly", play:null },
  { id:135, title:"Wolfenstein 3D iOS", desc:"Wolfenstein 3D for iOS Source Release.", platform:"mobile", genre:"fps", icon:"🔫", github:"https://github.com/id-Software/Wolf3D-iOS", play:null },
  { id:136, title:"Light Jockey", desc:"iOS Auditorium-like game.", platform:"mobile", genre:"puzzle", icon:"💡", github:"https://github.com/jmfieldman/Light-Jockey", play:null },
];
