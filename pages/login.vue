<template>
  <v-card class="elevation-12">
    <v-toolbar
      dark
      flat
    >
      <v-toolbar-title>Вход в систему</v-toolbar-title>
    </v-toolbar>
    <v-form method="POST" action="/">
    <v-card-text>
        <v-text-field
          label="Имя пользователя"
          name="username"
          prepend-icon="mdi-account"
          type="text"
        ></v-text-field>

        <v-text-field
          id="password"
          label="Пароль"
          name="password"
          prepend-icon="mdi-lock"
          type="password"
        ></v-text-field>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" type="submit">Войти</v-btn>
    </v-card-actions>
    </v-form>
  </v-card>
</template>
<script>
  export default {
    layout: "centered",
    name: "login"
  }
</script>

<style scoped>

</style>
