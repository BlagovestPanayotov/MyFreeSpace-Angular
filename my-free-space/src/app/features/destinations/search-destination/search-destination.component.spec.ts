import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDestinationComponent } from './search-destination.component';

describe('SearchDestinationComponent', () => {
  let component: SearchDestinationComponent;
  let fixture: ComponentFixture<SearchDestinationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchDestinationComponent]
    });
    fixture = TestBed.createComponent(SearchDestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
