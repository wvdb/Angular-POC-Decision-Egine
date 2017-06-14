import { Component } from '@angular/core';
import { CampaignService} from './campaign.service';
import { CampaignListComponent} from './campaign-list.component';

@Component({
    selector: 'my-app',
    template: `<h1>Management Service</h1>
            <campaign-list></campaign-list>`,
    directives: [CampaignListComponent],
    providers: [CampaignService]
})

export class AppComponent { }
