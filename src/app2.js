import './app2.css'
import $ from 'jquery'

const eventBus = $(window)
const localKey = 'app2.index'
// 数据相关放 m
const m = {
  data: {
    index: parseInt(localStorage.getItem(localKey)) || 0
  },
  create() {},
  delete() {},
  update(data) {
    Object.assign(m.data, data) // data里的数据赋值到 m.data.n
    eventBus.trigger('m:updated')
    localStorage.setItem(localKey, m.data.index.toString())
  },
  get() {}
}
// 视图相关放 v
const v = {
  el: null,
  // 渲染 html
  html: (index) => {
    return `
    <div>
      <ol class="tab-bar">
        <li class="${index === 0 ? 'selected' : ''}" data-index="0">1</li>
        <li class="${index === 1 ? 'selected' : ''}" data-index="1">2</li>
      </ol>
      <ol class="tab-content">
        <li class="${index === 0 ? 'active' : ''}">不忘初心</li>
        <li class="${index === 1 ? 'active' : ''}">方得始终</li>
      </ol>
    </div>
  `
  },
  // 初始化
  init(container) {
    v.el = $(container) // v.el变成用jquery封装的对象
  },
  // 新增和重新渲染 button
  render(index) {
    // el为空新增，不为空就用新的替换旧的
    if (v.el.children.length !== 0) v.el.empty()
    $(v.html(index)).appendTo(v.el)
  }
}
// 其他都放c
const c = {
  // 初始化并且绑定事件
  init(container) {
    v.init(container)
    v.render(m.data.index) // view = render(data);第一次渲染
    c.autoBindEvents()
    eventBus.on('m:updated', () => {
      v.render(m.data.index)
    })
  },
  events: {
    'click .tab-bar li': 'x',
  },
  x(e) {
    const index = parseInt(e.currentTarget.dataset.index)
    m.update({index: index})
  },
  autoBindEvents() {
    for (let key in c.events) {
      const value = c[c.events[key]]
      // c.events[key]只能取到add；外面再加一层得到四个方法
      const spaceIndex = key.indexOf(' ') // 得到索引
      const part1 = key.slice(0, spaceIndex)
      const part2 = key.slice(spaceIndex + 1) // 分成两个字符串
      v.el.on(part1, part2, value)
    }
  }
}

export default c // 导出 c