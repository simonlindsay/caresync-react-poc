<!-- logic code -->
<script>
export default {
  props: {
    type: {
      type: String,
      default: 'Card Type'
    },
    title: {
      type: String
    }
  }
}
</script>

<!-- template code -->
<template>
  <section class="card">
    <h2>{{ type }}</h2>
    <h1>{{ title }}</h1>
    <slot>
    </slot>
  </section>
</template>

<!-- style code -->
<style scoped>
.card {
  padding: 1em;
  border: 1px solid #eee;
  background: white;
  margin: 1em auto;
  max-width: 30em;
  position: relative;
}

.card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 0.5em;
  background-color: #5DC8FB;
}
</style>
