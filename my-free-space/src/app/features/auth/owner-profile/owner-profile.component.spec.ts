import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerProfileComponent } from './owner-profile.component';

describe('ProfileComponent', () => {
  let component: OwnerProfileComponent;
  let fixture: ComponentFixture<OwnerProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnerProfileComponent]
    });
    fixture = TestBed.createComponent(OwnerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
