<template>
    <v-container>
      <v-row>
        <v-col cols="12" md="6" v-if="showLineChart">
          <LineCharts @rendered="onLineChartRendered" />
        </v-col>
        <v-col cols="12" md="6" v-if="showDonutChart">
          <DonutsChart @rendered="onDonutChartRendered" />
        </v-col>
        <v-col cols="12" v-if="showColumnChart">
          <ColumnChart @rendered="onColumnChartRendered" />
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, nextTick } from 'vue';
  import LineCharts from './LineCharts.vue';
  import DonutsChart from './DonutsChart.vue';
  import ColumnChart from './ColumnChart.vue';
  
  export default defineComponent({
    name: 'PriorityLoader',
    components: {
      LineCharts,
      DonutsChart,
      ColumnChart,
    },
    setup() {
      const showLineChart = ref(true);
      const showDonutChart = ref(false);
      const showColumnChart = ref(false);
  
      const onLineChartRendered = () => {
        // Keep line chart visible and show donut chart after the line chart has rendered
        nextTick(() => {
            setTimeout(() => {
                showDonutChart.value = true;
            },2000)
        });
      };
  
      const onDonutChartRendered = () => {
        // Show column chart after the donut chart has rendered
        nextTick(() => {
            setTimeout(() => {
                  showColumnChart.value = true;

            },2000)
        });
      };
  
      const onColumnChartRendered = () => {
        // Optional: Actions after all charts are rendered
      };
  
      return {
        showLineChart,
        showDonutChart,
        showColumnChart,
        onLineChartRendered,
        onDonutChartRendered,
        onColumnChartRendered,
      };
    },
  });
  </script>
  
  <style scoped>
  /* Add any necessary styles here */
  </style>
  