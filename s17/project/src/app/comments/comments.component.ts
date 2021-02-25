import { Component, OnInit } from '@angular/core';
import { PlayService } from '../services/play.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  allComments:any[]
  constructor(private _play:PlayService) { }

  ngOnInit(): void {
    this.getComments()

  }
  getComments(){
    this._play. getAllComments().subscribe(res=>{
      this.allComments=res
    })
  }
}
