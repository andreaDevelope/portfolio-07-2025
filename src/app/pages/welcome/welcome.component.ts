import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
})
export class WelcomeComponent {
  isFlipped = false;

  toggleFlip() {
    this.isFlipped = !this.isFlipped;
  }
}
