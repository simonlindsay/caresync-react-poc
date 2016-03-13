<!-- logic code -->
<script>
export default {

  props: ['appointment'],

  data: function () {
    return {
      person: this.appointment.careteam,
      title: this.appointment.details.date + " " + this.appointment.details.time
    }
  }
}
</script>

<!-- template code -->
<template>
  <card type="Upcoming Appointment" :title=title class="appointment">

    <care-team-member v-if="person.provider" :details="person" :compact="false"></care-team-member>

    <dl v-if="appointment.purpose" class="purpose">
      <dt class="bold">Purpose</dt>
      <dd>{{ appointment.purpose }}</dd>
    </dl>

    <dl v-if="appointment.details.address" class="address" >
      <dt class="bold">Location</dt>
      <dd>{{appointment.details.address}}</dd>
      <google-map :address=appointment.details.address></google-map>
    </dl>

    <div v-if="appointment.form == 'Office Visit'" class="call-practice">
      <button>Call Practice</button>
    </div>

  </card>
</template>

<!-- style code -->
<style scoped>

.purpose, .address {
  margin: 1em;
}

.purpose dd {
  margin: 0;
  position: relative;
}

.purpose dt::before, .address dt::before {
  content: ("");
  display: block;
  position: absolute;
  width: 1em;
  height: 1em;
  background: #5DC8FB;
  left: -0.75em;
  top: 0.35em;
  border-radius: 0.5em;
}

.person {
  list-style: none;
  padding: 0;
  background: #F3F3F3;
  padding: 1em;
  position: relative;
  padding-top: 2em;
  margin-top: 2em;
  border-radius: 4px;
}


.address dd {
  margin: 0;
}

.map {
  width: 100%;
  height: 8em;
  background-color: #eee;
  margin-bottom: 1em;
}

.call_practice {
  margin: 1em 0;
}

.card-appointment__address dt, .card-appointment__purpose dt {
  font-weight: bold;
  position: relative;
}

</style>
