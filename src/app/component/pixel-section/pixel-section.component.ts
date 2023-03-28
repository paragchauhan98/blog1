import { Component, Input, OnInit } from '@angular/core';
import { Posts } from 'src/app/model/posts';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-pixel-section',
  templateUrl: './pixel-section.component.html',
  styleUrls: ['./pixel-section.component.css']
})
export class PixelSectionComponent implements OnInit {
  post:Posts ={
    _id: '',
    title: '',
    content1: '',
    content2: '',
    content3: '',
    content4: '',
    content5: '',
    username: '',
    date: '',
    category: '',
    tag: '',
    image1:'',
    image2:'',
    keywords:'',
    description:''
  }
  _id:string=''
  title:string='';
  content1:string='';
  content2:string='';
  content3:string='';
  content4:string='';
  content5:string='';
  username:string='';
  date:string='';
  category:string='';
  tag:string='';
  image1:string='';
  image2:string='';
  keywords:string=''
  description:string=''
  allPosts : Posts[]=[]
  constructor(private api:ApiService) { }

  ngOnInit(): void {
this.getAllPosts()
  }
  getAllPosts(){
    this.api.getAllPosts().subscribe(res=>{
this.allPosts=res

    },
    err=>{
      console.log(err)
    })
  }

}
