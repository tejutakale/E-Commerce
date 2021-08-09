import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
data:any;
alert:boolean = false;
  router: any;
  constructor() { }

  ngOnInit(): void {
  
  }
  onSubmit(data:any){
     // alert("Login Successfull");
      console.warn(data);
      this.alert=true;
      this.router.navigate(['/product']);
  }

}
