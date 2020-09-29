import './app1.css'
import $ from 'jquery'

// 数据相关放 m
const m = {
  data: {
    // 初始化数据
    n: parseInt(localStorage.getItem('n')) || 100
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
  // 初始化
  init(container){
    v.el = $(container) // v.el变成用jquery封装的对象
  },
  // 新增和重新渲染 button
  render(n){
    localStorage.setItem('n',n)
    // el为空新增，不为空就用新的替换旧的
    if(v.el.children.length !== 0) v.el.empty()
    $(v.html.replace('{{n}}',n)).appendTo(v.el)
  }
}
// 其他都放c
const c = {
  // 初始化并且绑定事件
  init(container){
    v.init(container)
    v.render(m.data.n) // view = render(data);第一次渲染
    c.autoBindEvents()
  },
  events:{
    'click #add1': 'add',
    'click #minus1': 'minus',
    'click #multiply2': 'mul',
    'click #divide2': 'div'
  },
  add(){
    m.data.n += 1
    v.render(m.data.n)
  },
  minus(){
    m.data.n -= 1
    v.render(m.data.n)
  },
  mul(){
    m.data.n *= 2
    v.render(m.data.n)
  },
  div(){
    m.data.n /= 2
    v.render(m.data.n)
  },
  autoBindEvents(){
    for(let key in c.events){
      const value = c[c.events[key]]
      // c.events[key]只能取到add；外面再加一层得到四个方法
      const spaceIndex = key.indexOf(' ') // 得到索引
      const part1 = key.slice(0,spaceIndex)
      const part2 = key.slice(spaceIndex+1) // 分成两个字符串
      v.el.on(part1,part2,value)
    }
  }
}

export default c // 导出 c

