<template>
  <div class="grid">
    <h1>Crypto Dashboard</h1>
    <div v-if="isLoading" class="loading">Loading...</div>
    <div class="metricContainer">
      <div v-for="item in coins.slice(0, 4)" v-bind:key="item.id" class="container-item">
        <metric
          v-if="!isLoading"
          class="widget phone-3-col tablet-2-col desktop-1-col"
          :value="Number(item.price).toFixed(2)"
          :label="item.name"
        />
      </div>
    </div>
    <div class="metricContainer">
      <div v-for="item in coins.slice(4, 8)" v-bind:key="item.id" class="container-item">
        <metric
          v-if="!isLoading"
          class="widget phone-3-col tablet-2-col desktop-1-col"
          :value="Number(item.price).toFixed(2)"
          :label="item.name"
        />
      </div>
    </div>
    <div class="chartContainer">
      <chart-svg
        v-if="!isLoading"
        title="Crypto currencies"
        :range="[0, 10000]"
        :values="coins.slice(0, 4).map(el => Number(el.price).toFixed(2))"
        :labels="coins.slice(0, 4).map(el => el.name)"
        class="chart"
      />

      <chart-svg
        v-if="!isLoading"
        title="Crypto currencies 2"
        :range="[0, 100]"
        :values="coins.slice(4, 8).map(el => Number(el.price).toFixed(2))"
        :labels="coins.slice(4, 8).map(el => el.name)"
        class="chart"
      />
    </div>
  </div>
</template>

<script>
import WidgetMetric from "@/components/grid/WidgetMetric";
import WidgetChartSVG from "@/components/grid/WidgetChartSVG";
import { mapGetters } from "vuex";

export default {
  name: "Grid",
  components: {
    metric: WidgetMetric,
    "chart-svg": WidgetChartSVG
  },
  computed: {
    ...mapGetters({
      coins: "widgets/coins",
      isLoading: "widgets/isLoading"
    })
  },
  mounted() {
    // load fresh data every time we land on the view
    this.$store.dispatch("widgets/loadDashboardData");
  }
};
</script>


<style lang="scss">
@import "./../../styles/mixins.scss";
@import "./../../styles/variables.scss";
.grid {
  background-image: linear-gradient(to top, #b224ef 0%, #7579ff 100%);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  h1 {
    font-size: 3em;
    padding: 3%;
    padding-top: 0;
    color: white;
  }
}
.metricContainer {
  display: flex;
  flex-direction: row;
  width: 90%;
  justify-content: space-between;
  margin: 0 auto;
}
.container-item{
  width: 23%;
}
.widget {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 10px 1% 0 1%;
  background: #ffffffb4;
  border-radius: 5px;
}
.chart {
  width: 49%;
  padding:0;
  margin: 0;
}
.chartContainer {
  width: 90%;
  margin: 0 auto;
  padding: 1%;
  display: flex;
  justify-content: space-between;
}
.loading {
  width: 100%;
  color: white;
  min-height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media screen and (max-width: 600px) {
  .grid {
    max-width: 600px;
  }
  .chartContainer{
    flex-direction:column;
    width: 100%;
  }

  .chart {
    width: 90%;
    margin: 0 auto;
    margin-top: 5%;
  }

  .widget {
    font-size: 0.5em;
  }

  .container-item {
    font-size: 0.7em;
  }
}
</style>
  