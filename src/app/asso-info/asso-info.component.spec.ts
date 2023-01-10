import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AssoInfoComponent } from './asso-info.component';
import { NavComponent } from '../nav/nav.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';

describe('AssoInfoComponent', () => {
  let component: AssoInfoComponent;
  let fixture: ComponentFixture<AssoInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AssoInfoComponent,
        NavComponent
      ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        MatCardModule,
        MatProgressBarModule,
        MatIconModule
       ],
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
