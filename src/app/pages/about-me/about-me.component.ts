import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';

interface TimelineEvent {
  id: number;
  title: string;
  period: string;
  description: string;
  icon: string;
  type: 'education' | 'work' | 'project';
  achievements?: string[];
  technologies?: string[];
}

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent implements OnInit, AfterViewInit {
  @ViewChild('timelineContainer', { static: false })
  timelineContainer!: ElementRef;

  timelineEvents: TimelineEvent[] = [
    {
      id: 1,
      title: 'Corso Full-Stack Developer',
      period: '2024',
      description:
        'Formazione intensiva in programmazione full-stack con focus su Angular, Spring Boot e metodologie agili.',
      icon: 'school',
      type: 'education',
      achievements: [
        'Progetti hands-on con tecnologie enterprise',
        'Metodologie Agile e Scrum',
        'Collaborazione in team di sviluppo',
      ],
      technologies: ['Angular', 'Spring Boot', 'TypeScript', 'Java', 'SQL'],
    },
    {
      id: 2,
      title: 'Autoformazione e Progetti Personali',
      period: '2024 - Presente',
      description:
        'Sviluppo continuo di competenze attraverso progetti personali e studio autonomo delle ultime tecnologie.',
      icon: 'code',
      type: 'project',
      achievements: [
        'Portfolio responsive con Angular',
        'Progetti full-stack completi',
        'Integrazione API e database',
      ],
      technologies: ['Angular', 'Spring Boot', 'Docker', 'Git', 'REST APIs'],
    },
    {
      id: 3,
      title: 'Team Developer - ArchiviaLab',
      period: '2024 - Presente',
      description:
        "Sviluppo software per startup innovativa, contribuendo alla creazione di soluzioni digitali per l'archiviazione e gestione documentale.",
      icon: 'work',
      type: 'work',
      achievements: [
        'Sviluppo frontend con Angular',
        'Integrazione backend Spring Boot',
        'Collaborazione in team agile',
        'Gestione database e API',
      ],
      technologies: ['Angular', 'Spring Boot', 'PostgreSQL', 'Docker', 'Git'],
    },
  ];

  ngOnInit(): void {
    // Inizializzazione component
  }

  ngAfterViewInit(): void {
    this.animateTimeline();
  }

  private animateTimeline(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (this.timelineContainer) {
      const timelineItems =
        this.timelineContainer.nativeElement.querySelectorAll('.timeline-item');
      timelineItems.forEach((item: Element) => observer.observe(item));
    }
  }

  getEventIconClass(event: TimelineEvent): string {
    const baseClass = 'timeline-icon';
    switch (event.type) {
      case 'education':
        return `${baseClass} education`;
      case 'work':
        return `${baseClass} work`;
      case 'project':
        return `${baseClass} project`;
      default:
        return baseClass;
    }
  }
}
