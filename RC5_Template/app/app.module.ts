import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { HttpModule } from '@angular/http';
// urls of angular2-data-table:
// https://www.npmjs.com/package/angular2-data-table
// https://swimlane.gitbooks.io/ngx-datatable/content/
// https://swimlane.gitbooks.io/ngx-datatable/content/introduction/installing.html
// https://swimlane.gitbooks.io/ngx-datatable/content/introduction/getting-started.html
// https://github.com/swimlane/ngx-datatable/blob/master/demo/basic/scrolling.component.ts
//import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
