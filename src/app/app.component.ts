import { Component } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";


import {Knowledges, Perfil} from 'src/app/_interface/perfil.interface';
import PERFIL_ES from 'src/assets/data/perfil.json';
import PERFIL_EN from 'src/assets/data/perfil_en.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mi Perfil';

  perfil: Perfil = {};
  knowledges: Knowledges = {};
  idioma: string = "es";

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ){
    this.matIconRegistry.addSvgIcon(
      "linkedin-icon",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/linkedin-icon.svg")
    ),
    this.matIconRegistry.addSvgIcon(
      "github-icon",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/github-icon.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "sp-language",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/spain.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "uk-language",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/united-kingdom.svg")
    );
  }

  ngOnInit(): void {
    this.perfil= PERFIL_ES as any;
    this.knowledges = this.perfil.knowledges as any;
    //console.log(this.perfil.knowledges);
  }

  updateLanguage(event:string) {

    if(event == 'es'){
      this.perfil = PERFIL_ES as any;
    }else if(event == "en"){
      this.perfil = PERFIL_EN as any;
    }
    this.idioma = event;
    this.knowledges = this.perfil.knowledges as any;
  }
}
