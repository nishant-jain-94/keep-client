import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatToolbarModule, MatToolbar } from '@angular/material/toolbar';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let titleEl: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MatToolbarModule ],
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    titleEl = fixture.nativeElement.querySelector('span');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(titleEl.innerText).toBe('Keep');
  });
});
