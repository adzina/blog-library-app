import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user/user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private userService: UserService,
              private _router: Router) { }

  ngOnInit() {}
  save(form: NgForm) {
    this.userService.login(form).subscribe(result => {
      if (form['password'] === result[0].password) {
        this._router.navigate(['dashboard']);
        localStorage.setItem('name', form['firstName']);
      }
    }, error => console.error(error));
  }

}
