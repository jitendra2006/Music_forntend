import { Component, OnInit } from '@angular/core';
import { MusicService } from '../music.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users:any
  constructor(private service:MusicService) { }

  ngOnInit(): void {

    this.service.getData().subscribe(data=>{
      this.users = data
    })
  }

}
