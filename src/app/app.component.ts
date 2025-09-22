import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { LoadingService } from './services/loading.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'portfolio-07-2025';
  isGlobalLoading = false;

  constructor(private router: Router, private loadingService: LoadingService) {}

  ngOnInit() {
    // Gestisce il loading globale durante le transizioni tra pagine
    this.router.events
      .pipe(
        filter(
          (event) =>
            event instanceof NavigationStart || event instanceof NavigationEnd
        )
      )
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
          this.isGlobalLoading = true;
        } else if (event instanceof NavigationEnd) {
          // Piccolo delay per mostrare il loading
          setTimeout(() => {
            this.isGlobalLoading = false;
          }, 300);
        }
      });
  }
}
