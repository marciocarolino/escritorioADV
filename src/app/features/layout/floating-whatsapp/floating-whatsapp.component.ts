import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OFFICE_CONFIG } from '../../../config/office.config';

@Component({
  selector: 'app-floating-whatsapp',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './floating-whatsapp.component.html',
  styleUrl: './floating-whatsapp.component.scss',
})
export class FloatingWhatsappComponent {
  readonly config = OFFICE_CONFIG;
  readonly visible = signal(false);

  constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => this.onScroll(), { passive: true });
    }
  }

  onScroll(): void {
    this.visible.set(window.scrollY > 300);
  }
}
