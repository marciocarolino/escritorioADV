import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { OFFICE_CONFIG } from '../../../config/office.config';
import { RevealDirective } from '../../../shared/reveal.directive';

@Component({
  selector: 'app-national-service',
  standalone: true,
  imports: [CommonModule, RouterLink, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './national-service.component.html',
  styleUrl: './national-service.component.scss',
})
export class NationalServiceComponent {
  readonly config = OFFICE_CONFIG;
}
