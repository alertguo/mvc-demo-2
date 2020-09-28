import './app1.css'
import $ from 'jquery'

const $button1 = $('#add1')
const $button2 = $('#minus1')
const $button3 = $('#multiply2')
const $button4 = $('#divide2')
const $number = $('#number')
const n =localStorage.getItem('n') //初始化 n
$number.text(n || 100) // 初始化 number


$button1.on("click",() => {
  let n = parseInt($number.text())
  n += 1
  localStorage.setItem('n', n) // 存储数据，页面刷新之前的数据也还在
  $number.text(n)
})
$button2.on("click",() => {
  let n = parseInt($number.text())
  n -= 1
  localStorage.setItem('n', n)
  $number.text(n)
})
$button3.on("click",() => {
  let n = parseInt($number.text())
  n *= 2
  localStorage.setItem('n', n)
  $number.text(n)
})
$button4.on("click",() => {
  let n = parseInt($number.text())
  n /= 2
  localStorage.setItem('n', n)
  $number.text(n)
})