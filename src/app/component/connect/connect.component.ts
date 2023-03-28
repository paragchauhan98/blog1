import { Component, OnInit } from '@angular/core';


import { Contact } from 'src/app/model/contact';
import { ApiService } from 'src/app/shared/api.service';





@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit {

  contacts:Contact ={
    
    name: '',
    email: '',
    number: '',
    message: '',
 
 
  }
  name:string=''
  email:string='';
  number:string='';
  message:string='';
 

  allPosts : Contact[]=[]
  singlePost:any=[]
  post1:any=[]
 
  constructor(private api:ApiService){}

  ngOnInit(): void {
    
  }





  postMessage(){
    this.contacts.name=this.name
    this.contacts.email=this.email
    this.contacts.number=this.number
    this.contacts.message=this.message

    this.api.postMessage(this.contacts).subscribe(res=>{
  this.allPosts=[]
  this.ngOnInit()
    },err=>{
      console.log(err)
    })
  }
showAlert(){
alert('Message Sent!')
}
}
