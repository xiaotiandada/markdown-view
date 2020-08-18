<template>
  <div class="container">
    <markdownView :content="content" class="container" id="doc"></markdownView>
  </div>
</template>

<script>
/* eslint-disable */
import markdownView from '@/components/markdown_view'

let markdown = null
let finishView = null

if (process.client) {
  let md = require('markdown-render-js')

  markdown = md.markdown
  finishView = md.finishView 
}

// import { markdown } from "markdown-render-js"
console.log('md', markdown, finishView)

const markdownI = require('markdown-it')({
  html: true,
  breaks: true
})
// import $ from 'jquery'

export default {
  head: {
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js' }
    ]
  },
  components: {
    markdownView
  },
  async asyncData({ $axios }) {
    const res = await $axios('https://apitest.smartsignature.io/post/ipfs/QmRddyav6FuVCwxKStJSroKj622QcNjqEa4P2m4aAhua38')
    // console.log('res', res.data)
    return {
      content: res.data.data.content
    }
  },
  data() {
    return {
      content: '',
      content1: ''
    }
  },
  created() {
    if (process.browser) {
      // console.log('content', this.content)
      this.content = markdown.render(this.content)
    } else {
      this.content = markdownI.render(this.content)
    }
    

  },
  watch: {
    content() {
      this.$nextTick(() => {
        if ($) {
          finishView($('#doc'))
        } else if (jQuery) {
          finishView(jQuery('#doc'))
        } else {
          console.log('not $ jQuery')
        }
      })
    }
  },
  mounted() {
  

  },
}
</script>

<style>
.container {
  max-width: 800px;
  margin: 40px auto;
}
</style>
