<template>
  <v-card color="#FFF9C4">
    <v-card-title v-if="!isEditingCard" class="text-h5" @click="editCard">
      {{ title }}

      <v-spacer></v-spacer>
      <v-btn color="red" v-on:click="removeCard" fab x-small dark outlined>
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-card-title>

    <v-card-subtitle v-if="!isEditingCard" @click="editCard">{{
      description
    }}</v-card-subtitle>

    <v-container v-if="isEditingCard" @keyup.esc="cancelEdit">
      <v-text-field
        v-model="title"
        required
        @keydown.exact.enter="saveEdit"
      ></v-text-field>
      <v-textarea
        v-model="description"
        @keydown.exact.enter="saveEdit"
        required
      ></v-textarea>
      <small
        >Press Enter to save <br />
        Press Esc to cancel <br />
        Press CTRL + Enter for new line</small
      >
    </v-container>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

const CardProps = Vue.extend({
  props: {
    listElement: Object,
    index: Number,
  },
});

@Component
export default class SessionCardElement extends CardProps {
  isEditingCard = false;
  title: string = this.listElement.title;
  description: string = this.listElement.description;

  editCard(): void {
    this.isEditingCard = true;
  }

  saveEdit(): void {
    this.isEditingCard = false;

    this.listElement.title = this.title;
    this.listElement.description = this.description;
  }

  cancelEdit(): void {
    this.isEditingCard = false;
    this.title = this.listElement.title;
    this.description = this.listElement.description;
  }

  removeCard() {
    this.$emit("remove", this.index);
  }
}
</script>
