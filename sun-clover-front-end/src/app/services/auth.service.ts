import {Injectable} from "@angular/core";
import Utils from "../shared/utils";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class AuthService {

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  login(email: string, password: string) {
    const url = Utils.apiUrl + '/auth/login';
    const data = {
      'email': email,
      'password': password,
    };
    return this.http.post(url, data);
  };
}
