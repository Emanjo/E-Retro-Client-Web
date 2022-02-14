<template>
  <v-card class="mx-auto">
    <v-app-bar dark color="green">
      <v-toolbar-title>{{ cardTitle }}</v-toolbar-title>
    </v-app-bar>

    <v-container>
      <v-row>
        <v-col
          cols="12"
          v-for="(listElement, index) in listElements"
          :key="index"
        >
          <v-card color="#385F73" dark>
            <v-card-title class="text-h5">
              {{ listElement.title }}
            </v-card-title>

            <v-card-subtitle>{{ listElement.description }}</v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

const CardProps = Vue.extend({
  props: {
    listElements: Array,
    cardTitle: String,
  },
});

@Component
export default class SessionCard extends CardProps {}

interface list {
  title: string;
  description: string;
}
</script>
