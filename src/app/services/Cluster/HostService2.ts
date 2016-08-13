import {Injectable} from '@angular/core';

import {Http} from '@angular/http';

import {IReadOnlyService, ReadOnlyServiceBase} from '../ReadOnlyService';

import {IHost} from '../../dtos/Host';

@Injectable()
export class HostService2 
    extends ReadOnlyServiceBase<IHost> {

    constructor(http: Http) {
        super(http, "http://192.168.10.106/api/hosts");
    }
}