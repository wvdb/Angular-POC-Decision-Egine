import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { APP_CONFIG, IAppConfig } from '../app.config';

@Injectable()
export class CampaignDryRunService {
    constructor(private _http: Http, @Inject(APP_CONFIG) private _config: IAppConfig) {}

    executeDryRun(campaignName:string) {
        console.log('Dry run : campaignName = ' + campaignName);
        return this._http.get(this._config.campaignDryRunEndpoint.concat(campaignName))
            .map((response:Response) => response.json())
            .do(data => console.log('Dry run retrieved: '+ JSON.stringify(data)))
            .catch(CampaignDryRunService._handleError);
    }

    static _handleError(error: Response) {
        console.error('Executing dry run Failed: error = '.concat(error.toString()));
        return Observable.throw(error)
    }

}
