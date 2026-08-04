import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Credential {
  label: string;
  value: string;
}

@Component({
  selector: 'app-credibility-bar',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './credibility-bar.component.html',
  styleUrl: './credibility-bar.component.scss',
})
export class CredibilityBarComponent {
  readonly credentials: Credential[] = [
    { label: 'OAB/MG 180.423 • OAB/RN 23.251A', value: 'OAB' },
    { label: 'Atendimento', value: '24h Criminal' },
    { label: 'Atuação', value: 'Nacional' },
    { label: 'Consultas', value: 'Presencial & Online' },
  ];
}
