import { Component, HostListener, OnInit } from '@angular/core';
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

  giphyImages: any[];
  searchTerm: string;
  searchPos: number = 0;

  constructor(private giphyService: GiphyService) { }

  ngOnInit() { }

  /**
   * Retrieve Giphy Images based on searchTerm.
   * @param searchTerm - Search input
   */
  performSearch(searchTerm: any): void {
    this.giphyImages = [];
    this.searchTerm = searchTerm.searchResult;
    this.searchPos = 0;

    this.getImages();
  }

  /**
   * Retrieve more images when scroll to the bottom.
   */
  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    let max = document.documentElement.scrollHeight;

    if(pos > max - 5 )   {
      if(this.giphyImages.length > 0) {
        this.getImages();
      }
    }
  }

  getImages() {
    this.giphyService.getImages(this.searchTerm, this.searchPos).subscribe((res: any) => {
      console.log(res);
      console.log(this.searchPos);
      if(this.giphyImages.length > 0) {
        res.data.forEach(image => {
          this.searchPos += res.data.length;
          console.log(this.searchPos);
          this.giphyImages.push(image);
        });;
      } else {
        this.giphyImages = res.data;
      }
    });;
  }
}
