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
      description: 'Descrizione progetto 1',
      isFlipped: false,
    },
    {
      img: '../../../assets/img/project2.png',
      description: 'Descrizione progetto 2',
      isFlipped: false,
    },
    {
      img: '../../../assets/img/project3.png',
      description: 'Descrizione progetto 3',
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
