---
title: 归档
---

<script setup>
import { data as posts } from './posts.data.ts'
</script>

# 归档

<ul class="post-list">
  <li v-for="post in posts" :key="post.url" class="post-item">
    <div class="post-title">
      <a :href="post.url">{{ post.frontmatter.title }}</a>
    </div>
    <div class="post-date">{{ post.frontmatter.date }}</div>
  </li>
</ul>

<div v-if="posts.length === 0" style="color: var(--vp-c-text-2);">
  还没有文章。
</div>
