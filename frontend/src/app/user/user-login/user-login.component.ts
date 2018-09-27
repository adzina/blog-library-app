import { Component } from '@angular/core';
import { UserService } from '../../shared/user/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  constructor(private userService: UserService) { }

  save(form: NgForm) {
    this.userService.login(form).subscribe(result => {
      if (form['password'] === result[0].password) {
        console.log(true);
      }
    }, error => console.error(error));
  }
}
