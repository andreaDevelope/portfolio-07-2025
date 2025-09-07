import { Component } from '@angular/core';
import { FlipService } from '../../services/flip.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  isFlipped: boolean = false;
  constructor(private flipService: FlipService) {}

  ngOnInit() {
    this.flipService.flipped$.subscribe((data) => (this.isFlipped = data));
  }

  flipTogle() {
    this.flipService.toggle();
  }
}
