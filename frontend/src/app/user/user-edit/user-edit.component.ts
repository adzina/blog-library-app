import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../shared/user/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent {
  constructor(
    private router: Router,
    private userService: UserService
  ) {}
  save(form: NgForm) {
    this.userService.save(form).subscribe(
      result => {
        this.showLogin();
      },
      error => console.error(error)
    );
  }
  showLogin() {
    this.router.navigate(['/']);
  }
}
