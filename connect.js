import { client } from "./util";

const iterations = 10;

const now = performance.now();

for (let i = 0; i < iterations; i++) {
    await client.connect();
    await client.db("admin").command({ ping: 1 })
    await client.close();
}

console.log((performance.now() - now) / iterations);

