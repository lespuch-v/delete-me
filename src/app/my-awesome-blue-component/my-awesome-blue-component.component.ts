import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-awesome-blue-component',
  templateUrl: './my-awesome-blue-component.component.html',
  styleUrls: ['./my-awesome-blue-component.component.css']
})
export class MyAwesomeBlueComponentComponent implements OnInit {
  on = true;

  constructor() { }

  ngOnInit(): void {
  }

}
