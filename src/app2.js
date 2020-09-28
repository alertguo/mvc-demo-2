import './app2.css'
import $ from 'jquery'

const $tabBar = $('#app2 .tab-bar')
const $tabContent = $('#app2 .tab-content')

$tabBar.on('click','li',(e)=>{
  const $li = $(e.currentTarget) // 获取 li
  // 使用currentTarget，即使li里面有span元素，监听的还是li
  $li
    .addClass('selected')
    .siblings()
    .removeClass('selected')
  const index = $li.index()
  $tabContent.children()
    .eq(index).addClass('active') //第index个变成block
    .siblings().removeClass('active') // 它的兄弟变成none
    // 永远不要在js里用 css 的 api ,比如下面的.css()
    // .eq(index).css({display:'block'}) //第index个变成block
    // .siblings().css({display:'none'}) // 它的兄弟变成none
})

$tabBar.children().eq(0).trigger('click') // 默认出发第一个事件