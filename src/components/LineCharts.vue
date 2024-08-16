<template>
  <div>
    <h1>Line Charts</h1>
    <v-sparkline
      :auto-line-width="autoLineWidth"
      :fill="fill"
      :gradient="gradient"
      :gradient-direction="gradientDirection"
      :line-width="width"
      :model-value="value"
      :padding="padding"
      :smooth="radius || false"
      :stroke-linecap="lineCap"
      :type="type"
      auto-draw
      @update:model-value="emitRendered"
    ></v-sparkline>
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick } from 'vue';

const gradients = [
  ['#222'],
  ['#42b3f4'],
  ['red', 'orange', 'yellow'],
  ['purple', 'violet'],
  ['#00c6ff', '#F0F', '#FF0'],
  ['#f72047', '#ffd200', '#1feaea'],
];

export default defineComponent({
  name: 'LineCharts',
  data() {
    return {
      width: 2,
      radius: 10,
      padding: 8,
      lineCap: 'round',
      gradient: gradients[5],
      value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
      gradientDirection: 'top',
      gradients,
      fill: false,
      type: 'trend',
      autoLineWidth: false,
    };
  },
  methods: {
    emitRendered() {
      this.$emit('rendered');
    }
  },
  mounted() {
    nextTick(() => {
      this.emitRendered();
    });
  },
});
</script>

<style scoped>
/* Add component-specific styles here */
</style>
