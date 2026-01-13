# Toku Tracker - Development Context

## Project Overview

Tokusatsu series tracker web app tracking Kamen Rider, Super Sentai, and Metal Heroes series across eras (Showa, Heisei, Reiwa).

**Tech Stack:**

- Frontend: React 19 + Vite + TanStack Router
- Backend: Convex (serverless functions + database)
- Styling: Tailwind CSS + Japanese fonts (M PLUS 1p, Noto Sans JP)
- Deployment: Vercel (frontend) + Convex Cloud (backend)

## Database Schema (Convex)

### Tables:

- `shows`: id, title, era, franchise, order
- `userProgress`: showId, watched, watchedAt

### Franchise Values:

- "rider" - Kamen Rider series
- "sentai" - Super Sentai series
- "metal" - Metal Heroes series

### Era Values:

- "Showa" - 1970s-1980s
- "Heisei" - 1990s-2010s (includes both Phase 1 and Phase 2 Kamen Rider)
- "Reiwa" - 2019-Present

## Show Data (from READTHIS.md)

### Kamen Rider (37 shows)

**Showa Era (10):**

1. Kamen Rider (1971)
2. Kamen Rider V3 (1973)
3. Kamen Rider X (1974)
4. Kamen Rider Amazon (1974)
5. Kamen Rider Stronger (1975)
6. Kamen Rider (Skyrider) (1979)
7. Kamen Rider Super-1 (1980)
8. Kamen Rider ZX (1984)
9. Kamen Rider Black (1987)
10. Kamen Rider Black RX (1988)

**Heisei Era (20):** 11. Kamen Rider Kuuga (2000) 12. Kamen Rider Agito (2001) 13. Kamen Rider Ryuki (2002) 14. Kamen Rider 555 (Faiz) (2003) 15. Kamen Rider Blade (2004) 16. Kamen Rider Hibiki (2005) 17. Kamen Rider Kabuto (2006) 18. Kamen Rider Den-O (2007) 19. Kamen Rider Kiva (2008) 20. Kamen Rider Decade (2009) 21. Kamen Rider W (Double) (2009) 22. Kamen Rider OOO (2010) 23. Kamen Rider Fourze (2011) 24. Kamen Rider Wizard (2012) 25. Kamen Rider Gaim (2013) 26. Kamen Rider Drive (2014) 27. Kamen Rider Ghost (2015) 28. Kamen Rider Ex-Aid (2016) 29. Kamen Rider Build (2017) 30. Kamen Rider Zi-O (2018)

**Reiwa Era (7):** 31. Kamen Rider Zero-One (2019) 32. Kamen Rider Saber (2020) 33. Kamen Rider Revice (2021) 34. Kamen Rider Geats (2022) 35. Kamen Rider Gotchard (2023) 36. Kamen Rider Gavv (2024) 37. Kamen Rider Zeztz (2025)

### Super Sentai (49 shows)

**Showa Era (12):**

1. Himitsu Sentai Gorenger (1975)
2. J.A.K.Q. Dengekitai (1977)
3. Battle Fever J (1979)
4. Denshi Sentai Denziman (1980)
5. Taiyo Sentai Sun Vulcan (1981)
6. Dai Sentai Goggle-V (1982)
7. Kagaku Sentai Dynaman (1983)
8. Choudenshi Bioman (1984)
9. Dengeki Sentai Changeman (1985)
10. Choushinsei Flashman (1986)
11. Hikari Sentai Maskman (1987)
12. Choujuu Sentai Liveman (1988)

