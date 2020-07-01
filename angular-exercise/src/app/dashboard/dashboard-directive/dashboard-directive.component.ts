import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-directive',
  templateUrl: './dashboard-directive.component.html',
  styleUrls: ['./dashboard-directive.component.scss']
})
export class DashboardDirectiveComponent implements OnInit {

  constructor() { }

  typingWord: string;

  ngOnInit(): void {
  }
  clearSearch(event) {
    if (event.isClear)
      this.typingWord = null;
  }

}
