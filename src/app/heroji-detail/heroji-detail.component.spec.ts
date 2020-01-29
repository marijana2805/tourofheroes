import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerojiDetailComponent } from './heroji-detail.component';

describe('HerojiDetailComponent', () => {
  let component: HerojiDetailComponent;
  let fixture: ComponentFixture<HerojiDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerojiDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerojiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
