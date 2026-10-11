/**
 * Projects Data
 * Each project is accurately labeled by development status.
 * Never invent metrics, testimonials, or production deployment claims.
 */
export const projects = [
  {
    id: 'cybersecbd',
    title: 'CyberSecBD',
    status: 'concept', // Never claim "launched"
    statusLabel: 'Concept / In progress',
    summary:
      'Cybersecurity training platform concept featuring modular courses, hands-on security labs, quizzes, and CTF-style skill tracking.',
    problem:
      'Bangladeshi students and aspiring cybersecurity enthusiasts often lack localized, accessible learning paths combining networking fundamentals with practical security labs.',
    objective:
      'Design an interactive learning platform architecture incorporating structured curriculum, interactive quizzes, and practical challenges.',
    approach:
      'Architecting a modular educational platform structure focusing on progressive difficulty, real-world scenario challenges, and gamified progress tracking.',
    tools: ['Web Architecture', 'Educational Design', 'Security Lab Design', 'CTF Challenges'],
    contribution:
      'Platform concept, security curriculum architecture, and laboratory challenge outline.',
    outcome: null, // Left null per Truthfulness rules
    links: [
      {
        label: 'Website Concept',
        url: 'https://www.cybersecbd.com',
      },
    ],
    verified: true,
  },
  {
    id: 'screen-tab-locker',
    title: 'Screen Tab Locker',
    status: 'in-progress',
    statusLabel: 'In Progress',
    summary:
      'A browser extension designed for controlled browsing and tab locking during focused learning and examination sessions.',
    problem:
      'Distraction and unauthorized browser navigation during online study, lab practice, or testing environments.',
    objective:
      'Provide browser-level tab management and window restriction to maintain focused learning sessions.',
    approach:
      'Utilizing WebExtensions APIs to detect tab state transitions, monitor focus events, and enforce user-defined restrictions during study intervals.',
    tools: ['JavaScript', 'WebExtensions API', 'Browser Security'],
    contribution: 'Core extension architecture and tab state management logic.',
    outcome: null,
    links: [], // No fake store link
    verified: true,
  },
  {
    id: 'personal-security-labs',
    title: 'Personal Security & Network Labs',
    status: 'learning',
    statusLabel: 'Practice & Labs',
    summary:
      'Isolated virtual laboratory environments for hands-on practice in penetration testing, network packet analysis, and system privilege escalation.',
    problem:
      'Theoretical cybersecurity study requires repeatable, non-destructive practice on realistic environments.',
    objective:
      'Build isolated virtualization environments to practice ethical vulnerability identification, packet tracing, and network segmentation.',
    approach:
      'Deploying isolated virtual machines (Kali Linux, vulnerable Linux/Windows instances) within controlled host-only subnets for penetration testing exercises.',
    tools: ['Kali Linux', 'Wireshark', 'VirtualBox', 'Nmap', 'TCP/IP', 'Active Directory (Labs)'],
    contribution: 'Lab network configuration, subnetting, VM provisioning, and sanitized exercise documentation.',
    outcome: null,
    links: [],
    verified: true,
  },
]
