import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // ⬅ per routerLink

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar'; // ⬅ per <mat-toolbar>
import { MatChipsModule } from '@angular/material/chips'; // ⬅ per <mat-chip-set>/<mat-chip>
import { LayoutModule } from '@angular/cdk/layout';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NavComponent } from '../../nav-component/nav/nav.component';

@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    CommonModule,
    RouterModule, // ⬅ necessario se usi routerLink nel template
    WelcomeRoutingModule,
    LayoutModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatChipsModule,
    MatDividerModule,
    MatTooltipModule,
    NavComponent,
  ],
})
export class WelcomeModule {}
