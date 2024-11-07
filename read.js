import { client } from "./util";

await client.connect();

const iterations = 10;

const now = performance.now();

for (let i = 0; i < iterations; i++) {
    await client.db().collection('test').find().toArray();
}

console.log((performance.now() - now) / iterations);

await client.close();