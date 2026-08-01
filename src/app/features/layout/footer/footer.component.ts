import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { OFFICE_CONFIG } from '../../../config/office.config';
import { NAV_ITEMS } from '../../../config/nav.config';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  readonly config = OFFICE_CONFIG;
  readonly navItems = NAV_ITEMS;

  readonly year = new Date().getFullYear();
}
