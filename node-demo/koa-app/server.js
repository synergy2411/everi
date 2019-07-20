// npm init
// npm i koa --save
// npm i nodemon -g     > nodemon server.js
// npm i morgan --save
// npm i koa-router --save
// npm i koa-bodyparser --save

const Koa = require("koa");
const Router = require("koa-router");
const morgan = require("morgan");
const bodyParser = require("koa-bodyparser");

const app = new Koa();
const router = new Router();

app.use(bodyParser());

todos = [
  { label: "Pot the plant", status: "done" },
  { label: "Buy the books", status: "pending" },
  { label: "Spile the milk", status: "done" }
];

router.get("/todos/:id", async ctx => {
  const id = ctx.params.id;
  const todo = todos.filter((todo, index) => index == id);
  if (todo.length > 0) {
    return (ctx.body = todo);
  } else {
    ctx.body = { error: "Not Found", status: 404 };
  }
});

router.get("/todos", ctx => {
  ctx.body = todos;
});

router.post("/todos", ctx => {
  const todo = ctx.request.body;
  if (!todo) {
    return (ctx.body = { error: "Body not parsed", status: 402 });
  } else {
    todos.push(todo);
    ctx.body = ctx.request.body;
  }
});

router.delete("/todos/:id", ctx => {
  const id = ctx.params.id;
  const updatedTodos = todos.filter((todo, index) => index != id);
  if (updatedTodos.length < todos.length) {
    todos = [...updatedTodos];
    return (ctx.body = todos);
  } else {
    ctx.body = { error: "Not Found", status: 404 };
  }
});

router.put("/todos/:id", ctx => {
  const id = ctx.params.id;

  const updatedTodos = todos.filter((todo, index) => index != id);
  if (updatedTodos.length < todos.length) {
    todos.splice(id, 1, { ...ctx.request.body });
    return (ctx.body = todos);
  } else {
    ctx.body = { error: "Not Found", status: 404 };
  }
});

app.use(router.routes()).use(router.allowedMethods());

// app.use(ctx => {
//   ctx.body = { message: "Hello There" };
// });

app.listen(9000, () => {
  console.log("Server started at port 9000...");
});
