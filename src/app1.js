import './app1.css'
import $ from 'jquery'

// 数据相关放 m
const m = {
  data: {
    // 初始化数据
    n: parseInt(localStorage.getItem('n'))
  }
}
// 视图相关放 v
const v = {
  el: null,
  // 渲染 html
  html: `
  <div>
    <div class="output">
      <span id="number">{{n}}</span>
    </div>
    <div class="actions">
      <button id="add1">+1</button>
      <button id="minus1">-1</button>
      <button id="multiply2">×2</button>
      <button id="divide2">÷2</button>
    </div>
  </div>
`,
  init(container){
    v.container = $(container) // v.container变成用jquery封装的对象
    v.render()
  },
  // 新增和重新渲染 button
  render(){
    localStorage.setItem('n',m.data.n)
    // el为空新增，不为空就用新的替换旧的
    if(v.el === null){
      v.el = $(v.html.replace('{{n}}',m.data.n)).appendTo(v.container)
    }else{
      const newEl = $(v.html.replace('{{n}}',m.data.n))
      v.el.replaceWith(newEl)
      v.el = newEl
    }
  }
}
// 其他都放c
const c = {
  // 初始化并且绑定事件
  init(container){
    v.init(container)
    c.ui = {
      // 寻找重要的元素
      button1 : $('#add1'),
      button2 : $('#minus1'),
      button3 : $('#multiply2'),
      button4 : $('#divide2'),
      number : $('#number')
    }
    c.bindEvents()
  },
  bindEvents(){
    // 绑定鼠标事件
    v.container.on('click','#add1',()=>{
      // let n = m.data.n
      // n += 1
      // m.data.n = n
      m.data.n += 1
      v.render()
    })
    v.container.on('click','#minus1',()=>{
      m.data.n -= 1
      v.render()
    })
    v.container.on('click','#multiply2',()=>{
      m.data.n *= 2
      v.render()
    })
    v.container.on('click','#divide2',()=>{
      m.data.n /= 2
      v.render()
    })
  }
}

export default c // 导出 c

