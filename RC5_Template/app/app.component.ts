import { Component } from '@angular/core';
import { CampaignService} from './campaign/campaign.service';
import { CampaignListComponent} from './campaign/campaign-list.component';
import { ImpressionListComponent} from './impression/impression-list.component';
import { SelectorService} from './selector/selector.service';
import { SelectorComponent} from './selector/selector.component';
import { AssetService} from './asset/asset.service';
import { AssetComponent} from './asset/asset.component';

@Component({
    selector: 'my-app',
    template: `
    <div>
        <nav class='navbar navbar-default'>
            <div class="container-fluid">
              <ul class='horizontal'>
                  <li><a [routerLink]="['/welcome']">Home</a></li>
                  <li><a [routerLink]="['/campaigns']">Campaign Overview</a></li>
                  <li><a [routerLink]="['/impressions']">Impressions</a></li>
              </ul>
            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
    </div>
    `,
    directives: [CampaignListComponent, SelectorComponent, AssetComponent, ImpressionListComponent],
    providers: [CampaignService, SelectorService, AssetService]
})

export class AppComponent { }
