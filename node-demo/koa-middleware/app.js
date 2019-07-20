const Koa = require("koa");
const morgan = require("koa-morgan");

const app = new Koa();

app.use(morgan("tiny"));

app.use(async (ctx, next) => {
  console.log("M1 : Step 1");
  await next();
  console.log("M1 : Step 2", ctx.request.headers);
});

app.use(async (ctx, next) => {
    console.log("M2 : Step 1");
    await next();
    console.log("M2 : Step 2");
  });

app.use(ctx => {
  ctx.body = "Hello from Koa";
});

app.listen(3030, () => {
  console.log("Server started at Port 3030...");
});
