import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, ɵInternalFormsSharedModule } from '@angular/forms';
import { PasswordMisMatch } from '../../class/PasswordMisMatch';
import { Router, RouterLink , RouterOutlet } from '@angular/router';
import { LogsService } from '../../services/Logs.service';

@Component({
  selector: 'app-Sign_Up',
  templateUrl: './Sign_Up.component.html',
  styleUrls: ['./Sign_Up.component.css'],
  imports: [ɵInternalFormsSharedModule, ReactiveFormsModule, RouterLink , RouterOutlet]
})
export class Sign_UpComponent  {



  constructor(private _LogsService:LogsService , private _router:Router){}

SignIn_form = new FormGroup({
  name: new FormControl('', [Validators.required,Validators.maxLength(10), Validators.minLength(3)]),
  email: new FormControl('', [Validators.required, Validators.email]),
  password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]),
  repassword: new FormControl('', [Validators.required])
}, {validators:PasswordMisMatch});



logs(form:FormGroup){
  this._LogsService.Signs(form.value).subscribe({next:(e)  => {console.log(e)}})
}



}
