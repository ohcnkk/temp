const http = require('@actions/http-client');

const base = new URL('https://httpbin.org/');

async function realVersion() {
    const latest = new URL(`/get`, base)
    const client = new http.HttpClient('', '', { allowRedirects: true });
    const res = await client.head(latest);

    console.log(res.message.statusCode)
}

module.exports = () => {
    return realVersion()
}
