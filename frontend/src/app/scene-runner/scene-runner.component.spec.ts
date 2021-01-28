import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SceneRunnerComponent } from './scene-runner.component';

describe('SceneRunnerComponent', () => {
  let component: SceneRunnerComponent;
  let fixture: ComponentFixture<SceneRunnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SceneRunnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SceneRunnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
