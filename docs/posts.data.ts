import { createContentLoader } from 'vitepress'

export default createContentLoader('posts/*.md', {
  excerpt: true,
  transform(data) {
    return data
      .filter(post => !post.frontmatter.draft)
      .sort((a, b) => +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date))
  }
})
