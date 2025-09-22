import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  private loadingCount = 0;

  constructor() {}

  /**
   * Observable per monitorare lo stato di caricamento
   */
  get isLoading$(): Observable<boolean> {
    return this.loadingSubject.asObservable();
  }

  /**
   * Mostra il loading
   */
  show(): void {
    this.loadingCount++;
    if (this.loadingCount === 1) {
      this.loadingSubject.next(true);
    }
  }

  /**
   * Nasconde il loading
   */
  hide(): void {
    this.loadingCount = Math.max(0, this.loadingCount - 1);
    if (this.loadingCount === 0) {
      this.loadingSubject.next(false);
    }
  }

  /**
   * Forza la chiusura del loading (reset completo)
   */
  forceHide(): void {
    this.loadingCount = 0;
    this.loadingSubject.next(false);
  }

  /**
   * Esegue un'operazione asincrona con loading automatico
   */
  async withLoading<T>(operation: () => Promise<T>): Promise<T> {
    this.show();
    try {
      const result = await operation();
      return result;
    } finally {
      this.hide();
    }
  }
}
