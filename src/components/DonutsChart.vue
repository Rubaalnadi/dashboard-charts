<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Donut Chart</h1>
        <div>
          <Pie :data="data" :options="options" />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, nextTick } from 'vue';
import { Pie } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

export default defineComponent({
  name: 'DonutsChart',
  components: {
    Pie
  },
  data() {
    return {
      data: {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [
          {
            label: 'Donut Chart Dataset',
            data: [300, 50, 100],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            hoverOffset: 4
          }
        ]
      },
      options: {
        plugins: {
          legend: {
            position: 'top' as const,
          },
          tooltip: {
            callbacks: {
              label: function(tooltipItem: any) {
                return tooltipItem.label + ': ' + tooltipItem.raw;
              }
            }
          }
        },
        cutout: '70%'
      }
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
