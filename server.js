const dns2 = require("dns2");

const { Packet } = dns2;

const server = dns2.createUDPServer((request, send, rinfo) => {
    console.log(request)
    const response = Packet.createResponseFromRequest(request);
    const [question] = request.questions;
    const { name } = question;
    response.answers.push({
        name,
        type: Packet.TYPE.A,
        class: Packet.CLASS.IN,
        ttl: 300,
        address: "8.8.8.8",
    });
    send(response);
});

server.on("request", (request, response, rinfo) => {
    console.log(request.header.id, request.questions[0]);
});

server.listen(5333);
