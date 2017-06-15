import { Component } from '@angular/core';
import { CampaignService} from './campaign/campaign.service';
import { CampaignListComponent} from './campaign/campaign-list.component';

@Component({
    selector: 'my-app',
    template: `<campaign-list></campaign-list>`,
    directives: [CampaignListComponent],
    providers: [CampaignService]
})

export class AppComponent { }
