import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { OFFICE_CONFIG } from '../../../config/office.config';
import { RevealDirective } from '../../../shared/reveal.directive';

@Component({
  selector: 'app-about-office',
  standalone: true,
  imports: [CommonModule, RouterLink, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './about-office.component.html',
  styleUrl: './about-office.component.scss',
})
export class AboutOfficeComponent {
  readonly config = OFFICE_CONFIG;

  readonly highlights: string[] = [
    'Atendimento personalizado e dedicado a cada cliente',
    'Análise técnica minuciosa de cada caso',
    'Comunicação clara e transparente em todas as etapas',
    'Sigilo absoluto e discrição em todas as atuações',
  ];
}
