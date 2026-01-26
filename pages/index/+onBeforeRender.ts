import metadata from '../../metadata.json'

export { onBeforeRender }

async function onBeforeRender() {
  return {
    pageContext: {
      metadata,
      title: metadata.name ?? 'Vijaykoushik S | Zero-to-One Architect'
    }
  }
}
