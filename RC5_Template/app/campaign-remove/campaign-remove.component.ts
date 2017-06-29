import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CampaignRemoveService} from './campaign-remove.service';

@Component({
  selector: 'campaign-remove',
  moduleId: module.id,
  templateUrl: 'campaign-remove.component.html',
  providers:[CampaignRemoveService]
})

export class CampaignRemoveComponent implements OnInit{
    campaignId: string;
    errorMessage: string;
    response: any;

    constructor(private _campaignRemoveService : CampaignRemoveService,
                private route: ActivatedRoute) {
    }

    ngOnInit(){
             this.campaignId = this.route.snapshot.params['campaignId'];
             this._campaignRemoveService.executeCampaignRemove(this.route.snapshot.params['campaignId'])
                    .subscribe((responseCampaigns) => this.response = responseCampaigns,
                               responseError => this.errorMessage = 'Executing campaign-remove failed. ' || responseError);
    }
}
