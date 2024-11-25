import fetch from 'node-fetch';

const luksoTestnetRPC = 'https://rpc.testnet.lukso.network';

export async function GET(request) {
    try {
        const response = await fetch(luksoTestnetRPC, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                jsonrpc: '2.0',
                method: 'eth_blockNumber',
                params: [],
                id: 1,
            }),
        });

        const data = await response.json();
        const blockNumberHex = data.result;
        const blockNumber = parseInt(blockNumberHex, 16);

        return new Response(JSON.stringify({ blockNumber }), {
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        return new Response(
            JSON.stringify({ error: 'Failed to fetch block number' }),
            {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            }
        );
    }
}
