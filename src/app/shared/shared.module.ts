import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    NgZorroAntdModule
  ],
  providers: [],
  bootstrap: [],
  exports: [
    CommonModule,
    FormsModule,
    NgZorroAntdModule
  ]
})
export class SharedModule {
}
