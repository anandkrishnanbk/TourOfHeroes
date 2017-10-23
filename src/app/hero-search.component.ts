import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

//Observable class extensions
import 'rxjs/add/observable/of';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';


@Component({
    selector: 'selector-name',
    templateUrl: 'name.component.html'
})

export class NameComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
