import $ from 'jquery'
import './app4.css'

const html = `
  <section id="app4">
    <div class="circle"></div>
    <div>鼠标放到圆里看看会发生什么</div>
  </section>
`
const $element = $(html).appendTo('body > .page')

const $circle = $('#app4 .circle')
$circle.on('mouseenter', () => {
  $circle.addClass('active')
}).on('mouseleave', () => {
  $circle.removeClass('active')
})