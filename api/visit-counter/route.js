import { kv } from '@vercel/kv';

export async function GET() {
  try {
    const currentCount = await kv.get('portfolio_visit_count') || 0;
    const newCount = Number(currentCount) + 1;
    
    await kv.set('portfolio_visit_count', newCount);
    
    return Response.json({ count: newCount });
  } catch (error) {
    console.error('Error updating visit count:', error);
    return Response.json({ error: 'Failed to update visit count' }, { status: 500 });
  }
}

export async function POST() {
  return GET();
}
