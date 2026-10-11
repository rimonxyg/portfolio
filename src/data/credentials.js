/**
 * Credentials, Certifications & Achievements
 * Truthfulness Rule: Only verified: true items will EVER render in the UI.
 * Pending items remain verified: false until official details/links are supplied by the owner.
 */
export const credentials = [
  {
    id: 'ccna-coursework',
    title: 'Cisco CCNA Coursework Modules',
    issuer: 'Cisco Networking Academy',
    type: 'Coursework',
    date: 'Completed',
    verified: false, // Owner completed learning modules, not official CCNA exam yet
    statusNote: 'Learning modules completed; exam pending verification',
    url: null,
  },
  {
    id: 'cisco-badge',
    title: 'Cisco Networking Digital Badge',
    issuer: 'Cisco / Credly',
    type: 'Badge',
    date: null,
    verified: false, // Awaiting exact badge name & verify link
    statusNote: 'Awaiting badge verification link from owner',
    url: null,
  },
  {
    id: 'ceh-training',
    title: 'Certified Ethical Hacker (CEH) Training',
    issuer: 'EC-Council',
    type: 'Certification Training',
    date: null,
    verified: false, // Awaiting verification from owner
    statusNote: 'Awaiting status & credential ID confirmation',
    url: null,
  },
  {
    id: 'cisco-aiub-comp',
    title: 'Cisco Networking Competition Finalist',
    issuer: 'AIUB / Cisco Academy',
    type: 'Competition',
    date: null,
    verified: false, // Awaiting official competition title, year
    statusNote: 'Awaiting exact competition year and official title from owner',
    url: null,
  },
]
