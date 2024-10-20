import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  // Historial de búsqueda
  private dataSource = new BehaviorSubject<string[]>(this.getHistoryFromLocalStorage());
  currentData = this.dataSource.asObservable();

  constructor() { }

  private getHistoryFromLocalStorage(): string[] {
    const data = localStorage.getItem('history');
    return data ? JSON.parse(data) : [];
  }

  addHistory(data: string) {
    const currentData = this.dataSource.value;
    if (!currentData.includes(data.trim())) { // Para evitar búsquedas duplicadas
      const updatedData = [...currentData, data];
      this.dataSource.next(updatedData);
      localStorage.setItem('history', JSON.stringify(updatedData)); // Sincronizar con localStorage

      // Limita el historial a 15 resultados
      if (updatedData.length > 15) {
        updatedData.shift(); 
      }
    }
  }

  clearHistory(){
    this.dataSource.next([]);
    localStorage.removeItem('history');
  }
}
