import React from 'react'
import { hydrateRoot } from 'react-dom/client'
import type { PageContextClient } from 'vike/types'

export { onRenderClient }

function onRenderClient(pageContext: PageContextClient) {
  const { Page } = pageContext

  hydrateRoot(
    document.getElementById('root')!,
    <Page />
  )
}
