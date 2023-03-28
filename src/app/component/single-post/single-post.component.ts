import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import * as Aos from 'aos';
import { Subscription } from 'rxjs';
import { Posts } from 'src/app/model/posts';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  siteTitle:any
  siteKeywords:any
  siteDescription:any
  private routeSub!: Subscription;
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
  singlePost:any=[]
  id:string=''
  apple:string=''
  constructor(private api:ApiService,private route: ActivatedRoute,private titleService:Title,private meta:Meta ) { }

  ngOnInit(): void {
    Aos.init();
    this.getPostById(this.post)

   

   
   
   }
  
  getPostById(posts:Posts){
    this.api.getPostById(posts._id).subscribe(res=>{
posts=res
console.log("res",posts)
this.singlePost=posts

this.routeSub = this.route.params.subscribe(params => {
  this.id=params['id']
  
  
 });
for(let post of this.singlePost){
  if(this.id==post._id){
this.siteTitle=post.title
this.siteKeywords=post.keywords
this.siteDescription=post.description
console.log("yo",this.siteTitle)
this.titleService.setTitle(this.siteTitle)
this.meta.addTags([
  {name: 'keywords', content:this.siteKeywords},
{name: 'description', content: this.siteDescription},
  {name: 'author', content: 'Parag Chauhan'},
  {name: 'robots', content: 'index, follow'}
 ])
  }
}

    },err=>{
      console.log(err)
    })
  }

}
