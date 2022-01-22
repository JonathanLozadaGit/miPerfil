import { Component, Input, OnInit } from '@angular/core';
import { Item2 } from '../_interface/perfil.interface';

@Component({
  selector: 'app-image-item',
  templateUrl: './image-item.component.html',
  styleUrls: ['./image-item.component.scss']
})
export class ImageItemComponent implements OnInit {

  @Input('item') item: Item2 = {};
  constructor() { }

  ngOnInit(): void {
  }

}
