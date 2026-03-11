import { Component, OnInit } from '@angular/core';
import { LogsService } from '../../services/Logs.service';
import { FormControl, FormControlDirective, FormGroup, FormsModule, MaxLengthValidator, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-Sign-In',
  imports:[FormsModule,ReactiveFormsModule],
  templateUrl: './Sign-In.component.html',
  styleUrls: ['./Sign-In.component.css']
})
export class SignInComponent  {


  constructor(private _LogsService:LogsService) { }


SignIn = new FormGroup({

  Email: new FormControl('', [Validators.required , Validators.email]),
  Password: new FormControl('' , [Validators.required , Validators.minLength(8) , Validators.maxLength(12)])
})



logs(form:FormGroup){



  this._LogsService.CreatAccont(form.value).subscribe({
    next: (res) => {console.log(res)},
    error: (err) => {console.log('Error' , err)}
  })







}



}
