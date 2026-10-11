/**
 * The Atlas: Capabilities & Topology Map Data
 * Represents disciplines, tools, and projects with real relationships.
 * Levels: "foundation" (learning/conceptual) | "practicing" (active lab/project experience) | "demonstrated" (production/competition proven)
 */

export const capabilityGroups = [
  { id: 'all', label: 'All Clusters' },
  { id: 'security', label: 'Security' },
  { id: 'networking', label: 'Networking' },
  { id: 'software', label: 'Software' },
  { id: 'labs', label: 'Isolated Labs' },
  { id: 'projects', label: 'Projects' },
]

export const capabilityNodes = [
  // --- NETWORKING ---
  {
    id: 'tcp-ip',
    label: 'TCP/IP & OSI',
    group: 'networking',
    level: 'practicing',
    blurb: 'Deep understanding of protocol headers, 3-way handshakes, socket connections, and layer encapsulation.',
    layerTag: 'L3 / L4',
    relatedProjectIds: ['personal-security-labs'],
    x: 180,
    y: 120,
  },
  {
    id: 'subnetting',
    label: 'Subnetting & Addressing',
    group: 'networking',
    level: 'practicing',
    blurb: 'IPv4 VLSM, CIDR prefix calculation, subnet allocation, and broadcast boundary design.',
    layerTag: 'L3 · IP',
    relatedProjectIds: ['personal-security-labs'],
    x: 110,
    y: 220,
  },
  {
    id: 'routing-switching',
    label: 'Routing & Switching',
    group: 'networking',
    level: 'foundation',
    blurb: 'VLAN configuration, trunking, inter-VLAN routing, and static/dynamic routing concepts (Cisco curriculum).',
    layerTag: 'L2 / L3',
    relatedProjectIds: ['personal-security-labs'],
    x: 230,
    y: 270,
  },
  {
    id: 'network-security',
    label: 'Network Security',
    group: 'networking',
    level: 'practicing',
    blurb: 'Firewall rules, stateful inspection, packet filtering, and defense-in-depth network segmentation.',
    layerTag: 'Perimeter',
    relatedProjectIds: ['personal-security-labs'],
    x: 350,
    y: 200,
  },
  {
    id: 'pbx-comms',
    label: 'PBX & Cloud Comms',
    group: 'networking',
    level: 'foundation',
    blurb: 'Enterprise voice architectures, SIP signaling fundamentals, and interest in cloud communications infrastructure.',
    layerTag: 'Voice / SIP',
    relatedProjectIds: [],
    x: 270,
    y: 70,
  },

  // --- SECURITY ---
  {
    id: 'webapp-sec',
    label: 'Web App Security',
    group: 'security',
    level: 'practicing',
    blurb: 'OWASP Top 10 vulnerabilities: SQLi, XSS, CSRF, insecure direct object references, and authentication bypasses.',
    layerTag: 'L7 · App',
    relatedProjectIds: ['cybersecbd', 'personal-security-labs'],
    x: 520,
    y: 110,
  },
  {
    id: 'pentest-fund',
    label: 'Pentest Fundamentals',
    group: 'security',
    level: 'practicing',
    blurb: 'Reconnaissance, port enumeration, vulnerability mapping, and systematic exploitation methodology.',
    layerTag: 'Assessment',
    relatedProjectIds: ['personal-security-labs'],
    x: 480,
    y: 240,
  },
  {
    id: 'ad-privesc',
    label: 'Active Directory & PrivEsc',
    group: 'security',
    level: 'foundation',
    blurb: 'Windows privilege escalation techniques, Kerberos basics, group policy vulnerabilities, and domain enumeration.',
    layerTag: 'Identity',
    relatedProjectIds: ['personal-security-labs'],
    x: 430,
    y: 350,
  },
  {
    id: 'malware-removal',
    label: 'Malware Identification',
    group: 'security',
    level: 'practicing',
    blurb: 'Website backdoor identification, webshell removal, static script inspection, and web integrity restoration.',
    layerTag: 'Remediation',
    relatedProjectIds: [],
    x: 620,
    y: 190,
  },
  {
    id: 'ctf-forensics',
    label: 'CTF & Forensics',
    group: 'security',
    level: 'practicing',
    blurb: 'Capture The Flag competitions covering packet analysis (pcap), steganography, and web security puzzles.',
    layerTag: 'Analysis',
    relatedProjectIds: ['personal-security-labs'],
    x: 610,
    y: 310,
  },

  // --- LABS ---
  {
    id: 'kali-linux',
    label: 'Kali Linux',
    group: 'labs',
    level: 'practicing',
    blurb: 'Primary penetration testing distribution: terminal mastery, bash automation, and security tooling suites.',
    layerTag: 'OS Tooling',
    relatedProjectIds: ['personal-security-labs'],
    x: 690,
    y: 240,
  },
  {
    id: 'virtual-targets',
    label: 'Isolated VM Labs',
    group: 'labs',
    level: 'practicing',
    blurb: 'VirtualBox & VMware hypervisors running vulnerable Linux/Windows VMs on host-only non-routable segments.',
    layerTag: 'Hypervisor',
    relatedProjectIds: ['personal-security-labs'],
    x: 570,
    y: 410,
  },

  // --- SOFTWARE ---
  {
    id: 'react-dev',
    label: 'React & Modern Web',
    group: 'software',
    level: 'practicing',
    blurb: 'Building modular component-driven applications, state management, custom hooks, and clean UI architecture.',
    layerTag: 'Frontend',
    relatedProjectIds: ['screen-tab-locker', 'cybersecbd'],
    x: 820,
    y: 140,
  },
  {
    id: 'languages-core',
    label: 'C++ / C# / Java',
    group: 'software',
    level: 'practicing',
    blurb: 'Core programming foundations from AIUB CSE coursework: OOP, data structures, desktop UI, and algorithms.',
    layerTag: 'Core Langs',
    relatedProjectIds: [],
    x: 770,
    y: 280,
  },
  {
    id: 'automation-scripts',
    label: 'Security Automation',
    group: 'software',
    level: 'foundation',
    blurb: 'Scripting repetitive reconnaissance, port verification, and log parsing workflows.',
    layerTag: 'Scripts',
    relatedProjectIds: ['screen-tab-locker'],
    x: 720,
    y: 370,
  },

  // --- PROJECTS ---
  {
    id: 'proj-cybersecbd',
    label: 'CyberSecBD',
    group: 'projects',
    level: 'foundation',
    blurb: 'Educational platform concept bridging structured networking fundamentals with hands-on security challenges.',
    layerTag: 'Concept',
    relatedProjectIds: ['cybersecbd'],
    x: 370,
    y: 120,
  },
  {
    id: 'proj-tablocker',
    label: 'Screen Tab Locker',
    group: 'projects',
    level: 'practicing',
    blurb: 'Browser extension enforcing focused browsing sessions through tab and window access restriction.',
    layerTag: 'In Progress',
    relatedProjectIds: ['screen-tab-locker'],
    x: 880,
    y: 250,
  },
]

