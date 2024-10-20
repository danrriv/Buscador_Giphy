import { Component } from '@angular/core';
import { GiphyGifService } from '../../core/services/giphy-gif.service';
import { Datum } from '../../core/model/gif';
import { FormsModule } from '@angular/forms';
import { HistoryService } from '../../core/services/history.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [FormsModule, TranslateModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

  searchInput = '';
  searchNull = false; // Variable para verificar si la búsqueda devolvió un resultado o no

  // Resultados de la búsqueda
  searchResponse: Datum[] = [];

  constructor(
    private gifService: GiphyGifService,
    private historyService: HistoryService) { }

  searchGif(search: string) {
    this.gifService.searchGif(search).subscribe({
      next: response => {
        this.searchResponse = response.data;
        this.searchNull = !this.searchResponse.length;
        if (!this.searchNull) { //Agregar al historial solo búsquedas con resultados
          this.historyService.addHistory(search);
        }
      }
    });
  }
}
