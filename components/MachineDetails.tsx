'use client';

import { useQuery } from '@tanstack/react-query';
import { useMachineStore } from '@/store/machineStore';

function fetchMachine(id: string) {
  return fetch(`/api/machines/${id}`).then((res) => res.json());
}

export default function MachineDetails() {
  const selectedId = useMachineStore((state) => state.selectedId);
  const { data, isLoading } = useQuery({
    queryKey: ['machine', selectedId],
    queryFn: () => fetchMachine(selectedId!),
    enabled: !!selectedId,
  });

  if (!selectedId) {
    return <div>Select a machine to view details</div>;
  }

  if (isLoading) {
    return <div>Loading details...</div>;
  }

  return (
    <div className="bg-white shadow rounded p-4">
      <h2 className="text-xl font-bold mb-2">{data.name}</h2>
      <p className="mb-2">Status: {data.status}</p>
      <h3 className="font-semibold mb-1">Recent Readings</h3>
      <ul className="text-sm">
        {data.readings.map((r: any, idx: number) => (
          <li key={idx}>RMS: {r.rms} | Temp: {r.temperature}&deg;C</li>
        ))}
      </ul>
    </div>
  );
}
