import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SortPipe } from './sort.pipe';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, SortPipe],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
