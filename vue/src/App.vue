<template>
  <div id="app">
    <markdownView :content="content1Html" class="container" id="doc"></markdownView>
    <!-- <mavon-editor v-model="content1" style="height: 200px;" /> -->
  </div>
</template>

<script>
import markdownView from './components/markdown_view'
import $ from 'jquery'
import { markdown, finishView } from "markdown-render-js"
console.log('md', markdown)
export default {
  name: 'App',
  components: {
    markdownView
  },
  data() {
    return {
      content: '',
      content1: '',
      content1Html: '',   
    }
  },
  mounted() {
    window.$ = $

    this.content = window.localStorage.getItem('md')
    this.content1 = window.localStorage.getItem('md1')

    this.content1Html = markdown.render(this.content1)

    this.$nextTick(() => {
      this.finishViewContent()
    })

  },
  watch: {
    content1() {
      // console.log('val', val)
      // const markdownItEditor = this.$mavonEditor.markdownIt
      // let md = markdownItEditor.render(val)

      // window.localStorage.setItem('md', md)
      // window.localStorage.setItem('md1', val)
    }
  },
  methods: {
    finishViewContent() {
      finishView($('#doc'))
    },
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container {
  max-width: 800px;
  margin: 40px auto;
}
</style>
