import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoMessagesComponent } from './no-messages.component';

describe('NoMessagesComponent', () => {
  let component: NoMessagesComponent;
  let fixture: ComponentFixture<NoMessagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoMessagesComponent]
    });
    fixture = TestBed.createComponent(NoMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
