<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
          <v-chip
            v-if="item.title=='Quizzes'"
            x-small
            class="ma-2"
            color="red"
            text-color="white"
          >
            1
          </v-chip>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
<!--      <v-btn-->
<!--        icon-->
<!--        @click.stop="miniVariant = !miniVariant"-->
<!--      >-->
<!--        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>-->
<!--      </v-btn>-->
<!--      <v-btn-->
<!--        icon-->
<!--        @click.stop="clipped = !clipped"-->
<!--      >-->
<!--        <v-icon>mdi-application</v-icon>-->
<!--      </v-btn>-->
<!--      <v-btn-->
<!--        icon-->
<!--        @click.stop="fixed = !fixed"-->
<!--      >-->
<!--        <v-icon>mdi-minus</v-icon>-->
<!--      </v-btn>-->
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-toolbar-title v-text="name" />
<!--      <v-btn-->
<!--        icon-->
<!--        @click.stop="rightDrawer = !rightDrawer"-->
<!--      >-->
<!--        <v-icon>mdi-menu</v-icon>-->
<!--      </v-btn>-->
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
<!--    <v-navigation-drawer-->
<!--      v-model="rightDrawer"-->
<!--      :right="right"-->
<!--      temporary-->
<!--      fixed-->
<!--    >-->
<!--      <v-list>-->
<!--        <v-list-item @click.native="right = !right">-->
<!--          <v-list-item-action>-->
<!--            <v-icon light>-->
<!--              mdi-repeat-->
<!--            </v-icon>-->
<!--          </v-list-item-action>-->
<!--          <v-list-item-title>Switch drawer (click me)</v-list-item-title>-->
<!--        </v-list-item>-->
<!--      </v-list>-->
<!--    </v-navigation-drawer>-->
    <v-footer
      :fixed="fixed"
      app
    >
      <span>After Party &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: 'mdi-calendar',
          title: 'Talks',
          to: '/'
        },
        // {
        //   icon: 'mdi-apps',
        //   title: 'Talks',
        //   to: '/'
        // },
        {
          icon: 'mdi-lightbulb-on',
          title: 'Quizzes',
          to: '/quizzes'
        },
        {
          icon: 'mdi-arm-flex',
          title: 'Challenges',
          to: '/challenges'
        },
        {
          icon: 'mdi-gift',
          title: 'Prizes',
          to: '/prizes'
        },
        {
          icon: 'mdi-account-cog',
          title: 'My Profile',
          to: '/my-profile'
        },
        // {
        //   icon: 'mdi-chart-bubble',
        //   title: 'Inspire',
        //   to: '/inspire'
        // }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'After Party'
    }
  },
  computed: {
    name () {
      return this.$store.state.name
    }
  },
  created() {
    this.$store.dispatch('loadMyProfile')
  }
}
</script>
