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
      <quizzes />
    </v-flex>
  </v-layout>
</template>

<script>

import Quizzes from '~/components/Quizzes.vue'

export default {
  components: {
    Quizzes,
  },
  created() {
  }
}
</script>
