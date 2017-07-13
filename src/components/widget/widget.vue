<template>
    <div class="vw-widget" :class="[ themeClass ]" v-if="visible">
        <slot></slot>
    </div>
</template>

<script type="text/babel">
  import Emitter from '../../mixins/emitter';

  export default {
    name: 'Widget',
    mixins: [Emitter],
    props: {
      theme: {
        type: String,
        default: 'light'
      }
    },
    data() {
        return {
            visible :true,
            colors: '',
            Minimizebody: true,
            Fullscreen: false
        }
    },
    computed: {
      themeClass() {
        return `vw-widget--${ this.theme } vw-widget-body-${ this.Minimizebody } vw-widget-fullscreen-${ this.Fullscreen }`;
      }
    },
    methods: {
      handleCloseClick(self) {
        this.visible = false
        console.log('self')
      },
      handleMinimizeBody(self) {
        this.Minimizebody = !this.Minimizebody
      },
      handleFullscreen(self) {
        this.Fullscreen = !this.Fullscreen
      }
    },
    mounted() {
        // this.theme = localStorage.getItem('color'+this.id)
        // To Store Color Value of :ColorBox='true' feature uncomment above aline
        this.$on('close-click', this.handleCloseClick);
        this.$on('minimize-body', this.handleMinimizeBody);
        this.$on('fullscreen', this.handleFullscreen);  
    }
  };
</script>

