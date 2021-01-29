import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SceneRunnerComponent } from './scene-runner/scene-runner.component';
import { BaseSceneComponent } from './base-scene/base-scene.component';
import { FirstSceneComponent } from './scenes/first-scene/first-scene.component';
import { SceneControllerComponent } from './scene-controller/scene-controller.component';
import { SceneManagerComponent } from './scene-manager/scene-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    SceneRunnerComponent,
    BaseSceneComponent,
    FirstSceneComponent,
    SceneControllerComponent,
    SceneManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
