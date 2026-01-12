export type Franchise = 'rider' | 'sentai' | 'metal';

export interface Show {
  id: string;
  title: string;
  era: string;
  franchise: Franchise;
}

const createShow = (franchise: Franchise, era: string, title: string): Show => ({
  id: title.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase(),
  title,
  era,
  franchise
});

export const TOKU_DB: Show[] = [
  // --- KAMEN RIDER: REIWA ---
  createShow('rider', 'Reiwa', 'Kamen Rider Zeztz (2025)'),
  createShow('rider', 'Reiwa', 'Kamen Rider Gavv (2024)'),
  createShow('rider', 'Reiwa', 'Kamen Rider Gotchard'),
  createShow('rider', 'Reiwa', 'Kamen Rider Geats'),
  createShow('rider', 'Reiwa', 'Kamen Rider Revice'),
  createShow('rider', 'Reiwa', 'Kamen Rider Saber'),
  createShow('rider', 'Reiwa', 'Kamen Rider Zero-One'),

  // --- KAMEN RIDER: HEISEI PHASE 2 ---
  createShow('rider', 'Heisei Phase 2', 'Kamen Rider Zi-O'),
  createShow('rider', 'Heisei Phase 2', 'Kamen Rider Build'),
  createShow('rider', 'Heisei Phase 2', 'Kamen Rider Ex-Aid'),
  createShow('rider', 'Heisei Phase 2', 'Kamen Rider Ghost'),
  createShow('rider', 'Heisei Phase 2', 'Kamen Rider Drive'),
  createShow('rider', 'Heisei Phase 2', 'Kamen Rider Gaim'),
  createShow('rider', 'Heisei Phase 2', 'Kamen Rider Wizard'),
  createShow('rider', 'Heisei Phase 2', 'Kamen Rider Fourze'),
  createShow('rider', 'Heisei Phase 2', 'Kamen Rider OOO'),
  createShow('rider', 'Heisei Phase 2', 'Kamen Rider W'),

  // --- KAMEN RIDER: HEISEI PHASE 1 ---
  createShow('rider', 'Heisei Phase 1', 'Kamen Rider Decade'),
  createShow('rider', 'Heisei Phase 1', 'Kamen Rider Kiva'),
  createShow('rider', 'Heisei Phase 1', 'Kamen Rider Den-O'),
  createShow('rider', 'Heisei Phase 1', 'Kamen Rider Kabuto'),
  createShow('rider', 'Heisei Phase 1', 'Kamen Rider Hibiki'),
  createShow('rider', 'Heisei Phase 1', 'Kamen Rider Blade'),
  createShow('rider', 'Heisei Phase 1', 'Kamen Rider 555 (Faiz)'),
  createShow('rider', 'Heisei Phase 1', 'Kamen Rider Ryuki'),
  createShow('rider', 'Heisei Phase 1', 'Kamen Rider Agito'),
  createShow('rider', 'Heisei Phase 1', 'Kamen Rider Kuuga'),

  // --- KAMEN RIDER: SHOWA ---
  createShow('rider', 'Showa', 'Kamen Rider J'),
  createShow('rider', 'Showa', 'Kamen Rider ZO'),
  createShow('rider', 'Showa', 'Shin Kamen Rider Prologue'),
  createShow('rider', 'Showa', 'Kamen Rider Black RX'),
  createShow('rider', 'Showa', 'Kamen Rider Black'),
  createShow('rider', 'Showa', 'Kamen Rider ZX'),
  createShow('rider', 'Showa', 'Kamen Rider Super-1'),
  createShow('rider', 'Showa', 'Skyrider'),
  createShow('rider', 'Showa', 'Kamen Rider Stronger'),
  createShow('rider', 'Showa', 'Kamen Rider Amazon'),
  createShow('rider', 'Showa', 'Kamen Rider X'),
  createShow('rider', 'Showa', 'Kamen Rider V3'),
  createShow('rider', 'Showa', 'Kamen Rider (Original)'),

  // --- SUPER SENTAI: REIWA ---
  createShow('sentai', 'Reiwa', 'No.1 Sentai Gozyuger (2025)'),
  createShow('sentai', 'Reiwa', 'Bakuage Sentai Boonboomger'),
  createShow('sentai', 'Reiwa', 'Ohsama Sentai King-Ohger'),
  createShow('sentai', 'Reiwa', 'Avataro Sentai Donbrothers'),
  createShow('sentai', 'Reiwa', 'Kikai Sentai Zenkaiger'),
  createShow('sentai', 'Reiwa', 'Mashin Sentai Kiramager'),

  // --- SUPER SENTAI: HEISEI ---
  createShow('sentai', 'Heisei', 'Kishiryu Sentai Ryusoulger'),
  createShow('sentai', 'Heisei', 'Lupinranger vs Patranger'),
  createShow('sentai', 'Heisei', 'Uchu Sentai Kyuranger'),
  createShow('sentai', 'Heisei', 'Doubutsu Sentai Zyuohger'),
  createShow('sentai', 'Heisei', 'Shuriken Sentai Ninninger'),
  createShow('sentai', 'Heisei', 'Ressha Sentai ToQger'),
  createShow('sentai', 'Heisei', 'Zyuden Sentai Kyoryuger'),
  createShow('sentai', 'Heisei', 'Tokumei Sentai Go-Busters'),
  createShow('sentai', 'Heisei', 'Kaizoku Sentai Gokaiger'),
  createShow('sentai', 'Heisei', 'Tensou Sentai Goseiger'),
  createShow('sentai', 'Heisei', 'Samurai Sentai Shinkenger'),
  createShow('sentai', 'Heisei', 'Engine Sentai Go-onger'),
  createShow('sentai', 'Heisei', 'Juken Sentai Gekiranger'),
  createShow('sentai', 'Heisei', 'GoGo Sentai Boukenger'),
  createShow('sentai', 'Heisei', 'Mahou Sentai Magiranger'),
  createShow('sentai', 'Heisei', 'Tokusou Sentai Dekaranger'),
  createShow('sentai', 'Heisei', 'Bakuryu Sentai Abaranger'),
  createShow('sentai', 'Heisei', 'Ninpuu Sentai Hurricaneger'),
  createShow('sentai', 'Heisei', 'Hyakujuu Sentai Gaoranger'),
  createShow('sentai', 'Heisei', 'Mirai Sentai Timeranger'),
  createShow('sentai', 'Heisei', 'Kyukyu Sentai GoGoFive'),
  createShow('sentai', 'Heisei', 'Seijuu Sentai Gingaman'),
  createShow('sentai', 'Heisei', 'Denji Sentai Megaranger'),
  createShow('sentai', 'Heisei', 'Gekisou Sentai Carranger'),
  createShow('sentai', 'Heisei', 'Chouriki Sentai Ohranger'),
  createShow('sentai', 'Heisei', 'Ninja Sentai Kakuranger'),
  createShow('sentai', 'Heisei', 'Gosei Sentai Dairanger'),
  createShow('sentai', 'Heisei', 'Kyoryu Sentai Zyuranger'),
  createShow('sentai', 'Heisei', 'Choujin Sentai Jetman'),
  createShow('sentai', 'Heisei', 'Chikyu Sentai Fiveman'),
  createShow('sentai', 'Heisei', 'Kousoku Sentai Turboranger'),

  // --- SUPER SENTAI: SHOWA ---
  createShow('sentai', 'Showa', 'Choujuu Sentai Liveman'),
  createShow('sentai', 'Showa', 'Hikari Sentai Maskman'),
  createShow('sentai', 'Showa', 'Choushinsei Flashman'),
  createShow('sentai', 'Showa', 'Dengeki Sentai Changeman'),
  createShow('sentai', 'Showa', 'Choudenshi Bioman'),
  createShow('sentai', 'Showa', 'Kagaku Sentai Dynaman'),
  createShow('sentai', 'Showa', 'Dai Sentai Goggle-V'),
  createShow('sentai', 'Showa', 'Taiyo Sentai Sun Vulcan'),
  createShow('sentai', 'Showa', 'Denshi Sentai Denziman'),
  createShow('sentai', 'Showa', 'Battle Fever J'),
  createShow('sentai', 'Showa', 'J.A.K.Q. Dengekitai'),
  createShow('sentai', 'Showa', 'Himitsu Sentai Gorenger'),

  // --- METAL HEROES ---
  createShow('metal', '90s', 'Tetsuwan Tantei Robotack'),
  createShow('metal', '90s', 'B-Robo Kabutack'),
  createShow('metal', '90s', 'B-Fighter Kabuto'),
  createShow('metal', '90s', 'Juukou B-Fighter'),
  createShow('metal', '90s', 'Blue Swat'),
  createShow('metal', '90s', 'Janperson'),
  createShow('metal', 'Rescue Police', 'Exceedraft'),
  createShow('metal', 'Rescue Police', 'Solbrain'),
  createShow('metal', 'Rescue Police', 'Winspector'),
  createShow('metal', '80s', 'Mobile Cop Jiban'),
  createShow('metal', '80s', 'Sekai Ninja Sen Jiraiya'),
  createShow('metal', '80s', 'Choujinki Metalder'),
  createShow('metal', '80s', 'Spielban'),
  createShow('metal', '80s', 'Juspion'),
  createShow('metal', 'Space Sheriff', 'Shaider'),
  createShow('metal', 'Space Sheriff', 'Sharivan'),
  createShow('metal', 'Space Sheriff', 'Gavan')
];
