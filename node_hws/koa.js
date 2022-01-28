const Koa = require('koa');
const Router = require("@koa/router")

const app = new Koa();
const router = new Router()


router.get("/", (ctx) => {
    ctx.body = "<h1>INDEX PAGE</h1>"
})

router.get("/about", (ctx) => {
    ctx.body = "<h1>ABOUT PAGE</h1>"
})

router.get("/contact", (ctx) => {
    ctx.body = "<h1>CONTACT PAGE</h1>"
})



app.use(router.routes()).use(router.allowedMethods())

app.listen(3000)