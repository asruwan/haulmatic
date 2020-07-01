import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dashboard-directive-child',
  templateUrl: './dashboard-directive-child.component.html',
  styleUrls: ['./dashboard-directive-child.component.scss']
})
export class DashboardDirectiveChildComponent implements OnInit, OnChanges {

  @Input() word: String;
  @Output()
  response: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  typingWord: string = "sdfjkl";

  ngOnInit(): void {
  }
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    this.typingWord = changes.word.currentValue;
  }
  clearValue() {
    this.response.emit({ 'isClear': true });
  }

}
