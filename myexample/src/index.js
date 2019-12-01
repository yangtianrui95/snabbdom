import {init} from 'snabbdom'
import {classModule} from 'snabbdom/modules/class'
console.log(classModule);
window.onload = function () {

// 引入snabbdom模块
  let snabbdom = require('snabbdom');

  let patch = snabbdom.init([
    // require('snabbdom/modules/class').default,
    // require('snabbdom/modules/props').default,
    // require('snabbdom/modules/style').default,
    // require('snabbdom/modules/eventlisteners').default
  ]);

  let h = require('snabbdom/h').default;

  let vnode = h('div#container', {
    on: {
      click: function () {
        console.log('click')
      }
    }
  }, [
    h('span', {style: {fontWeight: 'bold'}}, 'this is bold')
  ]);

  const containerEl = document.getElementById('container');
  patch(containerEl, vnode);
};
