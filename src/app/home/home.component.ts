import { Component, OnInit } from '@angular/core';
import {BlogService} from '../services/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private posts: any;
  private lastPosts: any;

  constructor(private blogService: BlogService) {
  }

  ngOnInit() {
    this.getPosts();
  }

  public getPosts() {
    return this.blogService.getResource(this.blogService.host+"/posts")
      .subscribe(datas => {
        this.posts = datas;
        this.lastPosts = this.posts._embedded.posts.slice(this.posts._embedded.posts.length - 3, this.posts._embedded.posts.length)
      });
  }

}
