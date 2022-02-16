<template>
  <v-card class="mx-auto">
    <v-app-bar dark color="green">
      <v-toolbar-title>{{ cardTitle }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <SessionFormAddCardModal v-on:addCard="addToList" />
    </v-app-bar>

    <v-container>
      <draggable
        animation="150"
        :list="listElements"
        class="v-row"
        group="cards"
      >
        <v-col
          cols="12"
          v-for="(listElement, index) in listElements"
          :key="listElement.id"
          class="mousover"
        >
          <SessionCardElement
            :listElement="listElement"
            v-on:remove="removeFromList(index, listElement.id)"
            :index="index"
          />
        </v-col>
      </draggable>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import CardItemModel from "@/models/CardItemModel";
import Vue from "vue";
import Component from "vue-class-component";
import SessionFormAddCardModal from "./SessionFormAddCardModal.vue";
import SessionCardElement from "./SessionCardElement.vue";
import draggable from "vuedraggable";

const CardProps = Vue.extend({
  props: {
    listElements: Array,
    cardTitle: String,
  },
});

@Component({
  components: { SessionFormAddCardModal, SessionCardElement, draggable },
})
export default class SessionCardOverview extends CardProps {
  addToList(elementToAdd: CardItemModel): void {
    this.listElements.push(elementToAdd);
  }

  removeFromList(index: number, id: string): void {
    this.listElements.splice(index, 1);
    this.$store.commit("removeVotes", id);
  }
}
</script>
<style lang="scss" scoped>
.mousover {
  &:hover {
    cursor: grab;
  }
}
</style>
