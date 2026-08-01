import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  ReactiveFormsModule,
  type FormGroup,
  Validators,
} from '@angular/forms';

import { OFFICE_CONFIG } from '../../../config/office.config';
import { PRACTICE_AREAS } from '../../../config/practice-areas.config';
import { BRAZILIAN_STATES } from '../../../config/states.config';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {
  private fb = inject(FormBuilder);

  readonly config = OFFICE_CONFIG;
  readonly areas = PRACTICE_AREAS.map((a) => a.title);
  readonly states = BRAZILIAN_STATES;

  readonly submitted = signal(false);

  readonly form: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    phone: ['', [Validators.required, Validators.minLength(10)]],
    email: ['', [Validators.required, Validators.email]],
    area: ['', [Validators.required]],
    city: ['', [Validators.required, Validators.minLength(2)]],
    state: ['', [Validators.required]],
    description: ['', [Validators.required, Validators.minLength(10)]],
    consent: [false, [Validators.requiredTrue]],
  });

  isInvalid(controlName: string): boolean {
    const c = this.form.get(controlName);
    return !!c && c.invalid && (c.touched || c.dirty);
  }

  isRequiredError(controlName: string): boolean {
    const c = this.form.get(controlName);
    return !!c && c.hasError('required') && (c.touched || c.dirty);
  }

  isEmailError(controlName: string): boolean {
    const c = this.form.get(controlName);
    return !!c && c.hasError('email') && !c.hasError('required') && (c.touched || c.dirty);
  }

  isMinLengthError(controlName: string): boolean {
    const c = this.form.get(controlName);
    return !!c && c.hasError('minlength') && !c.hasError('required') && (c.touched || c.dirty);
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const v = this.form.value;
    const message =
      `*Solicitação de Consulta*\n\n` +
      `*Nome:* ${v.name}\n` +
      `*Telefone:* ${v.phone}\n` +
      `*E-mail:* ${v.email}\n` +
      `*Área Jurídica:* ${v.area}\n` +
      `*Cidade/UF:* ${v.city}/${v.state}\n\n` +
      `*Descrição do Caso:*\n${v.description}`;

    const url = `https://wa.me/${this.config.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener');
    this.submitted.set(true);
  }

  resetForm(): void {
    this.form.reset();
    this.submitted.set(false);
  }
}
