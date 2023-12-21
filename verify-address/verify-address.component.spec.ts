import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyAddressComponent } from './verify-address.component';

describe('VerifyAddressComponent', () => {
  let component: VerifyAddressComponent;
  let fixture: ComponentFixture<VerifyAddressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerifyAddressComponent]
    });
    fixture = TestBed.createComponent(VerifyAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
