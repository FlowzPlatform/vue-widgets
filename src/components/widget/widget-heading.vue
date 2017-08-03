<template>
  <div class="vw-widget-heading" v-bind:style="styles">
        <span v-if="headerShow" v-on:mouseover="changeHeader()" title="Edit">
            <slot>{{Titles}}</slot>
        </span>

        <div v-if="DeleteButton" class="vw-widget-options pull-right">
          <a v-bind:style="textClass" @click="close" title="Close Widget">
            <i class="fa fa-times"></i>
          </a>
        </div>

        <!-- Expand Component -->
        <div v-if="Expand" class="vw-widget-options pull-right">
          <a v-bind:style="textClass" @click="fullscreen" title="Fullscreen">
            <i v-if="!Fullscreen" class="fa fa-expand"></i>
            <i v-else class="fa fa-compress"></i>
          </a>
        </div>
        <!-- /Expand Component -->

        <!-- Collaps Component -->
        <div v-if="Collapse" class="vw-widget-options pull-right">
          <a v-bind:style="textClass" @click="minimizebody" title="Collapse">
            <i v-if="!Minimize" class="fa fa-plus"></i>
            <i v-else class="fa fa-minus"></i>
          </a>
        </div>
        <!-- /Collaps Component -->

        <!-- Reset Component -->         
        <div v-if="Reset" class="vw-widget-options pull-right">           
            <a v-bind:style="textClass" v-on:click="removeState()" title="Reset Component">
                <i class="fa fa-undo"></i>
            </a>         
        </div>         
        <!-- /Reset Component-->

        <!-- Color-Box Component -->
        <div v-if="ColorBox" class="vw-widget-options pull-right">
          <a v-bind:style="textClass">
            <i id="svg" class="fa fa-th-large"></i>
            <input class="text-color" type="color" v-model="Headcolor" value="#00dcff" v-on:change="setColor()" title="Change Color" style="border-color">
          </a>
        </div>
        <!-- /Color-Box Component -->

         <!-- Heading Edit Component -->
        <span v-if="editHeading">
          <input v-model="Titles" type="text" name="txtTitle" class="vw-widget-txt" v-on:keyup.enter="validate()" @mouseleave="validate()" v-bind:style="txtBoxClass">
        </span>
        <!-- /Heading Edit Component -->

         <!-- Text Color -->         
         <div v-if="TextColor" class="vw-widget-options pull-right">           
            <a v-bind:style="textClass">       
                <i id="svg" class="fa fa-paint-brush"></i>
                <input class="text-color" type="color" v-model="Textcolor" v-on:change="setTextColor()" title="Font Color">    
            </a>       
        </div>         
        <!-- /Text Color -->
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
      },
      isMinimize: {
        type: Boolean,         
        default: false  
      },
      Hcolor: {
        type: String
      },
      Tcolor:{
        type: String
      },
       HeaderEditable: {
        type: Boolean,         
        default: true       
      }
    },
    data() {
      return {
        headerShow: true,
        editHeading: false,
        Headcolor: this.Hcolor,
        color: '',
        Minimize: true,
        Fullscreen: false,
        Titles: this.Title,
        Textcolor: this.Tcolor,
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
      txtBoxClass() {         
          return {           
              'color': this.Textcolor,           
              'border-color': this.Textcolor         
          }       
      },
      textClass() {         
          return {
               'color': this.Textcolor
          }
      }
    },

    methods: {
      minimizebody(){
        this.Minimize = !this.Minimize
        localStorage.setItem('Minimize' + this.id,this.Minimize )
        this.dispatch('Widget', 'minimize-body', this.Minimize)
      },
      fullscreen(){
        this.Fullscreen = !this.Fullscreen
        this.dispatch('Widget', 'fullscreen', this.Fullscreen)
      },
      removeState() {
        localStorage.removeItem('Headcolor' + this.id)         
        localStorage.removeItem('Textcolor' + this.id)         
        localStorage.removeItem('title' + this.id)
        this.Titles = this.OldHeader
        this.Headcolor = this.Hcolor
        this.Textcolor = this.Tcolor
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
        if(this.HeaderEditable){
          this.headerShow = !this.headerShow
          this.editHeading = !this.editHeading
          localStorage.setItem('title' + this.id, this.Titles)
        }
      },
      close() {
        this.dispatch('Widget', 'close-click', false);
      },
      setColor() {
        // This Function is used for :ColorBoxNew Feature
        localStorage.setItem('Headcolor'+this.id, this.Headcolor)
      },
      setTextColor() {         
        localStorage.setItem('Textcolor'+this.id, this.Textcolor)       
      }
    },
    created() {
      this.OldHeader = this.Titles;
      if(localStorage.length > 0 && localStorage.getItem('title' + this.id) != null){
          this.Titles = localStorage.getItem('title' + this.id)
          this.Headcolor = localStorage.getItem('Headcolor' + this.id)
          this.Textcolor = localStorage.getItem('Textcolor' + this.id)
          this.Minimize =(localStorage.getItem('Minimize' + this.id) === 'true')?true:false
          this.dispatch('Widget', 'minimize-body',this.Minimize)
      }else{
          this.Minimize = !this.isMinimize
          this.dispatch('Widget', 'minimize-body',this.Minimize)
          localStorage.setItem('title' + this.id,this.Titles )
          localStorage.setItem('Headcolor' + this.id,this.Headcolor )
          localStorage.setItem('Textcolor' + this.id,this.Textcolor )
          localStorage.setItem('Minimize' + this.id,this.Minimize )
      }
    }
  };
</script>