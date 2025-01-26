import IDoitClient from "../IDoitClient.js";

const client = new IDoitClient({
    url: 'https://demo.i-doit.com/src/jsonrpc.php',
    username: 'admin',
    password: 'admin',
    apiKey: 'c1ia5q',
    language: 'en'
});

console.info('Running client.categories.read()');
await client.categories.read(1000, 58);

console.info('Running client.categoryInfo.read()');
await client.categoryInfo.read(58);
