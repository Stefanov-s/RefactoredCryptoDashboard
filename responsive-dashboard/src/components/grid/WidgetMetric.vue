<template>
  <div class="widget widget-metric">
    <h3 class="value">{{value}}</h3>
    <h4 class="label">{{label}}</h4>
  </div>
</template>

<script>
export default {
  name: 'WidgetMetric',
  props: {
    value: {
      type: [String, Number],
      required: true
    },
    label: {
      type: [String, Number],
      default: ""
    }
  }
}
</script>


<style lang="scss">
@import "./../../styles/variables.scss";

.widget.widget-metric {
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  .value {
    color: #7579ff;
    margin: auto 0 2px 0;
    font-size: 2em;
    flex-basis: 100%;
    padding-top: 10px;
  }
  .label {
    color: #444792;
    margin: 2px 0 auto 0;
    padding-bottom: 10px;
    flex-basis: 100%;
    font-size: 1rem;
  }
}

@media screen and (max-width: 700px) {
  .value {
    font-size: 1em;
  } 
}

@media screen and (max-width: 500px) {
  .value {
    font-size: 0.7em;
  } 
}
</style>
  