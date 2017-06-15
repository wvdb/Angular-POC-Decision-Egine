import { Component } from '@angular/core';
import { CampaignService} from './campaign/campaign.service';
import { CampaignListComponent} from './campaign/campaign-list.component';

@Component({
    selector: 'my-app',
    template: `
    <div>
        <nav class='navbar navbar-default'>
            <div class="container-fluid">
              <a class='navbar-brand'>Overview</a>
              <ul class='nav navbar-nav'>
                  <li><a [routerLink]="['/welcome']">Home</a></li>
                  <li><a [routerLink]="['/campaigns']">Campaign Overview</a></li>
                  <li><a [routerLink]="['/selector']">Selector</a></li>
              </ul>
            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
    </div>
    `,
    directives: [CampaignListComponent],
    providers: [CampaignService]
})

export class AppComponent { }
