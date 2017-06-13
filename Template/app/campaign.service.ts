import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
//import 'rxjs/add/operator/map';

@Injectable()
export class CampaignService {
    private _url = "http://localhost:8080/campaigns";

    //constructor(private _http: Http) {}

    getCampaigns() {
        return [
            {	"name": "Campaign1",
                "description": "Description of Test Campaign 1",
                "owner": "Owner of Campaign 1",
                "creationTime": "2001-12-17T09:30:47Z",
                "startTime": "2001-12-17T09:30:47Z",
                "endTime": "2019-12-31T23:59:59Z",
                "score": "100",
                "enabled": true
            },
            {	"name": "Campaign2",
                "description": "Description of Test Campaign 2",
                "owner": "Owner of Campaign 2",
                "creationTime": "2001-12-17T09:30:47Z",
                "startTime": "2001-12-17T09:30:47Z",
                "endTime": "2019-12-31T23:59:59Z",
                "score": "200",
                "enabled": true
            }
        ]
        //return this._http.get(this._url)
        //    .map((response:Response) => response.json());
    }

    getCampaignsHardCoded() {
        return [
            {	"name": "Campaign1",
                "description": "Description of Test Campaign 1",
                "owner": "Owner of Campaign 1",
                "creationTime": "2001-12-17T09:30:47Z",
                "startTime": "2001-12-17T09:30:47Z",
                "endTime": "2019-12-31T23:59:59Z",
                "score": "100",
                "enabled": true
            },
            {	"name": "Campaign2",
                "description": "Description of Test Campaign 2",
                "owner": "Owner of Campaign 2",
                "creationTime": "2001-12-17T09:30:47Z",
                "startTime": "2001-12-17T09:30:47Z",
                "endTime": "2019-12-31T23:59:59Z",
                "score": "200",
                "enabled": true
            }
        ]
    }
}
