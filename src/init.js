

export function initMixin(Vue) { // 就是给vue增加init 方法的
    Vue.prototype._init = function (options) { //用户初始化操作
        // vue vm.$options 就是获取用户的配置
        const vm = this;

        vm.$options = options; // 将用户的选项挂载到实例上

        // 初始化状态
        initState(vm)
    }



}
function initState(vm) {
    const opts = vm.$options // 获取所有的选项
    if (opts.data) {
        initData(vm)
    }

}
function initData(vm) {
    let data = vm.$options.data // data 可能是函数可能是对象

    data = typeof data === 'function' ? data.call(vm) : data;
    debugger
    console.log(data);
}