import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { ArticlesComponent } from './articles/articles.component';
import { ContactComponent } from './contact/contact.component';
import {Route, RouterModule, Routes} from '@angular/router';
import { UnArticleComponent } from './un-article/un-article.component';
import {FormsModule} from '@angular/forms';

const routes: Routes = [
  {path:'', redirectTo:'accueil', pathMatch:'full'},
  {path:'accueil',component: HomeComponent},
  {path:'articles',component: ArticlesComponent},
  {path:'contact',component: ContactComponent},
  {path:'accueil/:post_name',component: UnArticleComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArticlesComponent,
    ContactComponent,
    UnArticleComponent,
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
