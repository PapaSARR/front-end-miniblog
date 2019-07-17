import { Component, OnInit } from '@angular/core';
import {BlogService} from '../services/blog.service';
import {Contact} from '../modele/Contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  private contact:Contact;
  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.contact = new Contact();
  }

  onSave(value:any) {
    value.date = new Date();
    this.blogService.saveContact(this.blogService.host+"/contacts",value)
      .subscribe(res=>{
        this.contact = res;
        console.log(this.contact);
      });
  }
}
