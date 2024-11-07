import crypto from "crypto"
import { client } from "./util";

await client.connect();

const iterations = 500;

const now = performance.now();

for (let i = 0; i < iterations; i++) {
    await client.db().collection('test').insertOne({ name: crypto.randomUUID()})
}

console.log((performance.now() - now) / iterations);

await client.close();