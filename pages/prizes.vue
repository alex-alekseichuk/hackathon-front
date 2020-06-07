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
      <prizes />
    </v-flex>
  </v-layout>
</template>

<script>

import Prizes from '~/components/Prizes.vue'

export default {
  components: {
    Prizes,
  },
  created() {
  }
}
</script>
