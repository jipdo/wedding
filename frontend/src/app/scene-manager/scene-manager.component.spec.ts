import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SceneManagerComponent } from './scene-manager.component';

describe('SceneManagerComponent', () => {
  let component: SceneManagerComponent;
  let fixture: ComponentFixture<SceneManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SceneManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SceneManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
