import { Component } from '@angular/core';
import { FlipService } from '../../services/flip.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  isMenuOpen: boolean = false;
  isFlipped: boolean = false;
  isMatrix = false;
  currentRoute: string = '';

  constructor(private flipService: FlipService, private router: Router) {}

  ngOnInit() {
    this.flipService.flipped$.subscribe((data) => (this.isFlipped = data));
    this.flipService.isMatrix$.subscribe((data) => (this.isMatrix = data));
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.currentRoute = e.urlAfterRedirects;
      }
    });
  }

  flipTogle() {
    this.flipService.toggle();
  }

  matrixToggle() {
    this.flipService.matrixToggle();
  }

  closeHamburgerMenu() {
    this.isMenuOpen = false;
  }
}
