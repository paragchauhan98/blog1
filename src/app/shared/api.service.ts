import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Posts } from '../model/posts';
import { Contact } from '../model/contact';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
 
  constructor(private http:HttpClient) { }


  //get all posts
 getAllPosts():Observable<Posts[]>{
return this.http.get<Posts[]>("/getAllBlog")
 }
 //get single post
//  getFirstPost():Observable<Posts[]>{
//   return this.http.get<Posts[]>("post")
//    } 

 //get post by id
 getPostById(id:string):Observable<Posts>{
  return this.http.get<Posts>("/getAllBlog"+'/'+id)
 }

 //delete post 
 deletePost(id:string):Observable<Posts>{
  return this.http.delete<Posts>("/"+id)
 }

 //update post
 updatePost(post:Posts):Observable<Posts>{
  return this.http.put<Posts>("/"+post._id,post)
 }

 //create new posts

 createPost(post:Posts):Observable<Posts>{
  return this.http.post<Posts>("/postBlog",post)
 }

 //create new message
 postMessage(contacts:Contact):Observable<Contact>{
  return this.http.post<Contact>("/contact",contacts)
 }
}
