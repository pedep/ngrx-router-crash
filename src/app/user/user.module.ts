import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { TemplateComponent } from './template/template.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  declarations: [SignInComponent, TemplateComponent]
})
export class UserModule { }
