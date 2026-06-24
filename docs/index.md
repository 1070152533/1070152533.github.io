---
layout: home
---

<script setup>
import { data as posts } from './posts.data.ts'
</script>

<div class="home-header">
  <h1>May's Blog</h1>
  <p>记录技术学习与思考</p>
</div>

<ul class="post-list">
  <li v-for="post in posts" :key="post.url" class="post-item">
    <div class="post-title">
      <a :href="post.url">{{ post.frontmatter.title }}</a>
    </div>
    <div class="post-date">{{ post.frontmatter.date }}</div>
    <div class="post-excerpt" v-if="post.excerpt" v-html="post.excerpt"></div>
  </li>
</ul>

<div v-if="posts.length === 0" style="color: var(--vp-c-text-2);">
  还没有文章，敬请期待。
</div>
