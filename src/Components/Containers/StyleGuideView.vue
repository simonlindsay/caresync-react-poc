<!-- logic code -->
<script>

import members from '../../Data/members.json'

export default {
  // some data to use when displaying components in our style guide
  data: function (){
    return {
      members: members,
      goal: { "id": 14, "title": "Keep your blood pressure and cholesterol under control.", "conditions": [ "Non-Insulin Dependent Diabetes" ], "tasks": [ "Check your feet daily for any possible sores or problem areas", "Take care of your teeth" ], "tracker": { "measurement": { "name": "Blood Pressure", "value": "139/95", "unit": "mm Hg", "date": "12/13/2015 15:45" }, "actions": [ "Add blood pressure measurement" ], "week": [ 1, 1, 1, 1, 1, 0, 0 ] } },
      careTeam: [ { "type": "CommunityProvider", "providerId": 1, "provider": { "firstName": "Cristina", "lastName": "Balsera", "credentials": "M.D.", "role": "Specialist", "photoURL": "http://www.brandonkidneyclinic.com/Portals/777/web_content/content_images/DrBalsera.jpg", "practice": { "phone": "(813) 571-3777", "name": "Kidney Diseases & High Blood Pressure Clinic", "address": "510 Vonderburg Drive, Suite 208 Brandon, FL 33511" } } }, { "type": "BillingProvider", "providerId": 2, "provider": { "firstName": "Michael Paul", "lastName": "Gimness", "credentials": "M.D.", "role": "Family Medicine", "practice": { "phone": "(813) 567-5679", "address": "1703 Thonotosassa Rd Ste A Family Medical Specialists Of Florida, Plc Plant City, FL 33563" } } }, { "type": "CommunityProvider", "providerId": 3, "provider": { "firstName": "Angelo", "lastName": "Paola", "credentials": "M.D., F.A.C.S.", "role": "Specialist", "practice": { "phone": "(813) 685-0827", "address": "1601 W Timberlane Dr Ste 500 Plant City, FL 33566" } } }, { "type": "Caresync", "csrId": 1, "provider": { "firstName": "Amanda", "lastName": "Carangelo", "role": "Case Manager", "contact": { "phone": "(813) 658-3729" } } } ],
      appointment: { "id": 1, "type": "Appointment", "form": "Office Visit", "state": "Completed", "details": { "date": "8/07/2015", "time": "11:30 am", "address": "26 Broadway, New York, NY 10004" }, "purpose": "Recheck of hypertension, recheck of hyperlipidemia, recheck of new onset diabetes type II, follow up for laboratory tests, and transition into care.", "related": { "conditions": [ "Diabetes Mellitus", "Diabetic Nephropathy", "Elevated Homocysteine", "Hyperlipidemia" ], "medication": [] }, "careteam": { "type": "Provider", "providerId": 2, "notes": "", "provider": { "firstName": "Michael Paul", "lastName": "Gimness", "credentials": "M.D.", "role": "Family Medicine", "practice": { "phone": "(813) 567-5679", "address": "1703 Thonotosassa Rd Ste A Family Medical Specialists Of Florida, Plc Plant City, FL 33563" } } } },
      place: { address: "2818 Cypress Ridge Blvd, Wesley Chapel" }
    }
  }
}
</script>

<!-- template code -->
<template>
  <main>

    <h1>Scenarios</h1>
    <ul>
      <li v-for="member in members">
        <a v-link="{ name: 'member', params: { memberId: member.id }}">{{ member.name }}</a>
      </li>
    </ul>

    <h1>Components</h1>

    <section>
      <div class="details">
        <h1>Goal Card</h1>
        <p>The goal card...</p>
        <textarea v-model="goal | json"></textarea>
      </div>
      <div class="component">
        <goal-card
          :goal="goal">
        </goal-card>
      </div>
    </section>

    <section>
      <div class="details">
        <h1>Care Team Card</h1>
        <p>The care team card...</p>
        <textarea v-model="careTeam | json"></textarea>
      </div>
      <div class="component">
        <care-team-card
          :careteam="careTeam">
        </care-team-card>
      </div>
    </section>

    <section>
      <div class="details">
        <h1>Appointment  Card</h1>
        <p>The appointment card...</p>
        <textarea v-model="appointment | json"></textarea>
      </div>
      <div class="component">
        <appointment-card
          :appointment="appointment">
        </appointment-card>
      </div>
    </section>

    <section>
      <div class="details">
        <h1>Google Map</h1>
        <p>The google map simply shows a location with the option to open Google Maps for more information.</p>
        <textarea v-model="place | json"></textarea>
      </div>
      <div class="component">
        <google-map :place="place.address"></google-map>
      </div>
    </section>

    <h1>Styles</h1>
    <p>Default CSS styles (headings, paragraph text, lists, colors etc) can be documented here.</p>

  </main>
</template>

<!-- style code -->
<style scoped>
main {
  margin: 1em;
}

main section {
  display: flex;
  background: #F8F8F8;
  padding: 1em;
  margin: 1em;
  position: relative;
}

section textarea {
  min-height: 30em;
  margin-bottom: 1em;
  box-sizing: border-box;
	width: 100%;
  padding: 0.5em;
  font-size: 0.8em;
}

section div {
  align-self: center;
  width: 50% !important;
  vertical-align: middle;
  padding: 0.5em;
}

section div:first-child {
  align-self: flex-start;
}

.component {
  vertical-align: middle;
}
</style>
