import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CesiumComponent } from "./cesium/cesium.component";
import { SharedModule } from "./shared/shared.module";
import { RouterModule } from "@angular/router";
import { SysModule } from "./sys/sys.module";

@NgModule({
  declarations: [
    AppComponent,
    CesiumComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule,
    SysModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
