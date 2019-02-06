// import { Injectable } from '@angular/core';
// import {HttpClient} from '@angular/common/http'
// import {environment} from '../../environments/environment'
// import {User} from '../user'
// import { getLocaleDateFormat } from '@angular/common';


// @Injectable()
// export class QuoteRequestService {

//     user:User;

//   constructor(private http:HttpClient) { 
//     this.user=new User("","",new Date());
//   }

//   quoteRequest(){

//     interface ApiResponse{
//         User:string;
//         author:string

//     }
//     let promise =new Promise((resolve,reject)=>{
//         // this.http.get<ApiResponse>(environment.api-Key).toPromise().then(response=>{
            
//             // this.user.user=response.User,
//             // this.user.author=response.author

//             resolve()
//         },
//         // error=>{
//         //         this.user.quote="Never, never, never give up."
//         //         this.user.author="winston churchill"
//         //         reject(error)
//         //     }
//         )
//     })

//     return promise
//   }
// }
