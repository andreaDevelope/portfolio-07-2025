import { FlipService } from './../../services/flip.service';
import { Component } from '@angular/core';
import { IProject } from '../../interfaces/iproject';
import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
})
export class WelcomeComponent implements AfterViewInit {
  patterns = Array.from({ length: 5 });
  columns: any[] = [];
  colWidth: number = 25;
  maxWidth: number = 5000;
  count: number = Math.floor(this.maxWidth / this.colWidth);
  isFlipped = false;
  isMatrix = false;
  isLoading = false;

  private readonly MIN_LOADING_DURATION = 300;
  private readonly MAX_LOADING_DURATION = 3000;
  @ViewChild('hardSkillTitle', { static: true }) hardSkillTitle!: ElementRef;
  @ViewChild('softSkillTitle', { static: true }) softSkillTitle!: ElementRef;
  @ViewChild('container', { static: true }) container!: ElementRef;
  currentIndex = 0;
  projects: IProject[] = [
    {
      img: '../../../assets/img/project1.png',
      title: 'Landing & Brand Robot',
      description:
        'Creo landing page veloci e responsive, con brand identity coerente e micro-animazioni leggere per guidare l’utente.',
      techs: [
        'Angular',
        'SCSS (BEM, variables)',
        'Flex/Grid responsive',
        'CSS animations & transitions',
        'A11y basics',
      ],
      isFlipped: false,
    },
    {
      img: '../../../assets/img/project2.png',
      title: 'Piani di abbonamento (Pricing UI)',
      description:
        'Progetto schermate di pricing chiare: gerarchia visiva, CTA evidenti e copy sintetico per massimizzare la conversione.',
      techs: [
        'Angular',
        'CSS Grid / Flex',
        'Angular Material (Cards/Buttons)',
        'Responsive design',
        'Focus states & contrast',
      ],
      isFlipped: false,
    },
    {
      img: '../../../assets/img/project3.png',
      title: 'Dashboard Analytics',
      description:
        'Mostro KPI a colpo d’occhio: grafici interattivi e trend mensili con caricamento rapido e UI reattiva.',
      techs: [
        'Angular',
        'Recharts (o Chart.js)',
        'REST API / JSON',
        'RxJS (streams & async data)',
        'Lazy loading',
      ],
      isFlipped: false,
    },
    {
      img: 'assets/img/project5.png',
      title: 'Registrazione con verifica email',
      description:
        'Flusso sicuro con link di conferma, accesso sbloccato solo dopo la verifica. UX chiara e redirect automatico.',
      techs: [
        'Angular (Reactive Forms, Router)',
        'Spring Boot',
        'Email token',
        'JWT/Cookie',
        'Redirect per ruolo',
      ],
      isFlipped: false,
    },
    {
      img: 'assets/img/project6.png',
      title: 'Notifiche in tempo reale',
      description:
        'Aggiornamenti istantanei e badge live: l’utente vede subito cosa succede, senza ricaricare.',
      techs: [
        'Spring WebSocket/STOMP',
        'Angular',
        'RxJS',
        'Reconnection & UX state',
      ],
      isFlipped: false,
    },
    {
      img: 'assets/img/project8.png',
      title: 'Abbonamento con PayPal',
      description:
        'Pagamento fluido e attivazione immediata dell’abbonamento, con scadenza automatica e feedback chiari.',
      techs: [
        'PayPal JS SDK (createOrder/capture)',
        'Angular Material/Dialogs',
        'Spring Boot (OAuth2)',
        'RestTemplate',
        'JWT refresh & redirect',
      ],
      isFlipped: false,
    },
  ];

