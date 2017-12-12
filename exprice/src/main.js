import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)
// import router from './router/index'
import GbHome from './pages/home'
Vue.component(GbHome.name, GbHome)

new Vue({
    el: '#app',
    data() {
        return {
        }
    }
})


Vue.filter('dCurrency', function (value) {
    return '￥' + value
})
Vue.filter('dTofixed', function (value) {
    var isNum = parseFloat(value);
    if (!isNum) {
        alert("Please entry a number")
        return "Please entry a number";
    } else {
        var value = Math.round(isNum * 100) / 100;
        var item = value.toString().split(".");
        if (item.length == 1) {
            value = value.toString() + ".00";
            return value;
        }
        if (item.length > 1) {
            if (item[1].length < 2) {
                value = value.toString() + "0";
            }
            return value;
        }
    }
})
