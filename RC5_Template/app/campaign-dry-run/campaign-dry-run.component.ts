import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CampaignDryRunService} from './campaign-dry-run.service';

@Component({
  selector: 'campaign-dry-run',
  moduleId: module.id,
  templateUrl: 'campaign-dry-run.component.html',
  providers:[CampaignDryRunService]
})

export class CampaignDryRunComponent implements OnInit{
    rowCount: number;
    campaignName: string;
    errorMessage: string;

    constructor(private _campaignDryRunService : CampaignDryRunService,
                private route: ActivatedRoute) {
    }

    ngOnInit(){
             this.campaignName = this.route.snapshot.params['campaignName'];
             this._campaignDryRunService.executeDryRun(this.route.snapshot.params['campaignName'])
                    .subscribe((responseCampaigns:any[]) => this.rowCount = responseCampaigns.length,
                               responseError => this.errorMessage = 'Executing dry run failed. ' || responseError);
    }
}
