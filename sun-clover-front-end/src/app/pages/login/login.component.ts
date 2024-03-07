import { Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ReplaySubject, takeUntil} from "rxjs";
import Utils from "../../shared/utils";

@Component({
  selector: 'app-home',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public isShowPassword: boolean = false;
  public emailUser: string = '';
  public passwordUser: string = '';
  public messageError: string = '';

  private onDestroy$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute, private router: Router
  ) {
  };

  ngOnInit() {
  };

  // Function to show and hide password
  public showAndHidePassword() {
    !this.isShowPassword ? this.isShowPassword = true : this.isShowPassword = false
  }

  // Function Login
  public login(valid: any) {
    if (!valid) {
      this.messageError = 'Vui lòng nhập Email và Mật khẩu';
      return;
    }

    // If email and password valid continue login
    this.messageError = '';
    this.authService
      .login(this.emailUser, this.passwordUser)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe({
        next: (res: any) => {
          if (res.errorCode === Utils.successCode) {
            // this.user = res.data;
            // this.authService.setUserInfo(res.data);
            // this.router.navigate(['admin']);
          }
        },
        error: (error) => {
          this.messageError = Utils.defaultErrorBody;
        }
      });
  }
}
