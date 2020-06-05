<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <topics />
    </v-flex>
  </v-layout>
</template>

<script>

import Topics from '~/components/Topics.vue'

export default {
  components: {
    Topics,
  },
  created() {
    this.$store.dispatch('loadMyProfile')
  }
}
</script>
