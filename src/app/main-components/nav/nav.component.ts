import { Component } from '@angular/core';
import { FlipService } from '../../services/flip.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  showCards = false;
  isFlipped: boolean = false;
  isMatrix = false;
  isMobileMenuOpen: boolean = false;

  constructor(private flipService: FlipService) {}

  ngOnInit() {
    this.flipService.flipped$.subscribe((data) => (this.isFlipped = data));
    this.flipService.isMatrix$.subscribe((data) => (this.isMatrix = data));
  }

  flipTogle() {
    this.flipService.toggle();
  }

  matrixToggle() {
    this.flipService.matrixToggle();
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  onMainBackClick() {
    this.showCards = !this.showCards;
  }
}
