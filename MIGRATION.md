# Content Migration Checklist

Goal: every piece of content Iaden has published online gets a permanent markdown
copy in `src/content/writing/`, tagged with its `source` and `sourceUrl`.
Anti-rule: **nothing gets deleted from any platform until the archive is live and
verified.**

## Exports Iaden must request (authenticated — ARK can't do these)

- [ ] **Instagram personal** (`iaden.gaines`): Accounts Center → Your information
      and permissions → Download your information → JSON. Drop the zip in `_imports/`.
- [ ] **Instagram VersionEx** (`versionexauto`): same flow from the brand account.
- [ ] **Facebook VersionEx Auto page**: Meta Business Suite → Download page information.
- [ ] **YouTube**: Google Takeout → select YouTube (videos + metadata/descriptions).
      Confirm which channel is his (search found youtube.com/c/VersionexOrg — "The VX Motion").
- [ ] **Reddit** (HOK listings on r/Watchexchange): Settings → Request data (GDPR export).
      Handle wasn't in local files — note it here: `u/________`
- [ ] **GitHub** (`IadenG`): already in git; nothing to export.

## Ingest (ARK does this once exports land in `_imports/`)

- [ ] Parse each export → one markdown file per post with `title`, `date`,
      `source`, `sourceUrl`, original text as body; media into `public/media/<source>/`.
- [ ] YouTube videos: post per video with description as body + embedded player
      (videos stay hosted on YouTube; archive the originals to local disk/backup drive).
- [ ] Review pass with Iaden: mark keep / skip per item (some IG captions won't be worth keeping).

## Launch

- [ ] Register **iadengaines.com** (ratified 2026-07-06) — Cloudflare Registrar, at-cost.
- [ ] Create GitHub repo `IadenG/iadengaines.com`, push.
- [ ] Cloudflare Pages: connect repo, build command `bunx astro build`, output `dist`.
- [ ] Attach domain, verify HTTPS.
- [ ] Verify live with Interceptor screenshot.
- [ ] Update all platform bios to point at iadengaines.com.
