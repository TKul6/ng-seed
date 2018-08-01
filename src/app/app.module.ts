import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatListModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {OverlayContainer} from '@angular/cdk/overlay';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatListModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(overlayContainer: OverlayContainer) {
    overlayContainer.getContainerElement().classList.add('inner-theme');
  }

}
