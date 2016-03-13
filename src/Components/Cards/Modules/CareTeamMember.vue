<!-- logic code -->
<script>
export default {
  props: {
    details: {
      type: Object
    },
    compact: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<!-- template code -->
<template>

    <div class="provider" v-bind:class="{ 'compact': compact }">

      <div class="avatar">
        <img v-if="details.provider.photoURL" :src="details.provider.photoURL" class="photo"  />
        <div v-else class="photo" >{{ details.provider.firstName.substring(0,1)}}{{ details.provider.lastName.substring(0,1)}}</div>
      </div>

      <div class="details">
        <p class="name">
          {{ details.provider.firstName }}
          {{ details.provider.lastName }}
          {{ details.provider.credentials }}
        </p>
        <p class="role">
          {{ details.provider.role }}
        </p>
      </div>
      
    </div>

</template>

<!-- style code -->
<style scoped>

.provider {
  position: relative;
}

.photo {
  line-height: 3em;
  border-radius: 3em;
  width: 3em;
  height: 3em;
  min-width: 3em;
  background: #5DC8FB;
  color: white;
  font-size: bold;
  text-align: center;
  margin-right: 0.5em;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: -1.5em;
  left: 1em;
}

.details {
  padding: 1em;
  padding-top: 2em;
  margin-top: 2em;
  background: #F3F3F3;
}

.compact {
  display: flex;
}

.compact div, .compact img {
  position: static;
}

.compact .details {
  padding: 0;
  margin-top: 0;
  background: white;
}

.name {
  font-weight: bold;
}

.name, .role {
  margin: 0.25em;
}

</style>
