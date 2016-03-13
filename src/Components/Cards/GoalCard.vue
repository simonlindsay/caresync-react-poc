<!-- logic code -->
<script>
export default {
  // properties that this component uses, in this case only the object 'goal'
  props: {
    goal: {
      type: Object
    }
  },
  // declare other variables to be used in the component template
  // that are not passed in as a prop
  data: function () {
    return {
      // labels to use for the weekly tracker icons
      dayIndexes: ["M", "T", "W", "T", "F", "S", "S"]
    }
  }
}
</script>

<!-- template code -->
<template>

  <!-- see src/Helpers/CardContainer.vue for this card component -->
  <card
    class = "goal"
    type = "Goal"
    :title = goal.title >

    <!-- loop over tasks -->
    <ul>
      <li v-for="task in goal.tasks">
        {{task}}
      </li>
    </ul>

    <!-- show the tracker -->
    <div class="tracker">
      <h3>
        Tracker
        <!-- show the weekly progress chain -->
        <ul class="week">
          <li v-for="day in goal.tracker.week"
              class="day m-{{day}}">
            {{ dayIndexes[$index] }}
          </li>
        </ul>
      </h3>

      {{ goal.tracker.title }}

      <!-- if there is a measuremnt, then show it -->
      <div v-if="goal.tracker.measurement">
        <ul>
          <li>{{ goal.tracker.measurement.name }}</li>
          <li>{{ goal.tracker.measurement.value }} {{ goal.tracker.measurement.unit }}</li>
          <li v-if="goal.tracker.measurement.date">{{ goal.tracker.measurement.date }}</li>
        </ul>
      </div>

      <!-- show actions -->
      <ul class="actions">
        <li v-for="action in goal.tracker.actions"
            class="action index-{{[$index]}}">
          <a>{{ action }}</a>
        </li>
      </ul>
    </div>

  </card>
</template>

<!--
  Style code, 'scoped' means styles applied here only have
  local scope for elements in this component.
  can also use LESS, SASS but I'm just using CSS.
-->
<style scoped>

.tracker h3 {
  margin: 0.5em 0;
}

.week {
  display: inline-block;
  list-style: none;
  margin: 0;
  padding: 0;
}

.day {
  background: #eee;
  display: inline-block;
  width: 1em;
  height: 1em;
  margin: 0 0.25em;
  border-radius: 0.5em;
  text-align: center;
  padding: 0.25em;
  font-weight: normal;
  font-size: 0.8em;
  line-height: 1.1em;
}

.day.m-0 {
  background: #eee;
}

.day.m-1 {
  background: green;
  color: white;
}

.day.m-2 {
  background: blue;
  color: white;
}

.actions {
  list-style: none;
  padding: 0;
  width: 100%;
  display: flex;
}

.action {
  display: inline-block;
  border: 1px solid #eee;
  flex-grow: 1;
  text-align: center;
}

.action:hover {
  background: #eee;
}

.action a {
  padding: 1em;
  display: block;
  text-decoration: none;
}

.action.index-0 a:hover {
  background: green;
  color: white;
}

.action.index-2 a:hover {
  background: red;
  color: white;
}

</style>
