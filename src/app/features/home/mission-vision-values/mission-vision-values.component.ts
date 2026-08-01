import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../../shared/reveal.directive';

interface Pillar {
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-mission-vision-values',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './mission-vision-values.component.html',
  styleUrl: './mission-vision-values.component.scss',
})
export class MissionVisionValuesComponent {
  readonly pillars: Pillar[] = [
    {
      title: 'Missão',
      description:
        'Prestar serviços jurídicos de excelência, com técnica, ética e dedicação, garantindo a cada cliente uma defesa qualificada e estratégica.',
      icon: 'mission',
    },
    {
      title: 'Visão',
      description:
        'Ser referência em advocacia consultiva e contenciosa, reconhecido pelo compromisso com resultados e pela qualidade no atendimento.',
      icon: 'vision',
    },
    {
      title: 'Valores',
      description:
        'Ética, transparência, sigilo, respeito ao cliente e busca constante por conhecimento. Cada caso conduzido com responsabilidade e seriedade.',
      icon: 'values',
    },
  ];
}
