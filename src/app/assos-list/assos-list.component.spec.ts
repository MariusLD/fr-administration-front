import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssosListComponent } from './assos-list.component';
import { NavComponent } from '../nav/nav.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AssosListComponent', () => {
  let component: AssosListComponent;
  let fixture: ComponentFixture<AssosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AssosListComponent,
        NavComponent
       ],
      imports: [
        HttpClientTestingModule,
        MatFormFieldModule,
        MatIconModule,
        MatTableModule,
        MatInputModule,
        BrowserAnimationsModule 
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
