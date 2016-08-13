import {Injectable} from '@angular/core';

import {Http} from '@angular/http';

import {IReadOnlyService, ReadOnlyServiceBase} from '../ReadOnlyService';

import {ICluster} from '../../dtos/Cluster';

@Injectable()
export class ClusterService 
    extends ReadOnlyServiceBase<ICluster> {

    constructor(http: Http) {
        super(http, "http://192.168.10.106/api/clusters");
    }
}