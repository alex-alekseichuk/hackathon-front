<template>
  <v-card>
    <v-card-title>
      06 Jun 2020
    </v-card-title>
    <v-card-text>

            <v-card v-for="topic in topics" :key="topic.id"
              class="mx-auto mt-2"
              outlined
            >
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="overline mb-4">TALK</div>
                  <v-list-item-title class="headline mb-1">{{topic.title}}</v-list-item-title>
                  <v-list-item-subtitle>{{topic.start}} - {{topic.end}}</v-list-item-subtitle>
                  <v-card-text>
                    <p>
                      {{topic.brief}}
                    </p>
                    <p>
                      Speeker: <n-link :to="`/users/${topic.speakers[0].id}`">{{topic.speakers[0].name}}</n-link>
                    </p>
                    <p>
                      URL: <a :href="topic.url">{{topic.url}}</a>
                    </p>
                  </v-card-text>
                </v-list-item-content>

                <v-list-item-avatar
                  tile
                  size="80"
                  color="grey"
                ></v-list-item-avatar>
              </v-list-item>

              <v-card-actions>
                <n-link to="/quizzes/1"><v-btn text v-if="topic.quizId">Quiz</v-btn></n-link>
                <v-btn text v-if="topic.challengeId">Challenge</v-btn>
                <v-btn text v-if="topic.prizes">Prizes</v-btn>
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
    name: "Topics",
    data() {
      return {
      };
    },
    computed: {
      topics () {
        return this.$store.state.topics.list
      }
    },
    created() {
      this.$store.dispatch('topics/load')
    },
    methods: {
    }
  }
</script>

<style scoped>

</style>
