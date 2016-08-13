export class PhysicalMemory{
    value: number
    unit: number
}

export interface IHost{
    hostId: number
    clusterId: number
    name: string
    state: number
    processorCount: number
    physicalMemory: PhysicalMemory
    virtualMachineIds: number[]
}