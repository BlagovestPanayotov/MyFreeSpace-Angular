import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotVerifiedComponent } from './not-verified.component';

describe('NotVerifiedComponent', () => {
  let component: NotVerifiedComponent;
  let fixture: ComponentFixture<NotVerifiedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotVerifiedComponent]
    });
    fixture = TestBed.createComponent(NotVerifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
