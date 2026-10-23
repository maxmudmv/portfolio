# Elmurodov Mahmud Zarifjon oʻgʻli — 3D Data Analyst & Data Scientist Portfolio

Ushbu loyiha **Elmurodov Mahmud Zarifjon oʻgʻli** uchun maxsus ishlab chiqilgan, **3 ta tilda (`Oʻzbek`, `Ingliz`, `Rus`)** ishlovchi, interaktiv **3D Living Data Dashboard** sahnasiga ega zamonaviy shaxsiy portfolio veb-saytidir.

---

## 1. Texnologiyalar Steki (Tech Stack)

- **Framework:** Next.js 15 (App Router) + React 19
- **Dasturlash tili:** TypeScript (Strict Mode)
- **3D Grafika:** Three.js + React Three Fiber (`@react-three/fiber`) + `@react-three/drei`
- **Dizayn tizimi:** Tailwind CSS (Qora obsidian, oltin `#D4AF37` va kahrabo `#F59E0B` palitrasi)
- **Ikonkalar:** `lucide-react`
- **Xalqaro tillar (i18n):** `/uz` (asosiy til), `/en`, `/ru` marshrutlari

---

## 2. Loyihani Kompyuterda Ishga Tushirish (Installation & Development)

```bash
# 1. Paketlarni o'rnatish
npm install

# 2. Lokal development serverni ishga tushirish
npm run dev

# 3. TypeScript va Production Build tekshiruvi
npm run typecheck
npm run build
```

Brauzerda `http://localhost:3000` (avtomatik `/uz` ga yoʻnaltiriladi) manzilini oching.

---

## 3. Maʼlumotlarni Oson Tahrirlash (Editable Content Guide)

Barcha shaxsiy maʼlumotlar UI komponentlardan alohida ajratilgan boʻlib, `src/data/` papkasida joylashgan:

| Fayl manzili | Nimani oʻzgartirish mumkin? |
| :--- | :--- |
| `src/data/profile.ts` | Ism-sharif, telefon, email, Telegram (`@maxmudmv`), GitHub, LinkedIn, LeetCode va "Men haqimda" matnlari |
| `src/data/skills.ts` | Texnik koʻnikmalar (Power BI, SQL, MS Excel, Python, pandas, NumPy, Matplotlib, Seaborn) |
| `src/data/experience.ts` | Ish tajribasi (*Discover Invest*, *A. Avloniy nomidagi milliy institut* va yangi ish joylari) |
| `src/data/projects.ts` | Loyihalar va amaliy keyslar, diagramma koʻrsatkichlari hamda GitHub havolalar |
| `src/data/education.ts` | Oliy taʼlim (*TATU*), kurslar (*Najot Taʼlim*) va elektron sertifikatlar |
| `src/data/dictionaries.ts` | Saytning Oʻzbek (`uz`), Ingliz (`en`) va Rus (`ru`) tillaridagi barcha tugma va sarlavhalari |
| `public/images/mahmud.jpg` | Profil rasmi |
| `public/cv/Elmurodov_Mahmud_CV.pdf` | Yuklab olinadigan PDF rezyume fayli |

---

## 4. Aloqa Formasi va `.env` Sozlamalari

Loyiha ildizida `.env.example` fayli mavjud. Avtomatik email yuborishni yoqish uchun `.env.local` faylini yarating:

```env
NEXT_PUBLIC_SITE_URL=https://maxmudmv.vercel.app
RESEND_API_KEY=re_sizning_api_kalitingiz
CONTACT_RECEIVER_EMAIL=elmurodovmaxmud8@gmail.com
```

> **Shaffof ishlash tamoyili:** Agar `RESEND_API_KEY` hali kiritilmagan boʻlsa, forma yolgʻon "yuborildi" xabarini chiqarmaydi — foydalanuvchiga xabarni 1 ta tugma bilan toʻgʻridan-toʻgʻri Email (`mailto:`) yoki Telegram (`@maxmudmv`) orqali yuborish imkonini beradi.

---

## 5. GitHub va Vercel’ga Joylash (Deployment Guide)

### GitHub’ga yuklash:
```bash
git init
git add .
git commit -m "feat: complete 3D Data Analyst portfolio (UZ/EN/RU)"
git branch -M main
git remote add origin https://github.com/maxmudmv/portfolio.git
git push -u origin main
```

### Vercel’ga ulash:
1. [vercel.com](https://vercel.com) saytiga GitHub (`@maxmudmv`) profilingiz orqali kiring.
2. **"Add New..." → "Project"** tugmasini bosing va `portfolio` repozitoriysini tanlang.
3. Kerak boʻlsa **Environment Variables** boʻlimiga `NEXT_PUBLIC_SITE_URL` va `RESEND_API_KEY` qiymatlarini kiriting.
4. **"Deploy"** tugmasini bosing — 1–2 daqiqada sayt ommaviy URL manzilida ishga tushadi.
