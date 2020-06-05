<template>
  <v-card>
    <v-card-title>
      Доклады и круглые столы
    </v-card-title>
    <v-card-text>
        <ul>
          <li v-for="topic in topics" :key="topic.id">
            <h3>{{topic.title}}</h3>
            <p>{{topic.brief}}</p>
          </li>
        </ul>
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
