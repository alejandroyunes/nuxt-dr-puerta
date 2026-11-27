export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('render:html', (html) => {
    html.head = html.head.map((chunk) =>
      chunk.replace(/<link\b(?=[^>]*\brel="prefetch")(?=[^>]*\bas="script")[^>]*>/g, ''),
    )
  })
})
