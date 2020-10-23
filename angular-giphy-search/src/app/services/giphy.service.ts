import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class GiphyService {

  apiUrl: string = 'https://api.giphy.com/v1/gifs/search';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  params = new HttpParams().set('api_key','4s8JFJyLgoLSgBXiEczjymJ6sGNNYSdW').set('rating','pg');

  constructor(private http: HttpClient) { }

  getImages(searchTerm: string) {
    let params = this.params.set('q', searchTerm);

    return this.http.get(`${this.apiUrl}`, {params: params}).subscribe((res: Response) => {
      console.log(res);
    });
  }
}