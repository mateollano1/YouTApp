import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoSelectedComponent } from './video-selected.component';

describe('VideoSelectedComponent', () => {
  let component: VideoSelectedComponent;
  let fixture: ComponentFixture<VideoSelectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoSelectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
