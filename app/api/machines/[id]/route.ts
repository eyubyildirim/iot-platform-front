const data: Record<string, any> = {
  '1': {
    id: '1',
    name: 'Conveyor A',
    status: 'OK',
    readings: [{ rms: 1.1, temperature: 55 }],
  },
  '2': {
    id: '2',
    name: 'Pump B',
    status: 'Warning',
    readings: [{ rms: 1.8, temperature: 68 }],
  },
};

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const item = data[params.id];
  if (!item) {
    return new Response('Not found', { status: 404 });
  }
  return Response.json(item);
}
