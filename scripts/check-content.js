/**
 * Content Verification Audit Script
 * Run with: npm run check:content
 * Scans all data files and outputs verified vs unverified items.
 */

import { profile } from '../src/data/profile.js'
import { links } from '../src/data/links.js'
import { experiences } from '../src/data/experience.js'
import { projects } from '../src/data/projects.js'
import { credentials } from '../src/data/credentials.js'
import { articles } from '../src/data/writing.js'

console.log('\n========================================')
console.log('  PORTFOLIO CONTENT VERIFICATION AUDIT')
console.log('========================================\n')

let unverifiedCount = 0
let verifiedCount = 0

function auditItem(category, name, isVerified, notes = '') {
  if (isVerified) {
    verifiedCount++
    console.log(`  [VERIFIED]   ${category.padEnd(14)} : ${name}`)
  } else {
    unverifiedCount++
    console.log(`  [UNVERIFIED] ${category.padEnd(14)} : ${name} -> ${notes}`)
  }
}

// 1. Profile
auditItem('Profile', profile.name, profile.verified)

// 2. Links
links.forEach((l) => auditItem('Link', `${l.label} (${l.handle})`, l.verified))

// 3. Experience
experiences.forEach((e) => {
  auditItem('Experience', `${e.role} @ ${e.org}`, e.verified)
  if (e.responsibilities.length === 0) {
    console.log(`  [INFO]       Experience     : Responsibilities are empty (pending owner input)`)
  }
})

// 4. Projects
projects.forEach((p) => {
  auditItem('Project', `${p.title} [${p.statusLabel}]`, p.verified)
})

// 5. Credentials
credentials.forEach((c) => {
  auditItem('Credential', c.title, c.verified, c.statusNote || 'Pending verification')
})

// 6. Articles
if (articles.length === 0) {
  console.log(`  [INFO]       Articles       : None published (section hidden in UI)`)
}

console.log('\n----------------------------------------')
console.log(`Summary: ${verifiedCount} verified claims, ${unverifiedCount} unverified (hidden in UI)`)
console.log('========================================\n')
