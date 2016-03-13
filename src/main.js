// import Vue framework
import Vue from 'vue'
import Resource from 'vue-resource'
import Router from 'vue-router'

// tell vue to use the packages loaded from vue-resource, and vue-router
Vue.use(Resource)
Vue.use(Router)

// turn on verbose dubugging messages,
// warning: setting to true Vue may thow exceptions that stops app from rendering
Vue.config.debug = false

// import our component
import StyleGuideView from './Components/Containers/StyleGuideView.vue'
import MemberCardsView from './Components/Containers/MemberCardsView.vue'

import CareTeamCard from './Components/Cards/CareTeamCard.vue'
import CareTeamMember from './Components/Cards/Modules/CareTeamMember.vue'
import GoalCard from './Components/Cards/GoalCard.vue'
import AppointmentCard from './Components/Cards/AppointmentCard.vue'

import CardContainer from './Components/Helpers/CardContainer.vue'
import GoogleMap from './Components/Helpers/GoogleMap.vue'

// tell vue the tags we want to use for our components
Vue.component('card', CardContainer)
Vue.component('care-team-card', CareTeamCard)
Vue.component('care-team-member', CareTeamMember)
Vue.component('goal-card', GoalCard)
Vue.component('appointment-card', AppointmentCard)

Vue.component('google-map', GoogleMap)

// create the router object
var router = new Router()

// configure the router to tell it what component to swap out with <router-view> depending
// on what the current URL matches.
router.map({
  '/member/:memberId': {
    name: 'member',
    component: MemberCardsView
  },
  '/styleguide': {
    name: 'styleguide',
    component: StyleGuideView
  }
})

// the default route to use if none of our matching rules match
router.redirect({
  '*': '/styleguide'
})



// this is a bit cludgy, but we're creating an empty vue component that's used momentarially
// while the router matches and figures out which component to show
var App = Vue.extend({})

// start the router
router.start(App, '#app')
