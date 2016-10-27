import Koa from 'koa';
import Router from 'koa-router';

const app = new Koa();
const router = new Router();
var bodyParser = require('koa-bodyparser');

app.use(bodyParser());
router.post('/users', async (next) => {
  console.log(next.request.body);
});

app.use(router.routes());
app.listen(3000);
