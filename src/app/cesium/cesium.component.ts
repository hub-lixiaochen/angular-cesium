import { Component, OnInit } from '@angular/core';

declare var Cesium: any;

@Component({
  selector: 'app-cesium',
  templateUrl: './cesium.component.html',
  styleUrls: ['./cesium.component.less']
})
export class CesiumComponent implements OnInit {

  Viewer: any;

  constructor() {
  }

  ngOnInit(): void {
    this.Viewer = new Cesium.Viewer('cesiumContainer');
  }

}
