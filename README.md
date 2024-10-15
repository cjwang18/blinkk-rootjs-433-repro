This repo was created to reproduce the error seen in https://github.com/blinkk/rootjs/issues/433.

While the issue doesn't crop up in the development environment, it does after building.

To reproduce, run `npm run build` and then `node .next/standalone/server.js`.

Visit `http://localhost:3000` and observe the error.
