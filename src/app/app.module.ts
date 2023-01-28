import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { PdfViewerModule } from 'ng2-pdf-viewer'; // <- import PdfViewerModule

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    PdfViewerModule, // <- Add PdfViewerModule to imports
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
