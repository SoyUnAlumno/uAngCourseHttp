import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  term: string = '';
  constructor() {}
@Output() submitted = new EventEmitter<string>();
  onInput(event: Event) {
    let target = event.target as HTMLInputElement;
    this.term = target.value;

  }


onFormSubmit(event: Event){
 event.preventDefault();
 this.submitted.emit(this.term);
}

  ngOnInit(): void {}
}
