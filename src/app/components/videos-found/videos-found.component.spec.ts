import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosFoundComponent } from './videos-found.component';

describe('VideosFoundComponent', () => {
  let component: VideosFoundComponent;
  let fixture: ComponentFixture<VideosFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideosFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
