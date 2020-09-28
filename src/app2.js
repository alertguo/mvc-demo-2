import './app2.css'
import $ from 'jquery'

const html = `
  <section id="app2">
    <ol class="tab-bar">
      <li>1</li>
      <li>2</li>
    </ol>
    <ol class="tab-content">
      <li>不忘初心</li>
      <li>方得始终</li>
    </ol>
  </section>
`
const $element = $(html).appendTo('body>.page')
const $tabBar = $('#app2 .tab-bar')
const $tabContent = $('#app2 .tab-content')
const localKey = 'app2.index'
const index = localStorage.getItem(localKey) ?? 0

$tabBar.on('click','li',(e)=>{
  const $li = $(e.currentTarget) // 获取 li
  // 使用currentTarget，即使li里面有span元素，监听的还是li
  $li
    .addClass('selected')
    .siblings()
    .removeClass('selected')
  const index = $li.index()
  localStorage.setItem(localKey,index)
  $tabContent.children()
    .eq(index).addClass('active') //第index个变成block
    .siblings().removeClass('active') // 它的兄弟变成none
    // 永远不要在js里用 css 的 api
})

$tabBar.children().eq(index).trigger('click') // 默认出发第一个事件