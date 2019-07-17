import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnArticleComponent } from './un-article.component';

describe('UnArticleComponent', () => {
  let component: UnArticleComponent;
  let fixture: ComponentFixture<UnArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
