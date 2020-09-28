import $ from 'jquery'
import './app3.css'

const $square = $('#app3 .square')
const localKey = 'app3.active'
const active = localStorage.getItem(localKey) === 'yes'
$square.toggleClass('active',active) // 第二个参数就表示ture就添加，否则不加
// 上面一句等价于下面几句
// if(active){
//   $square.addClass('active')
// }else{
//   $square.removeClass('active')
// }
$square.on('click',()=>{
  if($square.hasClass('active')){
    $square.removeClass('active')
    localStorage.setItem('localKey','no')
  }else{
    $square.addClass('active')
    localStorage.setItem('localKey','yes')
  }
})