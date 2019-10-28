import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../_services/authantication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

loginForm :FormGroup;
loading = false;
submitted = false;
returnUrl:string;
error:'';

  constructor(private formBuilder:FormBuilder,
    private route:ActivatedRoute,
    private router:Router,
    private authantication:AuthenticationService) { 
      if(this.authantication.currentuservalue){
        this.router.navigate(['/']);
      }
    }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
            username:['',Validators],
            password:['',Validators]

    });

    this.returnUrl = this.route.snapshot.queryParams['returnurl'||'/'];
  }

  get f(){
    this.loginForm.controls;
  }
  onSubmit(){
    this.submitted = true;
  }

}
