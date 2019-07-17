import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BlogService} from '../services/blog.service';

@Component({
  selector: 'app-un-article',
  templateUrl: './un-article.component.html',
  styleUrls: ['./un-article.component.css']
})
export class UnArticleComponent implements OnInit {
  private post_name:any;
  private article:any;
  constructor(private route: ActivatedRoute,
              private blogService: BlogService) { }

  ngOnInit() {
    this.getPost();
  }
  public getPost(){
    this.post_name = this.route.snapshot.params.post_name;
    return this.blogService.getResource(this.blogService.host+"/posts/search/article?pn="+this.post_name)
      .subscribe(data => {
        this.article = data;
      });
  }
}
