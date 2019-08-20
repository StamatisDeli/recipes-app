import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // a simle string would be enough!
  @Output() clickEmitter = new EventEmitter<{ link: string }>();

  constructor() {}

  ngOnInit() {}

  onClickNav($event) {
    this.clickEmitter.emit({ link: $event.target.innerHTML });
  }
}
