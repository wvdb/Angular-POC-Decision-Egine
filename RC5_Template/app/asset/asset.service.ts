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
export class AssetService {
    constructor(private _http: Http, @Inject(APP_CONFIG) private _config: IAppConfig) {}

    getAsset(assetId:string) {
        console.log( '>>>Starting retrieve asset with id '.concat(assetId));
        return this._http.get(this._config.assetEndpoint.concat(assetId))
            .map((response:Response) => response.json())
            .catch(AssetService._handleError);
    }

    static _handleError(error: Response) {
        console.error(error);
        return Observable.throw(error)
    }

}
