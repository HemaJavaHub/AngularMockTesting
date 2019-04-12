import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Song } from './song';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private http: HttpClient) { }

  findSongsByTitle(title: string): Observable<Song[]> {
    return this.http.get<Song[]>('/songs/title/' + title).pipe(
      map(response=> response),
      catchError(this.handleError<any>())
    )
  }

  private handleError<T>(result?:T){
    return(error:any):Observable<T>=>{
      console.log('An error occured with SongService ' + error)
      return null;
    }
  }
}
