export interface NavItem {
  label: string;
  fragment: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Início', fragment: 'inicio' },
  { label: 'Áreas de Atuação', fragment: 'areas' },
  { label: 'O Escritório', fragment: 'escritorio' },
  { label: 'Missão e Valores', fragment: 'valores' },
  { label: 'Atuação Nacional', fragment: 'nacional' },
  { label: 'Contato', fragment: 'contato' },
];
