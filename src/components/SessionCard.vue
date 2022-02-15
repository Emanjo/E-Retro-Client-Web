<template>
  <v-card class="mx-auto">
    <v-app-bar dark color="green">
      <v-toolbar-title>{{ cardTitle }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <SessionFormAddCardModal v-on:addElement="addToList" />
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

              <v-spacer></v-spacer>
              <v-btn
                color="red"
                v-on:click="removeFromList(index)"
                fab
                x-small
                dark
                outlined
              >
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </v-card-title>

            <v-card-subtitle>{{ listElement.description }}</v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import ListModel from "@/models/ListModel";
import Vue from "vue";
import Component from "vue-class-component";
import SessionFormAddCardModal from "./SessionFormAddCardModal.vue";

const CardProps = Vue.extend({
  props: {
    listElements: Array,
    cardTitle: String,
  },
});

@Component({
  components: { SessionFormAddCardModal },
})
export default class SessionCard extends CardProps {
  addToList(elementToAdd: ListModel): void {
    this.listElements.push(elementToAdd);

    this.$emit("updateList", this.listElements);
  }

  removeFromList(index: number): void {
    this.listElements.splice(index, 1);

    this.$emit("updateList", this.listElements);
  }
}
</script>
