import { Component } from '@angular/core';
import { IProject } from '../../interfaces/iproject';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
})
export class WelcomeComponent {
  isFlipped = false;
  projects: IProject[] = [
    {
      img: '../../../assets/img/project1.png',
      title: 'Landing & Brand Robot',
      description:
        'Landing page responsive in Angular+SCSS con illustrazione robot del brand.',
      isFlipped: false,
    },
    {
      img: '../../../assets/img/project2.png',
      title: '',
      description: 'Descrizione progetto 2',
      isFlipped: false,
    },
    {
      img: '../../../assets/img/project3.png',
      title: 'Dashboard Analytics',
      description:
        'Grafici interattivi per vendite e KPI realizzati in Angular con Recharts.',
      isFlipped: false,
    },
  ];

  toggleFlip() {
    this.isFlipped = !this.isFlipped;
  }

  toggleCardFlip(project: IProject) {
    project.isFlipped = !project.isFlipped;
  }
}
