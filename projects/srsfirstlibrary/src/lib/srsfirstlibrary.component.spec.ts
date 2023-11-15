import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrsfirstlibraryComponent } from './srsfirstlibrary.component';

describe('SrsfirstlibraryComponent', () => {
  let component: SrsfirstlibraryComponent;
  let fixture: ComponentFixture<SrsfirstlibraryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SrsfirstlibraryComponent]
    });
    fixture = TestBed.createComponent(SrsfirstlibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
