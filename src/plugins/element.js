import Vue from 'vue'
import { CheckboxGroup, Checkbox, MessageBox, Header, Switch, Main, Aside, Container, DatePicker, Loading, Table, TableColumn, Card, Button, FormItem, Form, Dialog, Pagination, Input, Radio, Option, Select, Carousel, CarouselItem, Dropdown, DropdownItem, DropdownMenu, Message, Slider } from 'element-ui'

import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';

// Vue.use(Button)

Vue.use(Container)
Vue.use(Main)
Vue.use(Aside)
Vue.use(Header)
Vue.use(Switch)


Vue.use(DropdownMenu)

Vue.use(DropdownItem)
Vue.use(Dropdown)
Vue.use(Slider)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Select)
Vue.use(Option)
Vue.use(Radio)
Vue.use(Input)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Button)
Vue.use(Dropdown)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Card)
Vue.use(DatePicker)
Vue.use(CheckboxGroup)
Vue.use(Checkbox)
// Vue.use(MessageBox)

Vue.use(Loading.directive);

Vue.component(CollapseTransition.name, CollapseTransition)

Vue.prototype.$loading = Loading.service;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$message = Message;
locale.use(lang)