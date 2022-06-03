import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck } from 'rxjs/operators';
import { WikipediaResponse } from './interfaces/WikipediaResponse';

@Injectable({
  providedIn: 'root',
})
export class WikipediaService {
  constructor(private http: HttpClient) {}

  search(term: string) {
    // Uses Typescript with RxJS. Uses generic type WikipediaResponse so search method knows which type is being returned from the observable
    return this.http.get<WikipediaResponse>('https://en.wikipedia.org/w/api.php', {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: term,
        origin: '*',
      },
    }).pipe(
      pluck('query', 'search')
    );
  }
}
