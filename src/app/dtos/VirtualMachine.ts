export class VirtualMemory{
    value: number
    unit: number
}

export interface IVirtualMachine{
    virtualMachineId: number
    hostId: number
    name: string
    state: number
    virtualProcessorCount: number
    virtualMemory: VirtualMemory
}