**Heisei Era (37):** 13. Kousoku Sentai Turboranger (1989) 14. Chikyu Sentai Fiveman (1990) 15. Choujin Sentai Jetman (1991) 16. Kyoryu Sentai Zyuranger (1992) 17. Gosei Sentai Dairanger (1993) 18. Ninja Sentai Kakuranger (1994) 19. Chouriki Sentai Ohranger (1995) 20. Gekisou Sentai Carranger (1996) 21. Denji Sentai Megaranger (1997) 22. Seijuu Sentai Gingaman (1998) 23. Kyuukyuu Sentai GoGoFive (1999) 24. Mirai Sentai Timeranger (2000) 25. Hyakujuu Sentai Gaoranger (2001) 26. Ninpuu Sentai Hurricaneger (2002) 27. Bakuryuu Sentai Abaranger (2003) 28. Tokusou Sentai Dekaranger (2004) 29. Mahou Sentai Magiranger (2005) 30. GoGo Sentai Boukenger (2006) 31. Juken Sentai Gekiranger (2007) 32. Engine Sentai Go-onger (2008) 33. Samurai Sentai Shinkenger (2009) 34. Tensou Sentai Goseiger (2010) 35. Kaizoku Sentai Gokaiger (2011) 36. Tokumei Sentai Go-Busters (2012) 37. Zyuden Sentai Kyoryuger (2013) 38. Ressha Sentai ToQger (2014) 39. Shuriken Sentai Ninninger (2015) 40. Doubutsu Sentai Zyuohger (2016) 41. Uchu Sentai Kyuranger (2017) 42. Kaitou Sentai Lupinranger VS Keisatsu Sentai Patranger (2018) 43. Kishiryu Sentai Ryusoulger (2019)

**Reiwa Era (6):** 44. Mashin Sentai Kiramager (2020) 45. Kikai Sentai Zenkaiger (2021) 46. Avataro Sentai Donbrothers (2022) 47. Ohsama Sentai King-Ohger (2023) 48. Bakuge Sentai Boonboomger (2024) 49. No.1 Sentai Gozyuger (2025)

### Metal Heroes (17 shows)

**Showa Era (7):**

1. Space Sheriff Gavan (1982)
2. Space Sheriff Sharivan (1983)
3. Space Sheriff Shaider (1984)
4. Kyojuu Tokusou Juspion (1985)
5. Jikuu Senshi Spielban (1986)
6. Choujinki Metalder (1987)
7. Sekai Ninja Sen Jiraiya (1988)

**Heisei Era (10):** 8. Kidou Keiji Jiban (1989) 9. Tokkei Winspector (1990) 10. Tokkyuu Shirei Solbrain (1991) 11. Tokusou Exceedraft (1992) 12. Tokusou Robo Janperson (1993) 13. Blue SWAT (1994) 14. Juukou B-Fighter (1995) 15. B-Fighter Kabuto (1996) 16. B-Robo Kabutack (1997) 17. Tetsuwan Tantei Robotack (1998)

## Convex Deployments

**Dev Deployment:** mild-dragon-203.convex.cloud
**Production Deployment:** small-crow-60.convex.cloud

## Key Code Locations

- `src/routes/index.tsx` - Main tracker UI with filtering by franchise
- `src/lib/convex.ts` - Convex client configuration
- `convex/progress.ts` - Database mutations (setShows, toggleShow, getProgress)
- `convex/shows.ts` - Query for getting all shows
- `index.html` - Japanese font imports

## Commands

```bash
# Deploy Convex to production
npx convex deploy

# Run functions on production
npx convex run --deployment-name small-crow-60 'functionName' '{args}'

# View Convex dashboard
npx convex dashboard

# Build and deploy to Vercel
# (handled automatically by Vercel when pushing to main)
```

## Environment Variables

**Vercel:**

- `VITE_CONVEX_URL` = https://small-crow-60.convex.cloud (production)

## UI Preferences (from user feedback)

- Centered title
- Full franchise names: "Kamen Rider", "Super Sentai", "Metal Heroes"
- Japanese fonts: M PLUS 1p, Noto Sans JP
- Dark theme with green accents

## Common Issues & Fixes

1. **Each tab shows everything**: Wrong Convex URL being used. Ensure production URL is set in Vercel.
2. **Black screen on load**: Missing VITE_CONVEX_URL environment variable.
3. **TypeScript errors with Convex**: Use typed function references (api.progress.toggleShow) instead of strings.
4. **Filtering not working**: Franchise values in database must match tab values ("rider", "sentai", "metal").
