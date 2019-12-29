import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AViewComponent } from './aview.component';

describe('AViewComponent', () => {
  let component: AViewComponent;
  let fixture: ComponentFixture<AViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
