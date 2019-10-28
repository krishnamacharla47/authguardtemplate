import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AlertService } from '../_services/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit,OnDestroy {

  private subscription:Subscription;
  constructor(private alertService:AlertService) { }

  message="testing";


  ngOnInit() {
    this.alertService.getAlert().subscribe(message =>
      {
         switch(message)
         {
           case 'success':
             message.cssClass='alert alert-success';
             break;

         
         case 'error':
           message.cssClass='alert alert-error';
           break;
         }

         this.message =message;
      }
      
      ) 
  }
  
ngOnDestroy(){
  this.subscription.unsubscribe();
}

}
