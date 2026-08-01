import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { PRACTICE_AREAS } from '../../../config/practice-areas.config';
import { PracticeIconComponent } from '../../../shared/practice-icon/practice-icon.component';
import { RevealDirective } from '../../../shared/reveal.directive';

@Component({
  selector: 'app-practice-areas',
  standalone: true,
  imports: [CommonModule, RouterLink, PracticeIconComponent, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './practice-areas.component.html',
  styleUrl: './practice-areas.component.scss',
})
export class PracticeAreasComponent {
  readonly areas = PRACTICE_AREAS;
}
