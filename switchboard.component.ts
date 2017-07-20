import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switchboard',
  templateUrl: './switchboard.component.html',
  styleUrls: ['./switchboard.component.css']
})
export class SwitchboardComponent implements OnInit {
  switches = [true, false, true, false, true, false, true, false, true, false]

  toggle(i){
    this.switches[i] = !this.switches[i];
    console.log("toggled!");
  }

  constructor() { }
  ngOnInit() {}

}
