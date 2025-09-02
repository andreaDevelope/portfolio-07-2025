import { Component } from '@angular/core';
import { FlipService } from '../../services/flip.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardActions } from '@angular/material/card';

@Component({
  selector: 'app-nav',
  standalone: true, // 👈 lo rende standalone
  imports: [MatButtonModule, MatCardActions],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
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
