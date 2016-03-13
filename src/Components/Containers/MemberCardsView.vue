<!-- logic code -->
<script>
// grab data from json files
import memberData from '../../Data/members.json'
import careTeamData from '../../Data/care-team.json'
import providerData from '../../Data/providers.json'
import csrData from '../../Data/csrs.json'
import goalData from '../../Data/goal-cards.json'
import eventData from '../../Data/events.json'

export default {
  data: function() {
    return {

      members: memberData,
      memberId: this.$route.params.memberId,

      // load goal data for member. If no goal data for member reference set to []
      goals: goalData[this.$route.params.memberId] ? goalData[this.$route.params.memberId]["goals"] : [],

      // load event/appointment data for member.
      // also use providerId ad csrID to pull in data from providerData and csrData json files
      events: eventData[this.$route.params.memberId] ? eventData[this.$route.params.memberId]["events"].map(function(obj){
        if (obj.careteam.type == "Provider")  {
          obj.careteam.provider = providerData[obj.careteam.providerId]
        }
        if (obj.careteam.type == "CSR" )  {
          obj.careteam.provider = csrData[obj.careteam.csrId]
        }
        return obj
      }) : [],

      // load care team data for member.
      // also use providerId ad csrID to pull in data from providerData and csrData json files
      careteam: careTeamData[this.$route.params.memberId] ? careTeamData[this.$route.params.memberId]["careteam-members"].map(function(obj){
        if (obj.type == "BillingProvider" || obj.type == "CommunityProvider")  {
          obj.provider = providerData[obj.providerId]
        }
        if (obj.type == "Caresync" )  {
          obj.provider = csrData[obj.csrId]
        }
        return obj
      }) : []
    }
  },
  route: {
    // an option for vue-router. Means that when route changes and the same
    // component will be used that the entire compent is reloaded rather
    // than being reused (so that data that the compoent used is refreshed )
    canReuse: false
  }
}
</script>

<!-- template code -->
<template>
  <div>
    <nav>
      <ul>
        <li><a v-link="{ name: 'styleguide'}">Styleguide</a></li>
        <!-- create navigation to jump between members -->
        <li v-for="member in members">
          <a v-link="{ name: 'member', params: { memberId: member.id }}">{{ member.name }}</a>
        </li>
      </ul>
    </nav>
    <main>

      <!--
        Show care team.

        As much as possible try to pass in an object with all the info needed
        to display that component.

        This means that complexity is moved into this MemberCardsView component
        making individual components have less logic, and less overwhelming for
        people getting started to understand how the component works.
      -->
      <care-team-card
        :careteam="careteam">
      </care-team-card>

      <!-- show any appointments, or care calls -->
      <appointment-card
        v-for="appointment in events"
        :appointment="appointment">
      </appointment-card>

      <!-- show all goals -->
      <goal-card
        v-for="goal in goals"
        :goal="goal">
      </goal-card>

    </main>
  </div>
</template>

<!-- style code -->
<style scoped>

nav ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0;
  background: #F3F3F3;
}

nav li {

  padding: 0.5em
}

.v-link-active {
  font-weight: bold;
  text-decoration: none;
}

</style>
