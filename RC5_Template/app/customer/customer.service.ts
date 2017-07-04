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
export class CustomerService {
    constructor(private _http: Http, @Inject(APP_CONFIG) private _config: IAppConfig) {}

    getCustomers() {
        return this._http.get(this._config.customerEndpoint)
            .map((response:Response) => response.json())
            .catch(CustomerService._handleError);
    }

    static _handleError(error: Response) {
        return Observable.throw(error)
    }
}
