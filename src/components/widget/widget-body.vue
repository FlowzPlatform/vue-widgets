<template>
  <div class="vw-widget-body">
    <slot></slot>
  </div>
</template>

<script type="text/babel">
  import Emitter from '../../mixins/emitter'
  export default {
    name: 'WidgetBody',
    mixins: [Emitter]
  };
</script>
