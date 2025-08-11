import { Component } from '@angular/core';
import { IProject } from '../../interfaces/iproject';
import { map, Observable } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
})
export class WelcomeComponent {
  isFlipped = false;
  isMobile$!: Observable<boolean>;
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

  constructor(private bp: BreakpointObserver) {
    this.isMobile$ = this.bp
      .observe('(max-width: 768px)')
      .pipe(map((r) => r.matches));
  }

  toggleFlip() {
    this.isFlipped = !this.isFlipped;
  }

  toggleCardFlip(project: IProject) {
    project.isFlipped = !project.isFlipped;
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
}
