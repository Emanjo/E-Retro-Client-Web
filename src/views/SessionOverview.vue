<template>
  <v-row>
    <v-col>
      <SessionCardOverview
        cardTitle="What went well"
        :listElements="whatWentWellList"
      />
    </v-col>
    <v-col>
      <SessionCardOverview
        cardTitle="Improvements"
        :listElements="improvementList"
      />
    </v-col>
    <v-col>
      <SessionCardOverview cardTitle="Actions" :listElements="actionList" />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import SessionCardOverview from "../components/SessionCardOverview.vue";
import ListModel from "../models/ListModel";

@Component({
  components: {
    SessionCardOverview,
  },
})
export default class SessionOverview extends Vue {
  whatWentWellList: ListModel[] = [];
  improvementList: ListModel[] = [];
  actionList: ListModel[] = [];
}
</script>

<style lang="scss" scoped></style>
