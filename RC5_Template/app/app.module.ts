import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// urls of angular2-data-table:
// https://www.npmjs.com/package/angular2-data-table
// https://swimlane.gitbooks.io/ngx-datatable/content/
// https://swimlane.gitbooks.io/ngx-datatable/content/introduction/installing.html
// https://swimlane.gitbooks.io/ngx-datatable/content/introduction/getting-started.html
// https://github.com/swimlane/ngx-datatable/blob/master/demo/basic/scrolling.component.ts
// http://valor-software.com/ng2-table/
// https://www.beyondjava.net/blog/how-to-use-a-javascript-datatable-in-an-angular-application/
//import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AppComponent }       from './app.component';
import { SelectorComponent }  from './selector/selector.component';

@NgModule({
  imports:      [
      BrowserModule,
      HttpModule,
      RouterModule.forRoot([
                {path: 'selector', component: SelectorComponent}
          ]
      )
  ],
  declarations: [ AppComponent, SelectorComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule {
}
