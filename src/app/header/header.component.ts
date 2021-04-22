import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input('actual') actual : string = "";
  @Output('selected') selected : EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  selectLanguage(language: string) {
    if (language !== this.actual ){
      this.selected.emit(language)
    }
  }
}
