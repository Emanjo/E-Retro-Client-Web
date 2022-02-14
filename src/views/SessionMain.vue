<template>
  <v-row>
    <v-col>
      <Card cardTitle="What went well" :listElements="whatWentWellList" />
    </v-col>
    <v-col>
      <Card cardTitle="Improvements" :listElements="improvementList" />
    </v-col>
    <v-col>
      <Card cardTitle="Actions" :listElements="actionList" />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Card from "../components/SessionCard.vue";
import ListModel from "../models/ListModel";

@Component({
  components: {
    Card,
  },
})
export default class SessionMain extends Vue {
  whatWentWellList: ListModel[] = [
    { title: "Test", description: "En beskrivelse" },
  ];
  improvementList: ListModel[] = [
    { title: "Lala", description: "En asdasdasdsa" },
  ];
  actionList: ListModel[] = [];
}
</script>

<style lang="scss" scoped></style>
