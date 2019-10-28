import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({ providedIn: 'root' })
export class AlertService {
    private subject =new Subject<any>();
    private keepafterRouteChange = false;

    constructor(private router:Router){
        // clear alert messages on route change unless 'keepAfterRouteChange' flag is true

        this.router.events.subscribe(event => {

          if(event instanceof NavigationStart){

              if(this.keepafterRouteChange){

                  this.keepafterRouteChange = false;
              }
              else{

                //clear alert message
                  this.Clear();
              }
          }


        })
    }

    getAlert():Observable<any>{
        return this.subject.asObservable();

    }

    success(message:string,keepAfterRouteChange:false){
        this.keepafterRouteChange=keepAfterRouteChange;
        this.subject.next({type:'success',text:message});
    }


    error(message :string, keepAfterRouteChange :false)
    {
        this.keepafterRouteChange = keepAfterRouteChange;
        this.subject.next({type:'error',text:message});
    }
Clear(){
    this.subject.next();
}
}