<template>
    <v-content>
      <v-card
        class="mx-auto my-6"
        color="white"
        dark
        max-width="90%"
        elevation="3"
      >
        <v-card-text>
          <GChart
            type="PieChart"
            :data="chartData"
            :options="chartOptions"
          />
          <div class="headline black--text">Nutrition Distribution</div>
        </v-card-text>
      </v-card>
      <v-card
        class="mx-auto my-6"
        color="white"
        dark
        max-width="90%"
        elevation="3"
      >
        <v-card-text class="v-size--x-large black--text">
          Average Order Value:
          <div class="headline">€32.16</div>
          Total money saved in discounts:
          <div class="headline">€133.32</div>
        </v-card-text>
      </v-card>

      <v-card
        class="mx-auto my-6"
        color="white"
        dark
        max-width="90%"
        elevation="3"
      >
        <v-card-text>
          <v-sheet color="white">
            <v-sparkline
              :value="value"
              color="black"
              height="100"
              padding="24"
              stroke-linecap="round"
              :label-size='13'
              line-width="2"
            >
              <template v-slot:label="item">
                €{{ item.value }}
              </template>
            </v-sparkline>
          </v-sheet>
          <div class="headline black--text">Purchases</div>
        </v-card-text>
      </v-card>


    </v-content>
</template>

<script>


export default {
  name: 'Design6',
  props: {
    source: String,
  },

  data() {
    return {
      value: [
        25,
        34,
        30,
        28,
        32,
        33,
        35,
      ],
      chartData: [
        ['Year', 'Sales'],
        ['Carbs', 30],
        ['Vegetables', 25],
        ['Fruits', 20],
        ['Dairy', 15],
        ['Snacks', 10],
      ],
      chartOptions: {
        title: '',
        backgroundColor: 'white',
        is3D: true,
        colors: ['blue', 'red', 'orange', 'brown', 'purple'],
        chartArea: { width: '80%', height: '80%' },
        legend: { textStyle: { color: 'black', fontSize: 13 }, alignment: 'center' },
      },
    };
  },

  methods: {
  },
};
</script>

<style scoped>

</style>
