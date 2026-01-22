import metadata from '../../metadata.json'

export { onBeforeRender }

async function onBeforeRender() {
  return {
    pageContext: {
      metadata,
      title: metadata.title ?? 'Vijaykoushik S | Zero-to-One Architect'
    }
  }
}
