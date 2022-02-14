<template>
  <v-app>
    <!-- Must have the app property -->
    <v-app-bar app></v-app-bar>

    <v-container> Hello World </v-container>
  </v-app>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class HelloWorld extends Vue {
  // Declared as component data
  message = "Hello World!";
  message = "Hello World!";
}
</script>

<style lang="scss"></style>
