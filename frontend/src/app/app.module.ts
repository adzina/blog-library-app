import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserService } from './shared/user/user.service';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserLoginComponent } from './user/user-login/user-login.component';

import { MatButtonModule, MatCardModule, MatInputModule, MatToolbarModule, MatListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const routes: Routes = [
  { path: '', redirectTo: '/user-login', pathMatch: 'full' },
  {
    path: 'user-edit',
    component: UserEditComponent
  },
  {
    path: 'user-login',
    component: UserLoginComponent
  },
];


@NgModule({
  declarations: [
    AppComponent,
    UserEditComponent,
    UserLoginComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
    ],
  providers: [ UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
