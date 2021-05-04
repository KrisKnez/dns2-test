const { UDPClient } = require("dns2");

const resolve = UDPClient({ dns: "localhost", port: 5333 });

(async () => {
    const response = await resolve();
    console.log(response.answers);
})();
