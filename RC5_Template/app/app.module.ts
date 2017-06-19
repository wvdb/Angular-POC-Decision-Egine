import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpModule }       from '@angular/http';
import { RouterModule }     from '@angular/router';

import { AppComponent }             from './app.component';
import { WelcomeComponent }         from './welcome.component';
import { CampaignListComponent }    from './campaign/campaign-list.component';
import { ImpressionListComponent} from './impression/impression-list.component';
import { SelectorComponent }        from './selector/selector.component';
import { AssetComponent }           from './asset/asset.component';

@NgModule({
  imports:      [
      BrowserModule,
      HttpModule,
      RouterModule.forRoot([
                {path: 'welcome', component: WelcomeComponent},
                {path: 'campaigns', component: CampaignListComponent},
                {path: 'impressions', component: ImpressionListComponent},
                {path: 'selector/:id', component: SelectorComponent},
                {path: 'asset/:id', component: AssetComponent}
          ]
      )
  ],
  declarations: [ AppComponent, WelcomeComponent, SelectorComponent, CampaignListComponent, ImpressionListComponent, AssetComponent],
  bootstrap:    [ AppComponent ]
})

export class AppModule {
}
