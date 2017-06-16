import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SelectorService } from './selector.service';

@Component({
    selector: 'selector',
    template: `<!--<h2>Selector</h2>-->
                <table border="2px">
                        <tr>
                            <td>Id</td>
                            <td>{{selector.id}}</td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>{{selector.name}}</td>
                        </tr>
                        <tr>
                            <td>Description</td>
                            <td>{{selector.description}}</td>
                        </tr>
                        <tr>
                            <td>Priority</td>
                            <td>{{selector.priority}}</td>
                        </tr>
                        <tr>
                            <td>Maximum Views</td>
                            <td>{{selector.maxViews}}</td>
                        </tr>
                        <tr>
                            <td>Cool Down Period</td>
                            <td>{{selector.coolDownPeriod}}</td>
                        </tr>
                        <tr>
                            <td>Enabled</td>
                            <td>{{selector.enabled}}</td>
                        </tr>
                        <tr>
                            <td>Start Date</td>
                            <td>{{selector.startTime}}</td>
                        </tr>
                        <tr>
                            <td>End Date</td>
                            <td>{{selector.endTime}}</td>
                        </tr>
                        <tr>
                            <td>Rule</td>
                            <td height="200px" width="600px"> <pre>{{selector.rule}}</pre></td>
                        </tr>
               </table>
    `
})

export class SelectorComponent implements OnInit{
    abstract;
    errorMessage: string;
    selector: any = {};

    constructor(
        private selectorService: SelectorService,
        private route: ActivatedRoute) {

    }

    ngOnInit(){
        this.selectorService.getSelector(this.route.snapshot.params['id'])
            .subscribe(responseSelector => {
                this.selector = responseSelector,
                responseError => this.errorMessage = 'Retrieving Selector failed. ' || responseError;
            })
    }

}


