import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from './userauth-modal';

interface authDataAPI {
  idToken: string,
  email: string,
  refreshToken: string,
  expiresIn: string,
  localId: string,
  registered?: boolean
}

@Injectable()
export class AuthserService {

  
  user=new Subject<User>();
  constructor(private http: HttpClient) { }

  sendDataToAPI(email: string, password: string) {


    return this.http.post<authDataAPI>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCNrq8CDr9P4i9HsYeLVjtnJdqLZRYQpjk", {
      email: email,
      password: password,
      returnSecureToken: true

    }


    ).pipe(catchError(this.handleError), tap((res) => {
      this.handleAuthentication(res.email,res.localId,res.idToken, +res.expiresIn);
    }));



  }

  sendLoginDataToAPI(email: string, password: string) {
    return this.http.post<authDataAPI>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCNrq8CDr9P4i9HsYeLVjtnJdqLZRYQpjk", {
      email: email,
      password: password,
      returnSecureToken: true

    }


    ).pipe(catchError(this.handleError), tap((res) => {
      this.handleAuthentication(res.email,res.localId,res.idToken, +res.expiresIn);
    }));

  }

  private handleAuthentication(email:string,localId:string,idToken:string,expiresIn:number){
    const expiration=new Date(new Date().getTime() + + expiresIn*1000);
    const userobj=new User(email,localId,idToken,expiration);
    this.user.next(userobj);
    localStorage.setItem("userData",JSON.stringify(userobj));
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = "An error occurred!"
    return throwError(errorMessage);
  }

  userLogOut(){
    this.user.next(null);
  }

}
