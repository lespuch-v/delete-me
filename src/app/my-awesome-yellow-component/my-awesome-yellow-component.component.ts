import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-awesome-yellow-component',
  templateUrl: './my-awesome-yellow-component.component.html',
  styleUrls: ['./my-awesome-yellow-component.component.css']
})
export class MyAwesomeYellowComponentComponent implements OnInit {
  on = true;
  constructor() { }

  ngOnInit(): void {
  }

}
