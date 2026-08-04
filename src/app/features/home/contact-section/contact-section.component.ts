import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OFFICE_CONFIG } from '../../../config/office.config';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { RevealDirective } from '../../../shared/reveal.directive';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule, ContactFormComponent, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss',
})
export class ContactSectionComponent {
  readonly config = OFFICE_CONFIG;
}
