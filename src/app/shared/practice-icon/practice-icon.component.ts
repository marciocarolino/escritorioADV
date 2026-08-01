import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-practice-icon',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @switch (name()) {
      @case ('family') {
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <circle cx="17" cy="14" r="5" />
          <circle cx="31" cy="14" r="5" />
          <path d="M8 40v-4a6 6 0 0 1 6-6h6a6 6 0 0 1 6 6v4" />
          <path d="M22 40v-4a6 6 0 0 1 6-6h6a6 6 0 0 1 6 6v4" transform="translate(-6)" />
        </svg>
      }
      @case ('inventory') {
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <rect x="8" y="6" width="32" height="36" rx="2" />
          <path d="M14 14h20M14 22h20M14 30h14" />
          <path d="M24 2v4" />
        </svg>
      }
      @case ('consumer') {
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M10 18h28l-2 22a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2l-2-22z" />
          <path d="M16 18v-6a8 8 0 0 1 16 0v6" />
          <circle cx="24" cy="29" r="2" fill="currentColor" />
        </svg>
      }
      @case ('property') {
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M6 22 24 8l18 14" />
          <path d="M10 20v20h28V20" />
          <rect x="20" y="28" width="8" height="12" />
        </svg>
      }
      @case ('labor') {
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <rect x="6" y="20" width="36" height="22" rx="2" />
          <path d="M14 20v-6a10 10 0 0 1 20 0v6" />
          <circle cx="24" cy="31" r="3" />
          <path d="M24 34v4" />
        </svg>
      }
      @case ('criminal') {
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M24 4 6 12v12c0 10 8 18 18 20 10-2 18-10 18-20V12L24 4z" />
          <path d="M18 24l4 4 8-10" />
        </svg>
      }
      @default {
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
          <circle cx="24" cy="24" r="20" />
        </svg>
      }
    }
  `,
  styles: [`
    :host {
      display: inline-block;
      width: 100%;
      height: 100%;
      color: var(--c-gold-300);
    }
    svg { width: 100%; height: 100%; }
  `],
})
export class PracticeIconComponent {
  name = input.required<string>();
}
