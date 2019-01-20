import { Component, OnInit } from '@angular/core';
import { DServiceService } from '../d-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private ds:DServiceService, private router:Router) { }

  ngOnInit() {
  }

  password:string;
  email:string;


  login(l){
    // this.At.getAuth(l)
    console.log(l)
    this.ds.getAuth(l).subscribe(res=>this.add(res));
    
  }

  add(l)
{
  localStorage.setItem("objectId",l.idToken)
  // if (this.)
  this.router.navigate(['/upage'])
  // alert('please check')
}
}
