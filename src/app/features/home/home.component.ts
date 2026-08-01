import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroComponent } from './hero/hero.component';
import { CredibilityBarComponent } from './credibility-bar/credibility-bar.component';
import { PracticeAreasComponent } from './practice-areas/practice-areas.component';
import { AboutOfficeComponent } from './about-office/about-office.component';
import { MissionVisionValuesComponent } from './mission-vision-values/mission-vision-values.component';
import { NationalServiceComponent } from './national-service/national-service.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    CredibilityBarComponent,
    PracticeAreasComponent,
    AboutOfficeComponent,
    MissionVisionValuesComponent,
    NationalServiceComponent,
    ContactSectionComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main id="main">
      <app-hero />
      <app-credibility-bar />
      <app-practice-areas />
      <app-about-office />
      <app-mission-vision-values />
      <app-national-service />
      <app-contact-section />
    </main>
  `,
  styles: [`
    :host { display: block; }
  `],
})
export class HomeComponent {}
