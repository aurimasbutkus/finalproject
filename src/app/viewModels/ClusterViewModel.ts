import {PhysicalMemory} from '../dtos/Host';
import {VirtualMemory} from '../dtos/VirtualMachine';

export class ClusterViewModel{
    clusterId: number
    name: string
    hostIds: number[]
}

export class HostViewModel{
    hostId: number
    clusterId: number
    name: string
    state: number
    processorCount: number
    physicalMemory: PhysicalMemory
    virtualMachineIds: number[]
}

export class VMViewModel{
    virtualMachineId: number
    hostId: number
    name: string
    state: number
    virtualProcessorCount: number
    virtualMemory: VirtualMemory
}