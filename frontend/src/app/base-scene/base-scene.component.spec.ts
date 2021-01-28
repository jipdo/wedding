import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseSceneComponent } from './base-scene.component';

describe('BaseSceneComponent', () => {
  let component: BaseSceneComponent;
  let fixture: ComponentFixture<BaseSceneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseSceneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseSceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
