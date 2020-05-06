# vue-spa-tab

> 基于`vue-router`和`vuex`实现**单页应用**的`tab页设计`，在`router-view`上使用`keep-alive`保存页面的状态

## router
1. 页面组件需要显示定义 name，并与 route 中的 name 保持一致，用于 `keep-alive` 识别
2. `meta` 中存放标签的信息，
    type 用来标志页面的类型，TOP[顶级，切换会重置tab]、NORMAL[一般]
    name 标签页的名称

## store
定义ADD_TAB、DELETE_TAB、CHANGE_TAB_NAME管理tab

## 动态路由的状态保存
vue-router对于动态路由做一个优化：同一个动态路由，切换id，页面不会变化。

为了实现同一动态路由不同id的tab页的切换，将所有id缓存在一个数组中，tab的切换只是哪一个id的显示和隐藏。



