import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestadorHeaderComponent } from './prestador-header.component';

describe('PrestadorHeaderComponent', () => {
  let component: PrestadorHeaderComponent;
  let fixture: ComponentFixture<PrestadorHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrestadorHeaderComponent]
    });
    fixture = TestBed.createComponent(PrestadorHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
