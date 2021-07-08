import { Component, OnInit } from '@angular/core';
import { Article } from '../article/article.models';
import { ArticleData } from '../data/data';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  articles : Article[] = [];

  constructor() { }

  ngOnInit(): void {
    this.articles = new ArticleData().getData();
  }

}
