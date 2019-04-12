import { Component, OnInit } from '@angular/core';
import { SongService } from '../song.service';
import { Song } from '../song';

@Component({
  selector: 'app-song-search',
  templateUrl: './song-search.component.html',
  styleUrls: ['./song-search.component.css']
})
export class SongSearchComponent implements OnInit {

  songResults :Song[];
  searchText:string;
  constructor(private songService : SongService) {


   }

  searchByTitle()
{
 this.songService.findSongsByTitle(this.searchText).subscribe((response)=>this.songResults = response);

}
  ngOnInit() {
  }

}
