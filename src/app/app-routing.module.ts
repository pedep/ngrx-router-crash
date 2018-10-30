import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrontpageComponent } from './components/frontpage/frontpage.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: FrontpageComponent },

  { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
  { path: 'user', loadChildren: './user/user.module#UserModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
