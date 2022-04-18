import createServer from './utils/server';

const app = createServer();
const port = process.env.PORT || 3000;

app.listen(port, async () => {
  try {
    console.log(`app is listening at port ${port}`);
  } catch (e) {
    console.error(`app is not listening at ${port}`);
    process.exit(1);
  }
});
