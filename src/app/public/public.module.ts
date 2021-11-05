import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PublicComponent } from './public.component';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    PublicComponent
  ],
  exports: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule
  ]
})
export class PublicModule { }
