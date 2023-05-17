import { NgModule } from '@angular/core';
import { SysHomeComponent } from "./sys-home/sys-home.component";
import { SysRoutingModule } from "./sys-routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    SysHomeComponent
  ],
  imports: [
    SysRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: []
})
export class SysModule {
}
