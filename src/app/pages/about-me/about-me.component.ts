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

  timelineEvents = [
    {
      title: 'Full-Stack Developer & Team Lead',
      period: '02/2025 – 06/2025',
      description:
        'Start-up ArchiviaLab: sviluppo piattaforma SaaS per editoria digitale.',
      achievements: [
        'Coordinato 2 front-end dev e 1 web designer',
        'Realizzate API in Spring Boot e frontend Angular responsive',
      ],
      technologies: ['Angular', 'Spring Boot', 'Oracle', 'GitLab'],
      icon: 'code',
    },
    {
      title: 'Web Scraping Developer',
      period: '03/2025',
      description: 'Assicura Point Trade Srl – sviluppo crawler assicurativi.',
      achievements: [
        'Automatizzato raccolta dati polizze',
        'Integrazione con API interne',
      ],
      technologies: ['Java', 'Jsoup', 'Selenium', 'Postman'],
      icon: 'search',
    },
    {
      title: 'Back-End Developer (Tirocinio)',
      period: '04/2015 – 05/2018',
      description:
        'Enova Srl – sviluppo software gestionali e protocolli sicurezza.',
      achievements: [
        'Progettato moduli Java per gestione clienti',
        'Implementato protocolli standardizzati',
      ],
      technologies: ['Java', 'Spring', 'SQL'],
      icon: 'build',
    },
    {
      title: 'Formazione Full-Stack Developer',
      period: '07/2024 – 02/2025',
      description:
        'Epicode – corso intensivo di programmazione web full-stack.',
      achievements: [
        'Progetti Angular + Spring Boot',
        'Certificazione finale conseguita',
      ],
      technologies: ['Angular', 'Spring Boot', 'Docker', 'Git'],
      icon: 'school',
    },
    {
      title: 'Certificazione Sicurezza Lavoratori',
      period: '08/2024',
      description: 'Gi Group – Badge ID: 549194',
      achievements: ['Formazione sicurezza generale e specifica'],
      technologies: [],
      icon: 'verified',
    },
    {
      title: 'Lingue',
      period: 'Corrente',
      description: 'Competenze linguistiche',
      achievements: ['Italiano – Madrelingua', 'Inglese – Livello B2'],
      technologies: [],
      icon: 'language',
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
