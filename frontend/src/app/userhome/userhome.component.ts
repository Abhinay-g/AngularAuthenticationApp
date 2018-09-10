import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
  username:String='';
  constructor(private _user:UserService, private _router:Router) { 
    this._user.user()
    .subscribe(
      data=>this.addName(data),
      error=>this._router.navigate(['/login'])
    )
  }

  addName(data){
    console.log(data);
    
    this.username = data;
  }
  ngOnInit() {
  }

  logout(){
    localStorage.removeItem('token');
    this._router.navigate(['login']);
  }


}