import React from 'react'
import { renderToString } from 'react-dom/server'
import { escapeInject } from 'vike/server'
import type { PageContextServer } from 'vike/types'

export { onRenderHtml }

function onRenderHtml(pageContext: PageContextServer) {
  const { Page, title } = pageContext

  const html = renderToString(<Page />)

  return {
    documentHtml: escapeInject`
      <!DOCTYPE html>
      <html lang="en" class="scroll-smooth">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>${title ?? 'Vijaykoushik S | Zero-to-One Architect'}</title>
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;600&family=Inter:wght@300;400;600;800&display=swap" rel="stylesheet">
          <style>
            ::-webkit-scrollbar {
              width: 8px;
            }
            ::-webkit-scrollbar-track {
              background: #020617; 
            }
            ::-webkit-scrollbar-thumb {
              background: #1e293b; 
              border-radius: 4px;
            }
            ::-webkit-scrollbar-thumb:hover {
              background: #06b6d4; 
            }
          </style>
        </head>
        <body class="bg-slate-950 text-slate-300 antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
          <div id="root">${html}</div>
        </body>
      </html>
    `
  }
}
