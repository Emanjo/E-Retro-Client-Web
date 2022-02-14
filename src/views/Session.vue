<template>
  <v-app>
    <v-app-bar app color="primary" dark shrink-on-scroll>
      <v-toolbar-title>E-Retro</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-plus</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab
            v-for="(menuItem, index) in menuItems"
            :key="index"
            :to="menuItem.link"
            >{{ menuItem.title }}</v-tab
          >
        </v-tabs>
      </template>
    </v-app-bar>
    <v-main>
      <v-container fill-height>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Session extends Vue {
  menuItems = [{ icon: "mdi-home", title: "Home", link: "/session/home" }];
}
</script>

<style lang="scss" scoped>
.v-btn {
  &__custom {
    padding: 0px 10px 0px 10px;
  }
}
</style>
