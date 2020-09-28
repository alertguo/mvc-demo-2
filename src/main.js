import './reset.css'
import './global.css'

import x from './app1.js' // 这里的x就是导出来的c
import './app2.js'
import './app3.js'
import './app4.js'

x.init('#app1') // 页面中的 #app1 传给x这个模块