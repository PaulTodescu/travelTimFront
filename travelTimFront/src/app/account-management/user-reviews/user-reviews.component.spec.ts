import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReviewsComponent } from './user-reviews.component';

describe('ReviewsComponent', () => {
  let component: UserReviewsComponent;
  let fixture: ComponentFixture<UserReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserReviewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
