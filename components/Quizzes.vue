<template>
  <v-card>
    <v-card-title>
      Quizzes
    </v-card-title>
    <v-card-text>

            <v-card
              v-for="quiz in quizzes" :key="quiz.id"
              class="mx-auto mt-2"
              outlined
              :to="{path: `/quizzes/${quiz.id}`}"
            >
              <v-card-title>{{quiz.title}}</v-card-title>
              <v-card-subtitle>{{quiz.status}}</v-card-subtitle>
              <v-card-actions>
                <v-btn text color="red" v-if="quiz.status=='active'" :to="{path:`/quizzes/${quiz.id}/run`}">Take part</v-btn>
                <v-btn text v-if="quiz.status=='done'">Try for fun</v-btn>
                <v-btn text color="green" v-if="quiz.status=='announced'">I'm in</v-btn>
                <v-spacer/>
                <v-btn class="mx-2" fab dark small>
                  <v-icon dark>mdi-share-variant</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>

    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    name: "Quizzes",
    data() {
      return {
      };
    },
    computed: {
      quizzes () {
        return this.$store.state.quizzes.list
      }
    },
    created() {
      this.$store.dispatch('quizzes/load')
    },
    methods: {
    }
  }
</script>

<style scoped>

</style>
