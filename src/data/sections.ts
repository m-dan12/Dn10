export interface Section {
  title: string
  file: string
  route: string
}

export const sections: Section[] = [
  { title: 'Создание персонажа', file: 'rulebook.md', route: '/rulebook' },
  { title: 'Черты: Боевые', file: 'traits-combat.md', route: '/traits-combat' },
  { title: 'Черты: Магические', file: 'traits-magic.md', route: '/traits-magic' },
  { title: 'Черты: Социальные', file: 'traits-social.md', route: '/traits-social' },
  { title: 'Черты: Исследование', file: 'traits-explore.md', route: '/traits-explore' },
  { title: 'Черты: Оборонительные', file: 'traits-defense.md', route: '/traits-defense' },
  { title: 'Черты: Ремёсла', file: 'traits-craft.md', route: '/traits-craft' },
  { title: 'Достоинства', file: 'merits.md', route: '/merits' },
  { title: 'Недостатки', file: 'flaws.md', route: '/flaws' },
  { title: 'Факты биографии', file: 'biography.md', route: '/biography' },
  { title: 'Алхимия', file: 'alchemy.md', route: '/alchemy' },
  { title: 'Алхимия химическая', file: 'alchemy-chem.md', route: '/alchemy-chem' },
  { title: 'Артефакторика', file: 'artifacts.md', route: '/artifacts' },
  { title: 'Амплуа', file: 'roles.md', route: '/roles' },
]
