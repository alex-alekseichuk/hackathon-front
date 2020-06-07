<template>
  <v-layout
    column
    justify-center
    align-center

  >
  <v-card
    outlined
  >
    <v-card-title>{{user.name}}</v-card-title>
    <v-card-subtitle>{{user.role}}, {{user.company}}</v-card-subtitle>
    <v-card-actions>
      <v-btn class="mx-2" fab dark small>
        <v-icon dark>mdi-linkedin</v-icon>
      </v-btn>
      <v-btn class="mx-2" fab dark small>
        <v-icon dark>mdi-github</v-icon>
      </v-btn>
    </v-card-actions>
    <v-card-actions>
      <v-btn text>
        Send Message
        <v-icon right dark>mdi-email</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>

  <v-card class="elevation-12 mt-2">
    <v-toolbar
      dark
      flat
    >
      <v-toolbar-title>Prizes</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      TODO
    </v-card-text>
  </v-card>

  <v-card class="elevation-12 mt-2">
    <v-toolbar
      dark
      flat
    >
      <v-toolbar-title>Quizzes</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      TODO
    </v-card-text>
  </v-card>

  <v-card class="elevation-12 mt-2">
    <v-toolbar
      dark
      flat
    >
      <v-toolbar-title>Challenges</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      TODO
    </v-card-text>
  </v-card>
  </v-layout>
</template>

<script>
  export default {
    name: "user",
    validate ({ params }) {
      // Must be a number
      return /^\d+$/.test(params.id)
    },
    computed: {
      user() {
        return this.$store.state.user;
      }
    },
    created() {
      this.$store.dispatch('user/load', {id: this.$route.params.id})
    }
  }
</script>

<style scoped>

</style>
