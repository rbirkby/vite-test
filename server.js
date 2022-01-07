import fs from 'fs'
import path from 'path'
import express from 'express'
import {build} from 'vite'

import { createServer as createViteServer } from 'vite'

async function createServer() {
  const app = express()

  await build();

  // Create Vite server in middleware mode. This disables Vite's own HTML
  // serving logic and let the parent server take control.
  //
  // In middleware mode, if you want to use Vite's own HTML serving logic
  // use `'html'` as the `middlewareMode` (ref https://vitejs.dev/config/#server-middlewaremode)
  const vite = await createViteServer({
    server: { middlewareMode: 'ssr' }
  })
  // use vite's connect instance as middleware
  app.use(vite.middlewares)

  app.use('/', express.static('dist'));

  app.listen(3000)
}

createServer()
