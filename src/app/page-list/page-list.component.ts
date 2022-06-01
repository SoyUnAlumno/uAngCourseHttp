import { Component, Input, OnInit } from '@angular/core';
import { Pages } from '../interfaces/Pages';
@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css'],
})
export class PageListComponent implements OnInit {
  @Input() pages: Pages[] = [];
  // XSS attack example
  xss = '<img src="" onerror="alert(123)" />';
  constructor() {}

  ngOnInit(): void {}
}
