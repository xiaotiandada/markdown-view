<template>
  <div class="container">
    <markdown-view id="doc" :content="content1Html" class="container" />
  </div>
</template>

<script>
/* eslint-disable */

import markdownView from '@/components/markdown_view'
import { markdown as markdownIt, finishView } from '../static/bundle.js'

export default {
  name: 'App',
  components: {
    markdownView
  },
  data () {
    return {
      content: '',
      content1: '',
      content1Html: ''
    }
  },
  watch: {
    content1 () {
      // console.log('val', val)
      // const markdownItEditor = this.$mavonEditor.markdownIt
      // let md = markdownItEditor.render(val)

      // window.localStorage.setItem('md', md)
      // window.localStorage.setItem('md1', val)
    }
  },

  mounted () {
    // console.log('markdownIt', markdownIt)

    this.content = window.localStorage.getItem('md')
    this.content1 = window.localStorage.getItem('md1')

    this.content1Html = markdownIt.render(this.content1)
    // this.content1Html = this.content1

    this.$nextTick(() => {
      // this.finishViewContent()
    })
  },
  methods: {
    finishViewContent () {
      finishView($('#doc'))
    }
  },
  head: {
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js' }
    ]
  }
}
</script>

<style>
.container {
  max-width: 800px;
  margin: 40px auto;
}
</style>
