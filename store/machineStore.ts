import { create } from 'zustand';

interface MachineState {
  selectedId?: string;
  selectMachine: (id: string) => void;
}

export const useMachineStore = create<MachineState>((set) => ({
  selectedId: undefined,
  selectMachine: (id) => set({ selectedId: id }),
}));
