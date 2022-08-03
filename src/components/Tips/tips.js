// 引入组件
import tips from './tips.vue'
// 创建个空对象
const obj = {}
// 设置安装方法
obj.install = (Vue) => {
  // 1. 创建组件构造器
  const ToastConstructor = Vue.extend(tips)
  // 2. new 的方式，根据组件构造器，可以创建出来一个组件对象
  const popup = new ToastConstructor()
  // 3. 将组件对象手动挂载到某一个元素上挂载会替换元素内容,这里创建了一个div元素来作为被替换内容
  popup.$mount(document.createElement('div'))
  // 4. 将组件添加到dom中
  document.body.appendChild(popup.$el)
  // 设置调用方法
  Vue.prototype.$tips = popup
}
// 导出对象 
export default obj
