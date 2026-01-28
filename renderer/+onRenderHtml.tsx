import React from 'react'
import { renderToString } from 'react-dom/server'
import { dangerouslySkipEscape, escapeInject } from 'vike/server'
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

          <!-- Google tag (gtag.js) -->
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-S3T2XVC25J"></script>
          <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-S3T2XVC25J');
          </script>

          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>${title ?? 'Vijaykoushik S | Zero-to-One Architect'}</title>
          <meta name="description" content="Portfolio of a Senior Full Stack Developer & Technical Lead specializing in Greenfield SaaS Development. I architect scalable systems from zero to one." />
          <meta name="author" content="Vijaykoushik S" />

          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Vijaykoushik S Portfolio" />
          <meta property="og:title" content="Vijaykoushik S | Zero-to-One Architect" />
          <meta property="og:description" content="Senior Full Stack Developer & Technical Lead specializing in Greenfield SaaS Development. I architect scalable systems from zero to one." />

          <meta property="og:image" content="http://svijaykoushik.github.io/og_image.png" />
          <meta property="og:image:secure_url" content="https://svijaykoushik.github.io/og_image.png" />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:alt" content="A professional personal brand graphic for Vijay Koushik, Senior Software Developer. The left side features a complex, glowing cyan blueprint-style logo combining a winged horse (Pegasus) and a dragon, overlaid with the initials 'VKJ'. The right side displays the name 'VIJAY KOUSHIK' in a bold, cyan sans-serif font, with the title 'Sr. Software Developer' written below it in a clean, monospaced typeface against a dark navy background." />
          <meta property="og:url" content="https://svijaykoushik.github.io" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:locale:alternate" content="ta_IN" />
          <meta name="twitter:card" content="summary_large_image" />

          <link rel="icon" type="image/png" href="favicon-96x96.png" sizes="96x96" />
          <link rel="icon" type="image/svg+xml" href="favicon.svg" />
          <link rel="shortcut icon" href="favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
          <meta name="apple-mobile-web-app-title" content="VJ" />
          <link rel="manifest" href="site.webmanifest" />
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;600&family=Inter:wght@300;400;600;800&display=swap" rel="stylesheet">
          <script type="application/ld+json">
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Vijaykoushik S",
              "image": "https://svijaykoushik.github.io/avatar.jpg",
              "jobTitle": "Zero-to-One Architect | SaaS & Blockchain Engineer",
              "description": "Building complex solutions in SaaS, blockchain, and fintech with expertise in financial systems, Web3, and workforce analytics.",
              "url": "https://svijaykoushik.github.io",
              "sameAs": [
                "https://linkedin.com/in/svijaykoushik",
                "https://twitter.com/svijaykoushik",
                "https://github.com/svijaykoushik"
              ]
            }
          </script>
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
          <div id="root">${dangerouslySkipEscape(html)}</div>
        </body>
      </html>
    `
  }
}
