import {init} from 'snabbdom'
import {classModule} from 'snabbdom/modules/class'

console.log(classModule);
window.onload = function () {

// 引入snabbdom模块
  let snabbdom = require('snabbdom');

  let patch = snabbdom.init([
    require('snabbdom/modules/class').default,
    // require('snabbdom/modules/props').default,
    // require('snabbdom/modules/style').default,
    // require('snabbdom/modules/eventlisteners').default
  ]);

  let h = require('snabbdom/h').default;

  let vnode = h('div#container2', {
    on: {
      click: function () {
        console.log('click')
      }
    }
  }, [
    h('div', {style: {fontWeight: 'bold', color: 'red'}}, 'a'),
    h('h5', {style: {fontWeight: 'bold'}}, 'e'),
    h('h1', {key: '1', style: {fontWeight: 'bold', color: 'red'}}, '1'),
    h('h2', {key: '2', style: {fontWeight: 'bold', color: 'red'}}, '2'),
    h('h3', {key: '3', style: {fontWeight: 'bold', color: 'red'}}, '3'),
    h('h4', {key: '4', style: {fontWeight: 'bold', color: 'red'}}, '4'),
    h('p', {style: {fontWeight: 'bold'}}, 'e'),
    h('div', {style: {fontWeight: 'bold', color: 'red'}}, 'c'),
  ]);

  let vnode2 = h('div#container2', {
    on: {
      click: function () {
        console.log('click')
      }
    }
  }, [
    h('div', {style: {fontWeight: 'bold', color: 'red'}}, 'a'),
    h('h4', {key: '4', style: {fontWeight: 'bold', color: 'red'}}, '4'),
    h('h3', {key: '3', style: {fontWeight: 'bold', color: 'red'}}, '3'),
    h('h2', {key: '2', style: {fontWeight: 'bold', color: 'red'}}, '2'),
    h('h1', {key: '1', style: {fontWeight: 'bold', color: 'red'}}, '1'),
    h('div', {style: {fontWeight: 'bold', color: 'red'}}, 'c'),
  ]);

  const containerEl = document.getElementById('container');
  patch(containerEl, vnode);
  setTimeout(() => patch(vnode, vnode2), 3000);
};

;(function () {
  const window = undefined;
  console.log('window is ', window);
})();
