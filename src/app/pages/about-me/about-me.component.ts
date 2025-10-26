import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { FlipService } from '../../services/flip.service';

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
  orderDesc: boolean = true;

  timelineEvents = [
    {
      title: 'Full-Stack Developer & Team Lead',
      period: '02/2025 – 06/2025',
      description:
        'Start-up tech – sviluppo di una piattaforma SaaS per la gestione documentale e l’editoria digitale.',
      achievements: [
        'Coordinamento di 2 front-end developer e 1 web designer',
        'Realizzazione front-end in Angular e back-end in Spring Boot',
        'Integrazione con database PostgreSQL e ambienti Docker',
        'Gestione repository privati e versionamento con GitLab',
      ],
      technologies: [
        'Angular',
        'Spring Boot',
        'PostgreSQL',
        'Docker',
        'GitLab',
      ],
      icon: 'code',
      type: 'work',
    },
    {
      title: 'Web Scraping Developer',
      period: '03/2025',
      description:
        'Assicura Point Trade Srl – sviluppo di sistemi di crawling assicurativi.',
      achievements: [
        'Automatizzazione raccolta dati da portali assicurativi',
        'Generazione automatica di preventivi integrati',
        'Utilizzo di librerie di parsing e automazione browser',
      ],
      technologies: ['Python', 'Jsoup', 'Selenium', 'Postman'],
      icon: 'search',
      type: 'project',
    },
    {
      title: 'Java Developer',
      period: '04/2015 – 05/2018',
      description:
        'Enova Srl – sviluppo software gestionali e protocolli di sicurezza.',
      achievements: [
        'Sviluppo moduli Java e gestione dati con JPA/Hibernate',
        'Creazione query SQL e modelli relazionali',
        'Implementazione di protocolli standardizzati per i clienti ministeriali',
      ],
      technologies: ['Java', 'Spring', 'Hibernate', 'SQL', 'Oracle'],
      icon: 'build',
      type: 'work',
    },
    {
      title: 'Corso Full-Stack Developer',
      period: '07/2024 – 02/2025',
      description:
        'Epicode Education – corso intensivo di programmazione front-end e back-end.',
      achievements: [
        'Progetti integrati Angular ↔ Spring Boot',
        'Approfondimento su architetture REST, Docker e Git',
        'Certificazione Full-Stack Developer conseguita',
      ],
      technologies: ['Angular', 'Spring Boot', 'Docker', 'Git'],
      icon: 'school',
      type: 'education',
    },
    {
      title: 'AI & Prompt Design',
      period: '10/2024',
      description:
        'Epicode Education – corso avanzato su intelligenza artificiale e prompt engineering.',
      achievements: [
        'Applicazione dell’AI nello sviluppo software',
        'Ottimizzazione di processi di coding e automazione testuali',
      ],
      technologies: ['AI', 'Prompt Design', 'Python'],
      icon: 'brain',
      type: 'education',
    },
    {
      title: 'Certificazione Sicurezza Lavoratori',
      period: '08/2024',
      description: 'Gi Group – Badge ID: 549194',
      achievements: ['Formazione sicurezza generale e specifica (4h)'],
      technologies: [],
      icon: 'verified',
      type: 'education',
    },
    {
      title: 'Diploma Odontotecnico',
      period: '2012',
      description: 'Istituto Tecnico IIS Carlo Urbani – Roma',
      achievements: ['Diploma quinquennale tecnico professionale'],
      technologies: [],
      icon: 'award',
      type: 'education',
    },
    {
      title: 'Lingue',
      period: '',
      description: 'Competenze linguistiche',
      achievements: ['Italiano – Madrelingua', 'Inglese – Livello B2'],
      technologies: [],
      icon: 'language',
      type: 'education',
    },
  ];

  isTimelineVisible = false;

  constructor(private flipService: FlipService) {}

  ngOnInit(): void {
    this.sortTimeline();
    this.flipService.isTimelineVisible$.subscribe((value) => {
      this.isTimelineVisible = value;
    });
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

  toggleTimeline() {
    this.flipService.toggleTimeline();
  }

  sortTimeline(): void {
    const parseDate = (period: string): number => {
      if (period.toLowerCase().includes('corrente')) return Infinity;

      const match = period.match(/(\d{2})?\/?(\d{4})/g);
      if (!match || match.length === 0) return 0;

      const lastDate = match.pop();
      if (!lastDate) return 0;

      const [month, year] = lastDate.split('/').map(Number);
      return new Date(year, isNaN(month) ? 0 : month - 1).getTime();
    };

    const direction = this.orderDesc ? -1 : 1;
    this.timelineEvents.sort(
      (a, b) => direction * (parseDate(a.period) - parseDate(b.period))
    );
    console.log(this.timelineEvents);
    console.log(this.orderDesc);
  }
}
