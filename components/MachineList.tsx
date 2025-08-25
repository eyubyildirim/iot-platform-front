'use client';

interface Machine {
  id: string;
  name: string;
  status: string;
}

export default function MachineList({ machines, onSelect }: { machines: Machine[]; onSelect: (id: string) => void; }) {
  return (
    <ul className="space-y-2">
      {machines.map((machine) => (
        <li key={machine.id}>
          <button
            className="w-full text-left p-2 rounded bg-white shadow hover:bg-gray-100"
            onClick={() => onSelect(machine.id)}
          >
            <div className="font-medium">{machine.name}</div>
            <div className="text-sm text-gray-500">Status: {machine.status}</div>
          </button>
        </li>
      ))}
    </ul>
  );
}
