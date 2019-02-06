import { Component, OnInit } from '@angular/core';
import { User } from '../user';

// import { link } from 'fs';
import { Repository } from '../repository';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

// import {enviromnent} from '../enviromnents/enviromnent';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
Username=new User("");
repos: any
submitUser(){  
  interface ApiResponse{
    public_repos:number;
    public_gists:number;
    followers:number;
    following:number;
    created_at:Date;
    html_url:string;
}
this.http.get<ApiResponse>("https://api.github.com/users/"+this.Username.username +"?access_token="+ environment.api_key).subscribe((Data:any)=>{
  console.log(Data)
  this.repos.public_repos=Data.public_repos;
  this.repos.public_gists=Data.public_gists;
this.repos.followers=Data.followers;
this.repos.following=Data.following; 
this.repos.created_at=Data.created_at;
this.repos.html_Url=Data.html_Url;
});
console.log(this.Username)
  

}
constructor( private http:HttpClient) {
  this.repos=new Repository(0,0,0,0,new Date(),"")
}
ngOnInit() {
  }

}
