import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../_interface/perfil.interface';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {

  @Input('item') item: Item = {};
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
