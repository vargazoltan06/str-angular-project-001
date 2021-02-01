import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookPagerComponent } from './book-pager.component';

describe('BookPagerComponent', () => {
  let component: BookPagerComponent;
  let fixture: ComponentFixture<BookPagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookPagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookPagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