export const capabilityEdges = [
  // Networking internal
  { from: 'tcp-ip', to: 'subnetting', note: 'L3 Addressing' },
  { from: 'tcp-ip', to: 'network-security', note: 'Packet Inspection' },
  { from: 'subnetting', to: 'routing-switching', note: 'VLAN Segmentation' },
  { from: 'tcp-ip', to: 'pbx-comms', note: 'SIP Signaling' },

  // Networking to Security
  { from: 'network-security', to: 'pentest-fund', note: 'Perimeter Defense' },
  { from: 'network-security', to: 'ad-privesc', note: 'Domain Traffic' },
  { from: 'tcp-ip', to: 'ctf-forensics', note: 'PCAP Analysis' },

  // Security internal
  { from: 'pentest-fund', to: 'webapp-sec', note: 'L7 Assessment' },
  { from: 'pentest-fund', to: 'ad-privesc', note: 'Privilege Escalation' },
  { from: 'webapp-sec', to: 'malware-removal', note: 'Webshell Cleanup' },
  { from: 'pentest-fund', to: 'ctf-forensics', note: 'Exploit Analysis' },

  // Labs connections
  { from: 'pentest-fund', to: 'kali-linux', note: 'Assessment Toolkit' },
  { from: 'kali-linux', to: 'virtual-targets', note: 'Target Host' },
  { from: 'ad-privesc', to: 'virtual-targets', note: 'AD Lab Host' },

  // Software & Automation
  { from: 'languages-core', to: 'react-dev', note: 'Software Engineering' },
  { from: 'languages-core', to: 'automation-scripts', note: 'Script Logic' },
  { from: 'automation-scripts', to: 'kali-linux', note: 'Tooling Scripts' },

  // Projects linkages
  { from: 'proj-cybersecbd', to: 'webapp-sec', note: 'Security Curriculum' },
  { from: 'proj-cybersecbd', to: 'network-security', note: 'Network Fundamentals' },
  { from: 'proj-tablocker', to: 'react-dev', note: 'UI & Extension Logic' },
  { from: 'proj-tablocker', to: 'automation-scripts', note: 'Browser Event Control' },
]
