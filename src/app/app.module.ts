import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NavComponent } from './main-components/nav/nav.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { LoadingSpinnerModule } from './shared/loading-spinner/loading-spinner.module';
import { FooterComponent } from './main-components/footer/footer.component';
import { FlipService } from './services/flip.service';

@NgModule({
  declarations: [AppComponent, NavComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    FormsModule,
    LoadingSpinnerModule,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
