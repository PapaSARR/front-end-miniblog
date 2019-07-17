import { Component, OnInit } from '@angular/core';
import {BlogService} from '../services/blog.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  private articles:Object;
  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.getArticles();
  }

  public getArticles(){
    return this.blogService.getResource(this.blogService.host+"/posts")
      .subscribe(datas=>{this.articles = datas;console.log(this.articles)});
  }
}
