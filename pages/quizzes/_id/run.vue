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
  </v-card>


      <v-card
        class="mx-auto mt-2"
        outlined
        v-for="question in quiz.questions" :key="question.id"
      >
        <v-card-title>{{question.text}}</v-card-title>
        <v-card-text>
          <v-radio-group>
            <v-radio v-for="answer in question.answers" :label="answer"></v-radio>
          </v-radio-group>
        </v-card-text>
      </v-card>


      <v-card
        class="mx-auto mt-2"
        outlined
      >
        <v-card-actions>
          <v-btn text :to="`/quizzes/${quiz.id}`">Done</v-btn>
        </v-card-actions>
      </v-card>

    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    name: "run-quiz",
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
