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
import CardItemModel from "../models/CardItemModel";

@Component({
  components: {
    SessionCardOverview,
  },
})
export default class SessionOverview extends Vue {
  whatWentWellList: CardItemModel[] = [];
  improvementList: CardItemModel[] = [];
  actionList: CardItemModel[] = [];
}
</script>

<style lang="scss" scoped></style>
