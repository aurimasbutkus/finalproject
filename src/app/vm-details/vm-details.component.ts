import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ROUTER_DIRECTIVES} from '@angular/router';

import {VMService} from '../services/Cluster/VMService';

import {IVirtualMachine} from '../dtos/VirtualMachine'

@Component({
  moduleId: module.id,
  selector: 'app-vm-details',
  templateUrl: 'vm-details.component.html',
  styleUrls: ['vm-details.component.css']
})
export class VmDetailsComponent implements OnInit {

  private _service: VMService;

  vmId: string;

  vm: IVirtualMachine;

  private _router: Router;
  private _route: ActivatedRoute;

  constructor(service: VMService, route: ActivatedRoute, router: Router) { 
    this._service = service;
    this._route = route;
    this._router = router;
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.vmId = params['virtualMachineId'];

      this.retrieveVM();
    });
  }

  private retrieveVM(): void {
    this._service.getItemById('/' + this.vmId).subscribe(vm => this.vm = vm);
  }
}
