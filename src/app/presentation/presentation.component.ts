import { Component, OnInit, Input } from '@angular/core';
import {Perfil} from 'src/app/_interface/perfil.interface';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {
  @Input('perfil') perfil: Perfil = {}
  icon:string = "";
  constructor() { }

  ngOnInit(): void {
    this.icon = this.perfil.imageProfile1 as string;
  }

  scroll(id: string) {
    let el = document.getElementById(id);
    el?.scrollIntoView({behavior: 'smooth'});
  }

}
