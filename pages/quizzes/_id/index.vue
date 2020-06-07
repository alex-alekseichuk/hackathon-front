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

  <v-card
          class="mx-auto"
          outlined
  >
    <v-card-title>{{quiz.title}}</v-card-title>
    <v-card-subtitle>{{quiz.status}}</v-card-subtitle>
    <v-card-text>{{quiz.brief}}</v-card-text>
    <v-card-actions>
      <v-btn text color="red" v-if="quiz.status=='active'" :to="{path: `/quizzes/${quiz.id}/run`}">Take part</v-btn>
      <v-btn text v-if="quiz.status=='done'">Try for fun</v-btn>
      <v-btn text color="green" v-if="quiz.status=='announced'">I'm in</v-btn>
      <v-spacer/>
      <v-btn class="mx-2" fab dark small>
        <v-icon dark>mdi-share-variant</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>

  <v-card class="elevation-12 mt-2">
    <v-toolbar
      dark
      flat
    >
      <v-toolbar-title>Leaderboard</v-toolbar-title>
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
          <v-toolbar-title>Discussion</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          TODO
        </v-card-text>
      </v-card>

    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    name: "quiz",
    validate ({ params }) {
      // Must be a number
      return /^\d+$/.test(params.id)
    },
    computed: {
      quiz() {
        return this.$store.state.quiz;
      }
    },
    created() {
      this.$store.dispatch('quiz/load', {id: this.$route.params.id})
    }
  }
</script>

<style scoped>

</style>
