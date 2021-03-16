import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  providers: [DataService],
  styles: []
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  response: any[];

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
  }
  Login() {
    const formData = new FormData();
    formData.append('username', this.username);
    formData.append('password', this.password)
    this.dataService.loginAuthentication(formData).subscribe(success => {
      this.response = null;
      this.response = success as any[];
      if (this.response.length > 0) {
        localStorage.setItem("username", this.username);
        this.router.navigateByUrl('/colorgame');
      }
      else{
        this.username = "";
        this.password = "";
        alert("Wrong Username or password")
      }
    });
  }

}
