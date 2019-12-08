import {VNode, VNodeData} from '../vnode';
import {Module} from './module';

export type Classes = Record<string, boolean>

/**
 * 对比两个vnode之间的class进行更新
 * @param oldVnode
 * @param vnode
 */
function updateClass(oldVnode: VNode, vnode: VNode): void {
  var cur: any, name: string, elm: Element = vnode.elm as Element,
      oldClass = (oldVnode.data as VNodeData).class,
      klass = (vnode.data as VNodeData).class;

  // 都没有
  if (!oldClass && !klass) return;
  // 完全相同
  if (oldClass === klass) return;
  oldClass = oldClass || {};
  klass = klass || {};

  // 枚举所有的oldClass属性，如果新的vnode中不存在，那么移除
  for (name in oldClass) {
    if (!klass[name]) {
      elm.classList.remove(name);
    }
  }
  // 枚举所有新的class中的属性
  for (name in klass) {
    cur = klass[name];
    if (cur !== oldClass[name]) {
      (elm.classList as any)[cur ? 'add' : 'remove'](name);
    }
  }
}

export const classModule = {create: updateClass, update: updateClass} as Module;
export default classModule;
