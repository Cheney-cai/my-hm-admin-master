import Vue from 'vue'
// 要先通过 npm 安装 element-ui
import { Button, Form, FormItem, Input, Message } from 'element-ui'
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Message)
// 全局挂载弹窗组件
Vue.prototype.$message = Message
