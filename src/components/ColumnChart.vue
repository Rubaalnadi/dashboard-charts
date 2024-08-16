<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Column Chart</h1>
        <div>
          <Bar :data="data" :options="options" />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, nextTick } from 'vue';
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

export default defineComponent({
  name: 'ColumnChart',
  components: {
    Bar
  },
  data() {
    return {
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Sales',
            backgroundColor: '#42A5F5',
            data: [40, 55, 75, 85, 70, 60, 80]
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top' as const,
          },
          tooltip: {
            callbacks: {
              label: function(tooltipItem: any) {
                return tooltipItem.dataset.label + ': ' + tooltipItem.raw;
              }
            }
          }
        },
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
          }
        }
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
