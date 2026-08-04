import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { NAV_ITEMS } from '../../../config/nav.config';
import { OFFICE_CONFIG } from '../../../config/office.config';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  readonly navItems = NAV_ITEMS;
  readonly config = OFFICE_CONFIG;

  readonly scrolled = signal(false);
  readonly menuOpen = signal(false);

  constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => this.onScroll(), { passive: true });
    }
  }

  onScroll(): void {
    this.scrolled.set(window.scrollY > 40);
  }

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
