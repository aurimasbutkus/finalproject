import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Router, ActivatedRoute, ROUTER_DIRECTIVES} from '@angular/router';

import {HostService2} from '../services/Cluster/HostService2';
import {VMService} from '../services/Cluster/VMService';

import {HostViewModel, VMViewModel} from '../viewModels/ClusterViewModel';

import {IHost} from '../dtos/Host';
import {IVirtualMachine} from '../dtos/VirtualMachine'

@Component({
  moduleId: module.id,
  selector: 'app-host-details',
  templateUrl: 'host-details.component.html',
  styleUrls: ['host-details.component.css']
})
export class HostDetailsComponent implements OnInit {

  private _service: HostService2;

  private _vmservice: VMService;

  hostId: string;

  host: IHost;

  vms$: Observable<IVirtualMachine[]>;

  private _router: Router;
  private _route: ActivatedRoute;

  constructor(service: HostService2, route: ActivatedRoute, router: Router, vmservice: VMService) {
    this._service = service;
    this._route = route;
    this._router = router;
    this._vmservice = vmservice;
   }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.hostId = params['hostId'];

      this.retrieveHost();
      this.retrieveVMs();
    });
  }

  private retrieveHost(): void {
    this._service.getItemById('/' + this.hostId).subscribe(host => this.host = host);
  }

  private retrieveVMs(): void {
    this.vms$ = this._vmservice.getAllItems();
  }

  onNavigate(vm: VMViewModel): void {
    console.log(`Navigating to '${vm.name}'...`);

    this._router.navigateByUrl(`virtualmachines/${vm.virtualMachineId}`);
  }
}
