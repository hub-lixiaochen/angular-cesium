import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sys-home',
  templateUrl: './sys-home.component.html',
  styleUrls: ['./sys-home.component.less']
})
export class SysHomeComponent implements OnInit {

  visible = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

}
