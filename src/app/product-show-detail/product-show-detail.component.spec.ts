import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductShowDetailComponent } from './product-show-detail.component';

describe('ProductShowDetailComponent', () => {
  let component: ProductShowDetailComponent;
  let fixture: ComponentFixture<ProductShowDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductShowDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductShowDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
