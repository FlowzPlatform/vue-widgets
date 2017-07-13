<template>
  <div class="vw-widget-heading" v-bind:style="styles">
        <Icon name="comments"></Icon>
        <span v-if="headerShow" v-on:mouseover="changeHeader()" title="Edit">
            <slot>{{Titles}}</slot>
        </span>

        <div v-if="DeleteButton" class="vw-widget-options vw-pull-right">
          <a @click="close" title="Close Widget"><Icon name="times"></Icon></a>
        </div>

        <!-- Expand Component starts -->
        <div v-if="Expand" class="vw-widget-options vw-pull-right">
          <a @click="fullscreen" title="Fullscreen">
            <Icon v-if="!Fullscreen" name="expand"></Icon>
            <Icon v-else name="compress"></Icon>
          </a>
        </div>
        <!-- Expand Component ends-->

        <!-- Collaps Component starts -->
        <div v-if="Collapse" class="vw-widget-options vw-pull-right">
          <a @click="minimizebody" title="Collapse">
            <Icon v-if="Minimize" name="minus"></Icon>
            <Icon v-else name="plus"></Icon>
          </a>
        </div>
        <!-- Collaps Component ends -->

        <div v-if="ColorBox" class="vw-widget-options vw-pull-right">
          <div class="vw-widget-color">
            <Icon name="paint-brush"></Icon>
            <input  type="color" v-model="Headcolor" value="#00dcff" v-on:change="setColor()" title="Window Color" >
          </div>
         <!--  <i class="material-icons" v-on:click="colorSet()">format_color_fill</i> -->
        </div>
        <!-- Color-Box Component ends -->

         <!-- Heading Edit Component starts -->
        <span v-if="editHeading">
          <input v-model="Titles" type="text" name="txtTitle" class="vw-widget-txt" v-on:keyup.enter="validate()" @mouseleave="changeHeader()" v-bind:style="textClass">
        </span>
        <!-- Heading Edit Component ends -->

         <!-- Reset Component -->         
        <div v-if="Reset" class="vw-widget-options vw-pull-right">           
            <a v-on:click="removeState()" title="Reset Component">
                <Icon name="undo"></Icon>
            </a>         
        </div>         
        <!-- Reset Component ends -->

         <!-- Text Color -->         
         <div v-if="TextColor" class="vw-widget-options vw-pull-right">           
            <div class="vw-widget-color">             
                <Icon name="font"></Icon>
                <input type="color" v-model="Textcolor" v-on:change="setTextColor()" title="Font Color">           
            </div>         
        </div>         
        <!-- Text Color Ends -->
  </div>
</template>

<script type="text/babel">
  import Emitter from '../../mixins/emitter'
  export default {
    name: 'WidgetHeading',
    mixins: [Emitter],
    props: {
      DeleteButton: {
        type: Boolean,
        default: false
      },
      ColorBox: {
        type: Boolean,
        default: false
      },
      Expand: {
        type: Boolean,
        default: false
      },
      Collapse: {
        type: Boolean,
        default: false
      },
      Title: {
        type: String,
        default: 'Heading'
      },
      TextColor: {
        type: Boolean,         
        default: false       
      },
      Reset: {
          default:false
      },
      id: {
        type: Number
      }
    },
    data() {
      return {
        headerShow: true,
        editHeading: false,
        Headcolor: '#f5f5f5',
        color: '',
        Minimize: true,
        Fullscreen: false,
        Titles: this.Title,
        Textcolor: '#333',
        OldHeader: ''
      }
    },
    computed: {
      styles() {
        return {
          'background-color': this.Headcolor,
          'color': this.Textcolor
        };
      },
      textClass() {         
          return {           
              'color': this.Textcolor,           
              'border-color': this.Textcolor         
          }       
      }
    },

    methods: {
      minimizebody(){
        this.Minimize = !this.Minimize
        this.dispatch('Widget', 'minimize-body', this)
      },
      fullscreen(){
        this.Fullscreen = !this.Fullscreen
        this.dispatch('Widget', 'fullscreen', this)
      },
      removeState() {
        localStorage.removeItem('Headcolor' + this.id)         
        localStorage.removeItem('Textcolor' + this.id)         
        localStorage.removeItem('title' + this.id)
        this.Titles = this.OldHeader
        this.Headcolor = "#f5f5f5"
        this.Textcolor = "#333"
        //location.reload()
      },
      validate() {
        if(!this.Titles)
        {
          alert('Heading can not be null')
        } else {
          this.changeHeader()
        }
      },
      changeHeader() {
        this.headerShow = !this.headerShow
        this.editHeading = !this.editHeading
        localStorage.setItem('title' + this.id, this.Titles)
      },
      close() {
        this.dispatch('Widget', 'close-click', this);
      },
      setColor() {
        // This Function is used for :ColorBoxNew Feature
        localStorage.setItem('Headcolor'+this.id, this.Headcolor)
      },
      setTextColor() {         
        localStorage.setItem('Textcolor'+this.id, this.Textcolor)       
      }
    },
    mounted() {
        this.OldHeader = this.Titles;
        if(localStorage.length > 0 && localStorage.getItem('title' + this.id) != null){
            this.Titles = localStorage.getItem('title' + this.id)
            this.Headcolor = localStorage.getItem('Headcolor' + this.id)
            this.Textcolor = localStorage.getItem('Textcolor' + this.id)
        }else{
            localStorage.setItem('title' + this.id,this.Titles )
            localStorage.setItem('Headcolor' + this.id,this.Headcolor )
            localStorage.setItem('Textcolor' + this.id,this.Textcolor )
        }
      //localStorage.clear();
    }
  };
</script>