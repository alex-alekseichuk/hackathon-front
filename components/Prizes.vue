<template>
  <v-card>
    <v-card-title>
      Prizes
    </v-card-title>
    <v-card-text>
        <ul>
          <li v-for="prize in prizes" :key="prize.id" class="mt-2">
            <h3 v-if="prize.topic">{{prize.topic.title}}</h3>
            <h3 v-if="prize.quiz">{{prize.quiz.title}}</h3>
            <h4>Winners:</h4>
            <ul>
              <li v-for="winner in prize.winners" :key="winner.userId">{{winner.name}}} {{winner.brief}}</li>
            </ul>
          </li>
        </ul>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    name: "Prizes",
    data() {
      return {
      };
    },
    computed: {
      prizes () {
        return this.$store.state.prizes.list
      }
    },
    created() {
      this.$store.dispatch('prizes/load')
    },
    methods: {
    }
  }
</script>

<style scoped>

</style>
