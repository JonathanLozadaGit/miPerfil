import { Component, Input, OnInit } from '@angular/core';
import { AboutMe } from '../_interface/perfil.interface';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  @Input('aboutMe') aboutMe: AboutMe = {}


  icon:string = "";

  constructor() { }

  ngOnInit(): void {
    this.icon = this.aboutMe.icon as string;
  }

}
