<template lang="html">
  <div id="app">
    <mt-header fixed title="首页" style='z-index:1000'>
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button slot="right" v-show='!showNav' @click='filtrate'>筛选</mt-button>
    </mt-header>
    <mt-search
      v-show='showNav'
      v-model="value"
      cancel-text="取消"
      placeholder="搜索"
      style="position: fixed; top: 40px; width: 100%">
    </mt-search>
    <router-view :value='value' :openPickers='openPickers'></router-view>
    <loading :activeLoading='activeLoading'></loading>
  </div>
</template>

<script>
import loading from './components/loading.vue'
export default {
  name: 'app',
  data () {
    return {
      value: '',
      activeLoading: false,
      openPickers: false
    }
  },
components: {
  loading
},
  computed: {
    showNav() {
      return this.$route.meta.requiresAuth
    }
  },
  mounted() {
    Bus.$on('loading', (mag) => {
      this.activeLoading = mag
    })
  },
  methods: {
    filtrate() {
      if(this.openPickers) {
        this.openPickers = false
      } else {
        this.openPickers = true
      }
    }
  }
}
</script>

<style>
.mint-search {
  height: auto;
}
body {
  width: 100%;
  background-color: #f0efed;
}
.flip-list-move {
  transition: transform 1s;
}
/* =================================================================
* Reset Stylesheet for Mobile
* Author:Bon
* Author URI:http://www.ccwebsite.com/
* Date:2015-05-29
* Last Update:2015-10-20
* Version:1.2.2
* ================================================================== */
html{font-family: "Helvetica Neue", Helvetica, STHeiTi, sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}
html,body{-webkit-user-select:none;user-select:none;}
html,body,div,object,iframe,applet,object,h1,h2,h3,h4,h5,h6,p,blockquote,pre,address,dl,dt,dd,ol,ul,li,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video,progress{margin:0;padding:0;border:0;vertical-align:baseline}
a{text-decoration:none;-webkit-touch-callout:none;background-color:transparent}
li{list-style:none}
article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}
audio,canvas,progress,video{display:inline-block}
audio:not([controls]){display:none;height:0}
[hidden],template{display:none}
a:active,a:hover{outline:0}
abbr[title]{border-bottom:1px dotted}
b,strong{font-weight:bold}
dfn{font-style:italic}
h1{font-size:2em;margin:.67em 0}
small{font-size:80%}
sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}
sup{top:-0.5em}
sub{bottom:-0.25em}
img{border:0;-webkit-touch-callout:none;}
svg:not(:root){overflow:hidden}
figure{margin:1em 40px}
hr{-moz-box-sizing:content-box;box-sizing:content-box;height:0}
pre{overflow:auto}
code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}
a,button,input,optgroup,select,textarea{-webkit-tap-highlight-color:rgba(0,0,0,0);}
button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0;-webkit-appearance:none;outline:none;line-height:normal}
button{overflow:visible}
button,select{text-transform:none}
button,html input[type="button"],input[type="reset"],input[type="submit"]{-webkit-appearance:button;cursor:pointer}
button[disabled],html input[disabled]{cursor:default}
button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}
input{line-height:normal}
input[type="checkbox"],input[type="radio"]{box-sizing:border-box;padding:0}
input[type="number"]::-webkit-inner-spin-button,input[type="number"]::-webkit-outer-spin-button{height:auto}
input[type="search"]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box}
input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration{-webkit-appearance:none}
fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}
legend{border:0;padding:0}
textarea{overflow:auto}
optgroup{font-weight:bold}
table{border-collapse:collapse;border-spacing:0}
td,th{padding:0}
body{
-webkit-text-size-adjust:100%;
/*iPhone 和 Android 的浏览器纵向 (Portrate mode) 和橫向 (Landscape mode) 模式皆有自动调整字体大小的功能。控制它的就是 CSS 中的 -webkit-text-size-adjust。text-size-adjust 设为 none 或者 100% 关闭字体大小自动调整功能.*/
-webkit-tap-highlight-color:transparent;
/*比如在图片或者链接上，希望不出现被选中的颜色，可以怎么做呢？其实我们可以将属性-webkit-tap-highlight-color的值设置为透明就可以实现。当然也可以设置成其他颜色，也支持rgba*/
}
*:not(input,textarea) {
    -webkit-touch-callout: none;
    /*//长按屏幕时会禁止设备弹出列表按钮*/
    -webkit-user-select: none;
    /*//之所以放在这里是因为如果放到body中会导致个别Android机型（Google  Nexus，Android 4.2.2）输入框无法输入*/
}
select{-webkit-appearance:none;}
  /*//用来改变按钮和其他控件的外观,加上这个以后，select的高度就可以改变了。所以，当然也可以用于其他浏览器控件中}*/
select:focus {
outline:0;
-webkit-tap-highlight-color:transparent
}
/*//防止获取焦点时，出现边框*/
</style>
