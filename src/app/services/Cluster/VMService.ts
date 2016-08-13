import {Injectable} from '@angular/core';

import {Http} from '@angular/http';

import {IReadOnlyService, ReadOnlyServiceBase} from '../ReadOnlyService';

import {IVirtualMachine} from '../../dtos/VirtualMachine';

@Injectable()
export class VMService 
    extends ReadOnlyServiceBase<IVirtualMachine> {

    constructor(http: Http) {
        super(http, "http://192.168.10.106/api/virtualmachines");
    }
}