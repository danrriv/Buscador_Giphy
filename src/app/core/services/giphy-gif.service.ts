import { Injectable } from '@angular/core';
import { Enviroment } from '../enviroments/enviroment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Datum, GifResponse } from '../model/gif';

@Injectable({
  providedIn: 'root'
})
export class GiphyGifService {

  baseUrl = Enviroment.url_gif
  searchResponse: Datum[] = [];

  constructor(private httpClient:HttpClient) { }


  //Búsqueda limitada a 50 resultados
  searchGif(query: string): Observable<GifResponse> {
    const params = new HttpParams()
      .set('q', query)   // Parámetro de búsqueda
      .set('limit', 50); // Limitar el número de resultados a 50
    return this.httpClient.get<GifResponse>(`${this.baseUrl}/search`, { params });
  }
}