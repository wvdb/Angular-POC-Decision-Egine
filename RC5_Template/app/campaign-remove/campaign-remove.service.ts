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
export class CampaignRemoveService {
    constructor(private _http: Http, @Inject(APP_CONFIG) private _config: IAppConfig) {}

    executeCampaignRemove(campaignId:string) {
        console.log('Remove Campaign : campaignId = ' + campaignId);
        return this._http.delete(this._config.campaignEndpoint.concat("/").concat(campaignId))
            .map((response:Response) => response)
            .catch(CampaignRemoveService._handleError);
    }

    static _handleError(error: Response) {
        console.error('Executing remove-campaign failed: error = '.concat(error.toString()));
        return Observable.throw(error)
    }

}
