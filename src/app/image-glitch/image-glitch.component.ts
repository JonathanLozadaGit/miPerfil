import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-glitch',
  templateUrl: './image-glitch.component.html',
  styleUrls: ['./image-glitch.component.scss']
})
export class ImageGlitchComponent implements OnInit {

  @Input('icon') icon: string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
