import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { LayoutModule } from '@angular/cdk/layout';
import { MatDividerModule } from '@angular/material/divider';
import { LoadingSpinnerModule } from '../../shared/loading-spinner/loading-spinner.module';

@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    CommonModule,
    RouterModule,
    WelcomeRoutingModule,
    LayoutModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatChipsModule,
    MatDividerModule,
    LoadingSpinnerModule,
  ],
})
export class WelcomeModule {}
