import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class CampaignService {
    private _url = "http://localhost:8080/campaigns";

    constructor(private _http: Http) {}

    getCampaigns() {
        return this._http.get(this._url)
            .map((response:Response) => response.json())
            .do(data => console.log('Campaigns retrieved: '+ JSON.stringify(data)) )
            .catch(this.handleError);
    }

    getCampaigns2() {
        return [
            {	"name": "Campaign1",
                "description": "Description of Test Campaign 1",
                "owner": "Owner of Campaign 1",
                "creationTime": "2001-12-17T09:30:47Z",
                "startTime": "2001-12-17T09:30:47Z",
                "endTime": "2019-12-31T23:59:59Z",
                "score": "100",
                "enabled": true,
                "selectors": [{
                    "name": "Selector 1 of Test Campaign 2",
                    "description": "Head of household == [Head of family or Member] and Global Predictive Movers score != High",
                    "priority": "1",
                    "maxViews": "3",
                    "coolDownPeriod": "120",
                    "startTime": "2001-12-17T09:30:47Z",
                    "endTime": "2019-12-31T23:59:59Z",
                    "condition": {
                        "type": "all",
                        "conditions": [{
                            "type": "any",
                            "conditions": [
                                {
                                    "type": "test",
                                    "testFeed": "icd6",
                                    "testProperty": "stb.AttributesWithDescription.Head of household",
                                    "testValue": "Head of family",
                                    "testType": "String",
                                    "testOperation": "EQ"
                                },
                                {
                                    "type": "test",
                                    "testFeed": "icd6",
                                    "testProperty": "stb.AttributesWithDescription.Head of household",
                                    "testValue": "Member",
                                    "testType": "String",
                                    "testOperation": "EQ"
                                }
                            ]
                        },
                            {
                                "type": "not",
                                "conditions": [{
                                    "type": "test",
                                    "testFeed": "icd6",
                                    "testProperty": "stb.AttributesWithDescription.Global Predictive Movers score",
                                    "testValue": "High",
                                    "testType": "String",
                                    "testOperation": "EQ"
                                }]
                            }]
                    },
                    "enabled": "true"
                }, {
                    "name": "Selector 2 of Test Campaign 2",
                    "description": "Head of household == [Head of family] and Number of children in the family 0-5 == 0 and Number of children in the family 6-11 == 0 and Number of children in the family 12-15 == 0 and CAT != Y and DOG != Y",
                    "priority": "2",
                    "maxViews": "2",
                    "coolDownPeriod": "240",
                    "startTime": "2001-12-17T09:30:47Z",
                    "endTime": "2019-12-31T23:59:59Z",
                    "condition": {
                        "type": "all",
                        "conditions":
                            [
                                {
                                    "type": "test",
                                    "testFeed": "icd6",
                                    "testProperty": "stb.AttributesWithDescription.Head of household",
                                    "testValue": "Head of family",
                                    "testType": "String",
                                    "testOperation": "EQ"
                                },
                                {
                                    "type": "test",
                                    "testFeed": "icd6",
                                    "testProperty": "stb.AttributesWithDescription.Number of children in the family 0-5",
                                    "testValue": "Zero",
                                    "testType": "String",
                                    "testOperation": "EQ"
                                },
                                {
                                    "type": "test",
                                    "testFeed": "icd6",
                                    "testProperty": "stb.AttributesWithDescription.Number of children in the family 6-11",
                                    "testValue": "Zero",
                                    "testType": "String",
                                    "testOperation": "EQ"
                                },
                                {
                                    "type": "test",
                                    "testFeed": "icd6",
                                    "testProperty": "stb.AttributesWithDescription.Number of children in the family 12-15",
                                    "testValue": "Zero",
                                    "testType": "String",
                                    "testOperation": "EQ"
                                },
                                {
                                    "type": "not",
                                    "conditions": [{
                                        "type": "test",
                                        "testFeed": "icd6",
                                        "testProperty": "stb.AttributesWithDescription.Cat",
                                        "testValue": "Yes",
                                        "testType": "String",
                                        "testOperation": "EQ"
                                    }]
                                },
                                {
                                    "type": "not",
                                    "conditions": [{
                                        "type": "test",
                                        "testFeed": "icd6",
                                        "testProperty": "stb.AttributesWithDescription.Dog",
                                        "testValue": "Yes",
                                        "testType": "String",
                                        "testOperation": "EQ"
                                    }]
                                }
                            ]
                    },
                    "enabled": "true"
                }],
                "assets": [{
                    "name": "Test Campaign 1 - Advert 1 - 10 sec",
                    "fileName": "C:\\Users\\Public\\Videos\\Sample Videos\\Jupiler - 10 sec.wmv",
                    "duration": "10"
                }, {
                    "name": "Test Campaign 1 - Advert 2 - 20 sec",
                    "fileName": "C:\\Users\\Public\\Videos\\Sample Videos\\Jupiler - 20 sec.wmv",
                    "duration": "20"
                }, {
                    "name": "Test Campaign 1 - Advert 3 - 30 sec",
                    "fileName": "C:\\Users\\Public\\Videos\\Sample Videos\\Jupiler - 30 sec.wmv",
                    "duration": "30"
                }]
            },
            {	"name": "Campaign2",
                "description": "Description of Test Campaign 2",
                "owner": "Owner of Campaign 2",
                "creationTime": "2001-12-17T09:30:47Z",
                "startTime": "2001-12-17T09:30:47Z",
                "endTime": "2019-12-31T23:59:59Z",
                "score": "200",
                "enabled": true,
                "assets": [{
                    "name": "Test Campaign 2 - Advert 1 - 10 sec",
                    "fileName": "C:\\Users\\Public\\Videos\\Sample Videos\\Jupiler - 10 sec.wmv",
                    "duration": "10"
                }, {
                    "name": "Test Campaign 2 - Advert 3 - 30 sec",
                    "fileName": "C:\\Users\\Public\\Videos\\Sample Videos\\Jupiler - 30 sec.wmv",
                    "duration": "30"
                }]

            }
        ]
        //return this._http.get(this._url)
        //    .map((response:Response) => response.json());
    }

    private handleError(error: Response) {
        console.log('Management Service+++ error = ' + error)
    }

}
