import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {

  @Input('avatar') avatar: string = "";
  @Input('text') text: string = "";
  
  constructor() { }

  ngOnInit(): void {
  }

}
