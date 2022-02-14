<template>
  <v-app>
    <v-app-bar app color="primary" dark dense>
      <v-toolbar-title>E-Retro</v-toolbar-title>

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
      <v-container>
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
  menuItems = [
    { icon: "mdi-home", title: "Current session", link: "/session" },
  ];
}
</script>

<style lang="scss" scoped></style>
