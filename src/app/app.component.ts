import { Component, OnInit } from '@angular/core';
import {Title,Meta} from '@angular/platform-browser'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'Pixels&Pages - A blog about Tech and books';
  constructor(private titleService:Title,
    private meta: Meta
    ){

  }
  ngOnInit(): void {
   this.titleService.setTitle(this.title)
   this.meta.addTags([
    {name: 'keywords', content: 'Pages&Pixels, Pages and Pixels,Artificial intelligence,Digital publishing, Blogging website,Tech news,Web design,Reviews,Blog writing,Social media,Digital media,Technology, Blog, Tech blog, Book review'},
	{name: 'description', content: 'Pixels&Pages is a dynamic and engaging blogging website that focuses on two key areas: tech blog and book review. I deliver in-depth articles covering the latest developments in technology, including gadgets, social media, digital media, web design, smartphones,electrical vehicle, and artificial intelligence. We also provide honest and insightful book reviews on a wide range of genres, helping our readers discover new titles and authors. we offer high-quality blog writing that engages readers and drives traffic. Whether you are looking for the latest tech news or want to explore the world of books, Pixels&Pages has got you covered. Join our community today and stay informed about the latest trends in tech and literature.'},
    {name: 'author', content: 'Parag Chauhan'},
    {name: 'robots', content: 'index, follow'}
   ])
  }


 
}
