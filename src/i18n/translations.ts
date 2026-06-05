// English-only site. Kept as a thin lookup table so existing call sites
// (`t('nav.home')`) continue to work without sprinkling raw strings across pages.

export const ui = {
  // nav
  'nav.home':  'Home',
  'nav.about': 'About',
  // home
  'home.heroHeadline':  'HCI Researcher\n& Builder.',
  'home.heroSub':       'Designing AI agents, conversational interfaces, and tools for creative design exploration.',
  'home.tagline':       'PhD Student · KAIST Industrial Design',
  // project detail (메타 라벨)
  'projects.year':    'Year',
  'projects.role':    'Role',
  'projects.collab':  'Collaborators',
  'projects.venue':   'Venue',
  'projects.award':   'Award',
  // about
  'about.heading': 'About',
  'about.cv':      'Download CV',
  'about.contact': 'Contact',
  'about.email':   'Email',
  // project detail (페이지 UI)
  'project.backToAll': '← All projects',
  'project.links':     'Links',
  'project.paper':     'Paper',
  'project.github':    'GitHub',
  'project.demo':      'Live demo',
  'project.abstract':  'Abstract',
  'project.next':      'Next',
  'project.prev':      'Previous',
  // misc
  'aria.skipToMain':  'Skip to main content',
  'meta.defaultDesc': 'Jiwon Lee — HCI researcher at KAIST.',
} as const;

export type UIKey = keyof typeof ui;
