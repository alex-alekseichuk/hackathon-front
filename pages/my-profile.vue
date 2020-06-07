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

      <v-card class="elevation-12">
        <v-toolbar
          dark
          flat
        >
          <v-toolbar-title>My Contacts</v-toolbar-title>
        </v-toolbar>
        <v-form>
          <v-card-text>
            <v-text-field
              id="name"
              label="Name"
              name="name"
              prepend-icon="mdi-account"
              type="text"
              disabled
              v-model="name"
            ></v-text-field>
            <v-text-field
              id="company"
              label="Company"
              name="company"
              prepend-icon="mdi-domain"
              type="text"
              disabled
              v-model="company"
            ></v-text-field>
            <v-text-field
              id="email"
              label="Email"
              name="email"
              prepend-icon="mdi-email"
              type="text"
            ></v-text-field>
            <v-text-field
              id="linkedin"
              label="Linkedin"
              name="linkedin"
              prepend-icon="mdi-linkedin"
              type="text"
            ></v-text-field>
            <v-text-field
              id="github"
              label="GitHub"
              name="github"
              prepend-icon="mdi-github"
              type="text"
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary">Save</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>

      <v-card class="elevation-12 mt-2">
        <v-toolbar
          dark
          flat
        >
          <v-toolbar-title>My Prizes</v-toolbar-title>
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
          <v-toolbar-title>My Quizzes</v-toolbar-title>
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
          <v-toolbar-title>My Challenges</v-toolbar-title>
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
    name: "my-profile",
    computed: {
      name () {return this.$store.state.name},
      company () {return `${this.$store.state.role}, ${this.$store.state.company}`}
    }
  }
</script>

<style scoped>

</style>
