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
export class ImpressionService {
    constructor(private _http: Http, @Inject(APP_CONFIG) private _config: IAppConfig) {}

    getImpressions() {
        return this._http.get(this._config.impressionReportEndpoint)
            .map((response:Response) => response.json())
            .do(data => console.log('Impressions retrieved: '+ JSON.stringify(data)))
            .catch(ImpressionService._handleError);
    }

    static _handleError(error: Response) {
        console.error('Retrieving Impression Failed: error = '.concat(error.toString()));
        return Observable.throw(error)
    }

}
