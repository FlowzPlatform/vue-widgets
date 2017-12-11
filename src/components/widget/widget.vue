<template>
  <draggable :options="{'group': 'localStorage-example', 'handle':'.vw-widget-heading', 'filter': '.vw-widget-options', 'store': store}" >
    <div class="vw-widget" :class="[ themeClass ]" v-if="visible">
        <slot></slot>
    </div>
  </draggable>
</template>

<script type="text/babel">
  import Emitter from '../../mixins/emitter';
  import draggable from 'vuedraggable';

  export default {
    name: 'Widget',
    mixins: [Emitter],
    components: {
      draggable
    },
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
          Fullscreen: false,
          store: {
            /**
            * Get the order of elements. Called once during initialization.
            * @param   {Sortable}  sortable
            * @returns {Array}
            */
            get: function (sortable) {
              var order = localStorage.getItem(sortable.options.group.name)
              return order ? order.split('|') : []
            },

            /**
            * Save the order of elements. Called onEnd (when the item is dropped).
            * @param {Sortable}  sortable
            */
            set: function (sortable) {
              var order = sortable.toArray()
              localStorage.setItem(sortable.options.group.name, order.join('|'))
            }
          }
        }
    },
    computed: {
      themeClass() {
        return `vw-widget--${ this.theme } vw-widget-body-${ this.Minimizebody } vw-widget-fullscreen-${ this.Fullscreen }`;
      }
    },
    methods: {
      handleCloseClick(self) {
        this.visible = self
      },
      handleMinimizeBody(self) {
        this.Minimizebody = self
      },
      handleFullscreen(self) {
        this.Fullscreen = self
      }
    },
    created() {
      this.$on('close-click', this.handleCloseClick);
      this.$on('minimize-body', this.handleMinimizeBody);
      this.$on('fullscreen', this.handleFullscreen);  
    }
  };
</script>

