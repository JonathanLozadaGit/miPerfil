import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import IDIOMAS from 'src/assets/data/idiomas.json';
import {Idioma, Opcion} from 'src/app/_interface/idioma.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input('actual') actual : string = "";
  @Output('selected') selected : EventEmitter<string> = new EventEmitter<string>();

  idiomas : Idioma[] = [];
  options : Opcion[] = [];

  constructor() { }

  ngOnInit(): void {
    this.idiomas = IDIOMAS as any;
    this.options = this.idiomas.find(idioma => idioma.idioma === this.actual)?.opciones as any;
  }

  selectLanguage(language: string) {
    if (language !== this.actual ){
      this.selected.emit(language);
      this.actual = language;
      this.options = this.idiomas.find(idioma => idioma.idioma === this.actual)?.opciones as any;
    }
  }
}
