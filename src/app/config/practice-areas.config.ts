export interface PracticeArea {
  title: string;
  description: string;
  icon: string;
  badge?: string;
}

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    title: 'Direito de Família',
    description:
      'Atuação em divórcios, guarda de filhos, pensão alimentícia, união estável e dissolução de vínculos, com sensibilidade e estratégia.',
    icon: 'family',
  },
  {
    title: 'Inventário Judicial e Extrajudicial',
    description:
      'Orientação completa em processos de inventário e partilha, judicial ou extrajudicial, garantindo celeridade e segurança jurídica.',
    icon: 'inventory',
  },
  {
    title: 'Direito do Consumidor',
    description:
      'Defesa dos direitos do consumidor frente a abusos de fornecedores, cobranças indevidas e práticas comerciais ilícitas.',
    icon: 'consumer',
  },
  {
    title: 'Direito Imobiliário',
    description:
      'Consultoria e contencioso em contratos imobiliários, regularização de imóveis, despejo, usucapião e disputas possessórias.',
    icon: 'property',
  },
  {
    title: 'Direito Trabalhista',
    description:
      'Patrocínio de reclamações trabalhistas, verbas rescisórias, assédio moral e acordos, tanto para empregados quanto empregadores.',
    icon: 'labor',
  },
  {
    title: 'Direito Criminal',
    description:
      'Defesa técnica em processos criminais com atendimento 24 horas, atuando desde o flagrante até a fase de execução.',
    icon: 'criminal',
    badge: '24 horas',
  },
];
