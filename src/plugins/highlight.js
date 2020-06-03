import Vue from 'vue';
import 'highlight.js/styles/androidstudio.css';
// import 'highlight.js/styles/rrt.css';
// import 'highlight.js/styles/fruity.css';
import hljs from 'highlight.js';

//指令封装
Vue.directive('highlight', (el) => {
  let blocks = el.querySelectorAll('pre code')
  blocks.forEach((block) => {
    hljs.highlightBlock(block)
  })
})
