import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './features/layout/header/header.component';
import { FooterComponent } from './features/layout/footer/footer.component';
import { FloatingWhatsappComponent } from './features/layout/floating-whatsapp/floating-whatsapp.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, FloatingWhatsappComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a href="#main" class="skip-link">Pular para o conteúdo</a>
    <app-header />
    <router-outlet />
    <app-footer />
    <app-floating-whatsapp />
  `,
  styles: [`
    :host { display: block; }
    .skip-link {
      position: absolute;
      top: -40px;
      left: 0;
      background: var(--c-gold-400);
      color: var(--c-primary-900);
      padding: 8px 16px;
      font-size: 0.85rem;
      font-weight: 600;
      z-index: 200;
      border-radius: 0 0 4px 0;
      transition: top 0.2s ease;
    }
    .skip-link:focus { top: 0; }
  `],
})
export class AppComponent {}
