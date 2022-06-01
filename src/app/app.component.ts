import { Component } from '@angular/core';
import { Pages } from './interfaces/Pages';
import { WikipediaService } from './wikipedia.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pages: Pages[] = [] ;
  constructor(private wikipedia: WikipediaService) {}
  onTerm(term: string) {
    /* const results = this.wikipedia.search(term);
    console.log(results); */
    this.wikipedia.search(term).subscribe((pages) => {
      console.log(pages);
      this.pages = pages;
    });
  }
}
