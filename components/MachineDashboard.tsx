'use client';

import { useQuery } from '@tanstack/react-query';
import MachineList from './MachineList';
import MachineDetails from './MachineDetails';
import { useMachineStore } from '@/store/machineStore';

interface Machine {
  id: string;
  name: string;
  status: string;
}

function fetchMachines(): Promise<Machine[]> {
  return fetch('/api/machines').then((res) => res.json());
}

export default function MachineDashboard() {
  const { data, isLoading } = useQuery({ queryKey: ['machines'], queryFn: fetchMachines });
  const selectMachine = useMachineStore((state) => state.selectMachine);

  if (isLoading) {
    return <p>Loading machines...</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="md:col-span-1">
        {data && <MachineList machines={data} onSelect={selectMachine} />}
      </div>
      <div className="md:col-span-2">
        <MachineDetails />
      </div>
    </div>
  );
}
