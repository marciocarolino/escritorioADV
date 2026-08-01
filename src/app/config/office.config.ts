export interface OfficeConfig {
  lawyerName: string;
  oabNumber: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  instagram: string;
  instagramUrl: string;
  officeName: string;
  tagline: string;
}

export const OFFICE_CONFIG: OfficeConfig = {
  officeName: 'Advocacia Prestígio',
  lawyerName: 'Dr. João Carlos Mendes',
  oabNumber: 'OAB/SP 123.456',
  phone: '+55 (11) 4000-0000',
  whatsapp: '5511999999999',
  email: 'contato@advocaciaprestigio.com.br',
  address: 'Av. Paulista, 1000 — 10º andar, São Paulo — SP',
  instagram: '@advocaciaprestigio',
  instagramUrl: 'https://instagram.com/advocaciaprestigio',
  tagline: 'Assessoria Jurídica Estratégica',
};
