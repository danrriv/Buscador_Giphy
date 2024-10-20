import { Component, OnInit, ViewChild } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { ContentComponent } from "../content/content.component";
import { HistoryService } from '../../core/services/history.service';
import { LanguageService } from '../../core/services/language.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FooterComponent, ContentComponent,TranslateModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {

  //Declaramos como componente hijo, para llamar al método de búsqueda
  @ViewChild('contentComponent') contentComponent!: ContentComponent;

  //Para ocultar el dropdown
  isDropdownVisible: boolean = false;

  //Para ocultar el sidenav
  isSidenavVisible:boolean = false;

  //Historial de búsqueda
  searchHistory:string[] = [];

  constructor(private historyService:HistoryService,
    private languageService:LanguageService
  ) { }

  ngOnInit(): void {
    this.historyService.currentData.subscribe(data =>{
      this.searchHistory = data
    })
  }

  //Buscar desde el historial
  research(gif:string){
    this.contentComponent.searchGif(gif);
  }

  clearHistory(){
    this.historyService.clearHistory();
  }

  //Cambiar idioma
  changeLanguage(language: string) {
    this.languageService.changeLanguage(language);
  }

  toggleDropdown(): void {
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  toggleSidenav(): void {
    this.isSidenavVisible = !this.isSidenavVisible;
  }

}
