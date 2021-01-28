import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { SceneRunnerComponent } from './scene-runner/scene-runner.component';
import { BaseSceneComponent } from './base-scene/base-scene.component';
import { FirstSceneComponent } from './scenes/first-scene/first-scene.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    SceneRunnerComponent,
    BaseSceneComponent,
    FirstSceneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
