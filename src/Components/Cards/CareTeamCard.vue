<!-- logic code -->
<script>
export default {
  props: {
    careteam: {
      type: Array
    }
  }
}
</script>

<!-- template code -->
<template>
    <card class="careteam" type="Care team">

      <ul class="people">
        <li class="person" v-for="member in careteam">
          <care-team-member :details="member" :compact="true"></care-team-member>
        </li>
      </ul>

    </card>
</template>

<!-- style code -->
<style scoped>

.people {
  list-style: none;
  padding: 0;
}

.person {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  padding: 1em 0;
  border-bottom: 1px solid #eee;
  color: #818181;
}

.person:first-child {
  padding-top: 0.5em;
}

.person:last-child {
  border-bottom: 0;
  padding-bottom: 0;
}

.person div p {
  margin: 0
}

</style>
