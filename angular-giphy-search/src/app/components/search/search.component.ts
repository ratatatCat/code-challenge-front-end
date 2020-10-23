import { Component, OnInit } from '@angular/core';
import { GiphyService } from '../../services/giphy.service';

import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchForm = new FormGroup({
    searchResult: new FormControl()
}); 

  constructor(private giphyService: GiphyService) { }

  ngOnInit() { }

  performSearch(searchTerm: any): void {
    this.giphyService.getImages(searchTerm.searchResult);
  }
}
