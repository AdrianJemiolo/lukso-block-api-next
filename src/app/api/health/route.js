export async function GET(request) {
    return new Response(JSON.stringify({ status: 'UP' }), {
        headers: { 'Content-Type': 'application/json' },
    });
}
