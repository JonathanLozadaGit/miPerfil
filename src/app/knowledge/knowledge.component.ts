import { Component, OnInit, Input } from '@angular/core';
import { Knowledges } from '../_interface/perfil.interface';

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.scss']
})
export class KnowledgeComponent implements OnInit {

  @Input('knowledges') knowledges: Knowledges = {}
  constructor() { }

  ngOnInit(): void {
  }

}
