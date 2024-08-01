import Hapi from "@hapi/hapi";
import { PORT } from "./utils/env.js";

const init = async () => {
    const server = Hapi.server({
        port: PORT,
        host: "0.0.0.0",
    });

    server.route({
        method: "GET",
        path: "/",
        handler: (request, h) => {
            return "Hello from simple hapi ! 🧙🧪";
        },
    });

    await server.start();
    console.log("Server running on %s 🧙🪄🧪", server.info.uri);
};

process.on("unhandledRejection", (err) => {
    console.log(err);
    process.exit(1);
});

init();
