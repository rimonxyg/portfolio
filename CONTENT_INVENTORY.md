# Content Inventory & Truthfulness Audit

This document tracks all claims, credentials, projects, and roles across the portfolio. In accordance with the project's **Truthfulness Rules**, only items with `verified: true` will ever be rendered on the live website.

---

## Claims & Verification Table

| Claim / Item | Data File | Status | Verified? | Notes / Needed from Owner |
|---|---|---|---|---|
| Identity & AIUB CSE Student | `src/data/profile.js` | Confirmed | Yes (`true`) | Aktaruzzaman Rimon at AIUB |
| Public Email (`hire.rimon@gmail.com`) | `src/data/links.js` | Confirmed | Yes (`true`) | Owner confirmed in M0 |
| LinkedIn (`hirerimon`) | `src/data/links.js` | Confirmed | Yes (`true`) | Public profile |
| GitHub (`rimonxyg`) | `src/data/links.js` | Confirmed | Yes (`true`) | Public profile |
| Facebook (`roninxyg`) | `src/data/links.js` | Confirmed | Yes (`true`) | Approved by owner in M0 |
| Instagram (`xyg.rimon`) | `src/data/links.js` | Confirmed | Yes (`true`) | Approved by owner in M0 |
| SOHUB Internship Title | `src/data/experience.js` | Confirmed | Yes (`true`) | Software and Cybersecurity Intern |
| SOHUB Responsibilities / Tech | `src/data/experience.js` | Pending | No (`false`) | Responsibilities left blank until owner supplies details |
| CyberSecBD Platform | `src/data/projects.js` | Concept / In progress | Yes (`true`) | Explicitly labeled as "Concept / In progress" |
| Screen Tab Locker Extension | `src/data/projects.js` | In progress | Yes (`true`) | Labeled as "In progress", no fake store links |
| Personal Security Labs | `src/data/projects.js` | Practice / Lab | Yes (`true`) | Sanitized lab overview (Kali, VMs) |
| CCNA Coursework | `src/data/credentials.js` | Coursework completed | No (`false`) | Labeled strictly as coursework, hidden until verified |
| Cisco Networking Badge | `src/data/credentials.js` | Needs Badge URL | No (`false`) | Hidden until owner supplies badge name/link |
| CEH Training / Certification | `src/data/credentials.js` | Status unverified | No (`false`) | Hidden until owner confirms wording & status |
| AIUB Cisco Competition Finalist | `src/data/credentials.js` | Title unverified | No (`false`) | Hidden until owner supplies exact competition name & year |

---

## Verification Policy

- Any item with `verified: false` will **not** be rendered in production UI.
- Run `npm run check:content` to view all unverified claims.
