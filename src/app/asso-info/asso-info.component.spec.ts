import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssoInfoComponent } from './asso-info.component';

describe('AssoInfoComponent', () => {
  let component: AssoInfoComponent;
  let fixture: ComponentFixture<AssoInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssoInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
