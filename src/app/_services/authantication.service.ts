import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { User } from '../_models/user';
import { HttpClient } from 'selenium-webdriver/http';



@Injectable({ providedIn: 'root' })
export class AuthenticationService {

   private currentusersubject : BehaviorSubject<User>;
   public currentUser: Observable<User>;
    constructor(private http:HttpClient){
        this.currentusersubject= new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser=this.currentusersubject.asObservable();

    }

    public get currentuservalue():User{
        return this.currentusersubject.value;
    }

    // login(username: string, password: string) {
    //     return this.http.post<any>(`${environment.apiUrl}/users/authenticate`, { username, password })
    //         .pipe(map(user => {
    //             // store user details and jwt token in local storage to keep user logged in between page refreshes
    //             localStorage.setItem('currentUser', JSON.stringify(user));
    //             this.currentUserSubject.next(user);
    //             return user;
    //         }));
    // }

    // logout() {
    //     // remove user from local storage to log user out
    //     localStorage.removeItem('currentUser');
    //     this.currentUserSubject.next(null);
    // }

}