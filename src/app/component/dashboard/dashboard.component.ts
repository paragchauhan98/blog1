import { Component, OnInit } from '@angular/core';
import { Posts } from 'src/app/model/posts';
import { ApiService } from 'src/app/shared/api.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
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
this._id=''
    this.title=''
    this.content1=''
    this.content2=''
    this.content3=''
    this.content4=''
    this.content5=''
    this.username=''
    this.date=''
    this.category=''
    this.tag=''
    this.image1=''
    this.image2=''
    this.keywords=''
    this.description=''
    this.getAllPosts()
    this.updatePost()
  }


  getAllPosts(){
    this.api.getAllPosts().subscribe(res=>{
this.allPosts=res
console.log(this.allPosts)
    },
    err=>{
      console.log(err)
    })
  }

  //get post by Id
  getPostById(post:Posts){
    this.api.getPostById(post._id).subscribe(res=>{
post=res
    },err=>{
      console.log(err)
    })
  }

  //delete post using id

  deletePost(post:Posts){

    if(window.confirm('This will delete this post'+post.title)){
      this.api.deletePost(post._id).subscribe(res=>{
        this.allPosts=[]
        this.getAllPosts();
            },err=>{
              console.log(err)
            })
    }

  }
//create post

createPost(){
  this.post.title=this.title
  this.post.content1=this.content1
  this.post.content2=this.content2
  this.post.content3=this.content3
  this.post.content4=this.content4
  this.post.content5=this.content5
  this.post.username=this.username
  this.post.date=this.date
  this.post.category=this.category
  this.post.tag=this.tag
  this.post.image1=this.image1
  this.post.image2=this.image2
  this.post.keywords=this.keywords
  this.post.description=this.description
  this.api.createPost(this.post).subscribe(res=>{
this.allPosts=[]
this.ngOnInit()
  },err=>{
    console.log(err)
  })
}

//edit data by id
editPost(post:Posts){
  this.getPostById(post);
  this._id=post._id
  this.title=post.title
  this.content1=post.content1
  this.content2=post.content2
  this.content3=post.content3
  this.content4=post.content4
  this.content5=post.content5
  this.username=post.username
  this.date=post.date
  this.category=post.category
  this.tag=post.tag
  this.image1=post.image1
  this.image2=post.image2
  this.keywords=post.keywords
  this.description=post.description
}
updatePost(){
  // if(this.title !='' || this.content1!='' || this.username!=''){
  //   alert('Please fill all the fields')
  //   return;
  // }
  this.post._id=this._id
  this.post.title=this.title;
  this.post.content1=this.content1;
  this.post.content2=this.content2;
  this.post.content3=this.content3;
  this.post.content4=this.content4;
  this.post.content5=this.content5;
  this.post.username=this.username;
  this.post.date=this.date
  this.post.category=this.category
  this.post.tag=this.tag;
  this.post.image1=this.image1
  this.post.image2=this.image2
  this.post.keywords=this.keywords
  this.post.description=this.description

  this.api.updatePost(this.post).subscribe(res=>{

  },err=>{
    console.log(err)
  })
}
}
