export async function GET() {
  return Response.json([
    { id: '1', name: 'Conveyor A', status: 'OK' },
    { id: '2', name: 'Pump B', status: 'Warning' },
  ]);
}
