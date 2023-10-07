import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RecordComponent } from './record/record.component';
import { WordListComponent } from './word-list/word-list.component';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { WordTestComponent } from './word-test/word-test.component';

@NgModule({
  declarations: [
    AppComponent,
    RecordComponent,
    WordListComponent,
    HomescreenComponent,
    WordTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
