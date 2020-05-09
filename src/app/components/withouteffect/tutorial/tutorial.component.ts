import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import { AppState } from 'src/app/app.state';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {

  constructor(private store : Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe((res) => {
      console.log(res.tutorial)  
    })
  }

}
