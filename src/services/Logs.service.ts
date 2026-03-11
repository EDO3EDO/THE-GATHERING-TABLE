import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogsService {

constructor(private _HttpClient:HttpClient) { }




CreatAccont(log:object):Observable<any>{

  return this._HttpClient.get(" ",log)





}




Signs(log:object):Observable<any>{
  return this._HttpClient.get("",log)
}


}
