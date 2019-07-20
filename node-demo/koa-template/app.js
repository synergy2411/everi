const Koa = require("koa");
const Router = require("koa-router");
const render = require("koa-ejs");
const path = require("path");
const bodyParser = require("koa-bodyparser")

const app = new Koa();
const router = new Router();

let username = "Foo";
let todos = ["Buy the pulses", "Purchase books", "Pot the plant"];

app.use(bodyParser());

render(app, {
  root: path.join(__dirname, "views"),
  layout : "layout",
  extName : "html",
  debug : false,
  cache : false
});

router.get("/", async ctx => {
    await ctx.render("index", {username});
});

router.get("/todos", async ctx => {
    await ctx.render("todos", {todos});
});

router.get("/add", async ctx => {
    await ctx.render("add")
})

router.post("/addnew", async ctx => {
    console.log(ctx.request.body.newitem);
    todos.push(ctx.request.body.newitem)
    await ctx.redirect("/todos")
})


// Create POST route '/add'
// Create form for accepting todo item
// Update the todos by inserting new item

app.use(router.routes()).use(router.allowedMethods());

app.listen(3030, () => {
  console.log("Server listeneing on Port 3030..");
});
