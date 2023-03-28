import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import * as Aos from 'aos';
import { Posts } from 'src/app/model/posts';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-pixel',
  templateUrl: './pixel.component.html',
  styleUrls: ['./pixel.component.css']
})
export class PixelComponent implements OnInit {

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
  siteTitle:string='Pixels&Pages - Pixels'
  constructor(private api:ApiService,private titleService:Title,private meta: Meta) { }

  ngOnInit(): void {
    Aos.init();
    this.titleService.setTitle(this.siteTitle)
    this.meta.addTags([
     {name: 'keywords', content: 'Pages&Pixels, Pages and Pixels,Artificial intelligence,Digital publishing, Blogging website,Tech news,Web design,Reviews,Blog writing,Social media,Digital media,Technology, Blog, Tech blog, Book review'},
   {name: 'description', content: 'Pixels&Pages is a dynamic and engaging blogging website that focuses on two key areas: tech blog and book review. I deliver in-depth articles covering the latest developments in technology, including gadgets, social media, digital media, web design, smartphones,electrical vehicle, and artificial intelligence. We also provide honest and insightful book reviews on a wide range of genres, helping our readers discover new titles and authors. we offer high-quality blog writing that engages readers and drives traffic. Whether you are looking for the latest tech news or want to explore the world of books, Pixels&Pages has got you covered. Join our community today and stay informed about the latest trends in tech and literature.'},
     {name: 'author', content: 'Parag Chauhan'},
     {name: 'robots', content: 'index, follow'}
    ])
   
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

