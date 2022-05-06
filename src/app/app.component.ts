import { Component } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";


import {Knowledges, AboutMe, Perfil} from 'src/app/_interface/perfil.interface';
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
  idioma: string = "";
  sections: string [] = [];
  aboutMe: AboutMe = {};

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
    this.perfil= PERFIL_ES as Perfil;
    this.aboutMe = this.perfil.aboutMe as AboutMe;
    this.knowledges = this.perfil.knowledges as Knowledges;
    this.idioma = this.perfil.code as string;
    this.sections = this.perfil.sections as string [];
    //console.log(this.perfil.knowledges);
  }

  updateLanguage(event:string) {

    if(event == 'es'){
      this.perfil = PERFIL_ES as Perfil;
    }else if(event == "gb"){
      this.perfil = PERFIL_EN as Perfil;
    }
    this.idioma = event;
    this.aboutMe = this.perfil.aboutMe as AboutMe;
    this.knowledges = this.perfil.knowledges as Knowledges;
    this.sections = this.perfil.sections as string [];
  }
}
