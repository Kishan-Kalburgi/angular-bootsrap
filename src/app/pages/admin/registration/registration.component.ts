import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Service } from 'src/app/service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  errorMsg = false;
  resAlt = false;
  resMsg: string;

  constructor(private service: Service) { }

  ngOnInit() {
  }

  onSignup(signupForm: NgForm) {
    console.log(signupForm.value);
    if (signupForm.valid) {
      this.service.saveUser(signupForm.value)
        .subscribe(res => {
          this.resMsg = res['message'];
          this.resAlt = true;
          console.log(res);
        },
          err => {
            console.log(err);
          });
    } else {
      this.errorMsg = true;
    }
  }
}
