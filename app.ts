import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import {  green, bold } from "https://deno.land/std@0.63.0/fmt/colors.ts";

const env = Deno.env.toObject();
const PORT = env.PORT || 1150;
const HOST = env.HOST || '127.0.0.1';

const app = new Application();
const router = new Router();

router.get('/', (context) => {
    context.response.body = [
        {
            _id: 1,
            name: "test"
        }
    ]
});

app.use(router.routes());
await app.listen(`${HOST}:${PORT}`);