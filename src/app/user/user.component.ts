import { Component, OnInit } from '@angular/core';
import { User } from '../user';

import {UserService} from '../users/user.service';
import {AlertsService} from '../alert-service/alerts.service'

// import {QuoteRequestService} from '../quote-http/quote-request.service'
import { Repository } from '../repository';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  providers:[UserService], //add the providers to the component
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 user:any;
 Repository:Repository;
//  username =new User("");
 alertService:AlertsService;


 
    constructor(userService:UserService,alertService:AlertsService,) {
    this.user = userService.getUser();
    // this.alertService = alertService;
     }


  // users = [
  //   new User('Username',"Date created",new Date(2018,3,14)),
  // ]
//   toogleDetails(index){
//     this.users[index].showDescription = !this.users[index].showDescription;
// }
// user:user[];
//   constructor(UserService:UserService) {
//   this.Use =UserService.getuser()
//    }
//   constructor() { }

  ngOnInit() {
  }

}
