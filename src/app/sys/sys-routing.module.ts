import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from "../../environments/environment";
import { SysHomeComponent } from "./sys-home/sys-home.component";

const routes: Routes = [
  {
    path: 'cesium',
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: SysHomeComponent },
      // { path: 'abc', loadChildren: () => import('./abc/abc.module').then(m => m.AbcModule) },
      { path: '**', redirectTo: 'exception/404' },
    ],
  },
];

@NgModule({
  // imports: [RouterModule.forChild(routes)],
  imports: [
    RouterModule.forRoot(routes, {
      // 使用hash
      useHash: environment.useHash,
      // 滚动条返回顶部
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule]
})
export class SysRoutingModule {

}
