import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private translate: TranslateService) {
  }

  // Método para cambiar el idioma
  changeLanguage(language: string) {
    this.translate.use(language);
  }

}
