import MachineDashboard from '@/components/MachineDashboard';

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Machine Health Dashboard</h1>
      <MachineDashboard />
    </main>
  );
}