  skills = {
    languages: [
      {
        name: 'TypeScript',
        level: 95,
        icon: 'devicon-typescript-plain colored',
      },
      { name: 'Java', level: 95, icon: 'devicon-java-plain colored' },
      { name: 'SQL', level: 85, icon: 'devicon-mysql-plain colored' },
      { name: 'Python', icon: 'devicon-python-plain', level: 75 },
      { name: 'PHP', icon: 'devicon-php-plain', level: 70 },
    ],

    frameworks: [
      { name: 'Angular', level: 95, icon: 'devicon-angular-plain colored' },
      { name: 'Spring', level: 95, icon: 'devicon-spring-plain colored' },
      { name: 'React', icon: 'devicon-react-original', level: 80 },
      { name: 'Vue.js', icon: 'devicon-vuejs-plain', level: 85 },
      { name: 'Django', icon: 'devicon-django-plain', level: 70 },
    ],

    libraries: [
      { name: 'RxJS', icon: 'devicon-react-original', level: 90 },
      { name: 'Angular Material', icon: 'devicon-angular-plain', level: 92 },
      { name: 'Chart.js', icon: 'devicon-javascript-plain', level: 88 },
      { name: 'MapStruct', icon: 'fa-solid fa-diagram-project', level: 95 },
      { name: 'Lombok', icon: 'fa-solid fa-leaf', level: 92 },
    ],

    tools: [
      { name: 'Git', level: 99, icon: 'devicon-git-plain colored' },
      { name: 'Docker', level: 95, icon: 'devicon-docker-plain colored' },
      { name: 'Postman', level: 95, icon: 'devicon-postman-plain colored' },
      {
        name: 'IntelliJ IDEA',
        level: 90,
        icon: 'devicon-intellij-plain colored',
      },
      {
        name: 'VS Code / Cursor',
        level: 90,
        icon: 'devicon-vscode-plain colored',
      },
      { name: 'Maven', level: 88, icon: 'devicon-apache-plain colored' },
      { name: 'Jira', level: 80, icon: 'devicon-jira-plain colored' },
    ],

    soft: [
      { name: 'Problem Solving', level: 95, icon: 'fa-solid fa-puzzle-piece' },
      { name: 'Teamwork', level: 100, icon: 'fa-solid fa-users' },
      { name: 'Communication', level: 95, icon: 'fa-solid fa-comments' },
      { name: 'Resilience', level: 100, icon: 'fa-solid fa-bolt' },
      { name: 'Time Management', level: 95, icon: 'fa-solid fa-clock' },
      { name: 'Adaptability', level: 95, icon: 'fa-solid fa-shuffle' },
      { name: 'Creativity', level: 95, icon: 'fa-solid fa-lightbulb' },
      {
        name: 'Attention to Detail',
        level: 95,
        icon: 'fa-solid fa-magnifying-glass',
      },
    ],
  };

  constructor(private flipService: FlipService) {}

  ngOnInit() {
    this.initializeComponent();
  }

  ngAfterViewInit() {
    const height = this.container.nativeElement.scrollHeight;
    this.container.nativeElement.style.minHeight = `${height}px`;

    const options = {
      root: null,
      threshold: 0,
      rootMargin: `0px 0px -50% 0px`,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const el = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          el.classList.remove('animate-title');
          setTimeout(() => {
            el.classList.add('animate-title');
          }, 10);
        }
      });
    }, options);

    observer.observe(this.hardSkillTitle.nativeElement);
    observer.observe(this.softSkillTitle.nativeElement);
  }

  private async initializeComponent() {
    this.isLoading = true;
    const startTime = Date.now();

    try {
      const timeoutPromise = new Promise<void>((_, reject) => {
        setTimeout(
          () => reject(new Error('Loading timeout')),
          this.MAX_LOADING_DURATION
        );
      });

      // Carica i dati reali in parallelo con timeout
      await Promise.race([
        Promise.all([
          this.loadImages(),
          this.initializeServices(),
          this.setupAnimations(),
        ]),
        timeoutPromise,
      ]);

      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(
        0,
        this.MIN_LOADING_DURATION - elapsedTime
      );

      if (remainingTime > 0) {
        await new Promise((resolve) => setTimeout(resolve, remainingTime));
      }
    } catch (error) {
      console.warn('Loading timeout o errore durante il caricamento:', error);
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(
        0,
        this.MIN_LOADING_DURATION - elapsedTime
      );

      if (remainingTime > 0) {
        await new Promise((resolve) => setTimeout(resolve, remainingTime));
      }
    } finally {
      this.isLoading = false;
    }
  }

  private async loadImages(): Promise<void> {
    const imagePromises = this.projects.map((project) => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => resolve();
        img.src = project.img;
      });
    });

    const profileImgPromise = new Promise<void>((resolve) => {
      const img = new Image();
      img.onload = () => resolve();
      img.onerror = () => resolve();
      img.src = '../../../assets/img/ceccarelli-092025-nobg.png';
    });

    await Promise.all([...imagePromises, profileImgPromise]);
  }

  private async initializeServices(): Promise<void> {
    this.flipService.flipped$.subscribe((data) => (this.isFlipped = data));
    this.flipService.isMatrix$.subscribe((data) => (this.isMatrix = data));
  }

  private async setupAnimations(): Promise<void> {
    this.columns = Array.from({ length: this.count }, (_, i) => ({
      left: i * this.colWidth,
      delay: -(Math.random() * 4).toFixed(1) + 's',
      duration: (2 + Math.random() * 2).toFixed(1) + 's',
    }));
  }

  // carosello
  private slideWidth(vp: HTMLElement): number {
    return vp.clientWidth;
  }

  next(vp: HTMLElement) {
    vp.scrollBy({ left: this.slideWidth(vp), behavior: 'smooth' });
  }

  prev(vp: HTMLElement) {
    vp.scrollBy({ left: -this.slideWidth(vp), behavior: 'smooth' });
  }

  goTo(i: number, vp: HTMLElement) {
    vp.scrollTo({ left: i * this.slideWidth(vp), behavior: 'smooth' });
    this.currentIndex = i;
  }

  onScroll(vp: HTMLElement) {
    this.currentIndex = Math.round(vp.scrollLeft / this.slideWidth(vp));
  }

  matrixToggle(): void {
    this.flipService.matrixToggle();
  }

  flipTogle() {
    this.flipService.toggle();
  }
}
