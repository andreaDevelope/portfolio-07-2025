import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  downloadCV() {
    const link = document.createElement('a');
    link.href = 'assets/files/Andrea_Ceccarelli_CV.pdf';
    link.download = 'Andrea_Ceccarelli_CV.pdf';
    link.click();
  }
}
