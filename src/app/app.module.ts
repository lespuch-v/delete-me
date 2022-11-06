import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyAwesomeBlueComponentComponent } from './my-awesome-blue-component/my-awesome-blue-component.component';
import { MyAwesomeYellowComponentComponent } from './my-awesome-yellow-component/my-awesome-yellow-component.component';
import { TestDirectiveDirective } from './test-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyAwesomeBlueComponentComponent,
    MyAwesomeYellowComponentComponent,
    TestDirectiveDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
