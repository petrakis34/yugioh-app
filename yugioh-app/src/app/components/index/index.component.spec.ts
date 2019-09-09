import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexComponent } from './index.component';
import { CardDetailsComponent } from './card-details/card-details.component';
import { CardListComponent } from './card-list/card-list.component';
import { HttpService } from 'src/app/services/http.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';

fdescribe('IndexComponent', () => {
  let component: IndexComponent;
  let fixture: ComponentFixture<IndexComponent>;
  let fixtureCardDetails: ComponentFixture<CardDetailsComponent>;
  let fixtureCardList: ComponentFixture<CardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IndexComponent, CardDetailsComponent, CardListComponent ],
      imports: [ScrollDispatchModule],
      providers: [HttpService],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexComponent);
    fixtureCardDetails = TestBed.createComponent(CardDetailsComponent);
    fixtureCardList = TestBed.createComponent(CardListComponent);
    component = fixture.componentInstance;
    component.cardList = [

    ]
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
