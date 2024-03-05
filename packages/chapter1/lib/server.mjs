import { resolve, join } from 'path';
import express from 'express';
import livereload from 'livereload';
import livereloadMiddleware from 'connect-livereload';

const __dirname = resolve();
const app = express();
const liveServer = livereload.createServer({
    exts: ['html', 'js'],
    debug: true
});

console.log(join(__dirname, 'src'));

liveServer.watch('');
app.use(express.static(join(__dirname, 'src')))
app.use(livereloadMiddleware({
  port: 35729
}));

app.listen(8000, () => {
  console.log(`start on localhost:8000`)
});
