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

    <v-footer v-if="!isEditingCard" color="#FFF9C4">
      <v-icon right @click="giveVote(listElement.id)"> mdi-thumb-up </v-icon>
      <v-icon right @click="takeVote(listElement.id)"> mdi-thumb-down </v-icon>
      <v-spacer></v-spacer>
      <v-chip color="primary">{{ votes }}</v-chip>
    </v-footer>

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
  votes: number = this.listElement.votes;

  giveVote(id: string): void {
    var maximumVotesToGive = this.$store.state.maximumNumberOfVotesToGive;

    if (this.votesGiven >= maximumVotesToGive) return;

    this.$store.commit("addVoteGiven", id);
    this.listElement.votes += 1;
    this.votes = this.listElement.votes;
  }

  get votesGiven(): number {
    return this.$store.getters.getNumberOfVotesGiven;
  }

  get votesLeft(): number {
    return this.$store.getters.getNumberOfVotesLeft;
  }

  takeVote(id: string): void {
    var maximumVotesToGive = this.$store.state.maximumNumberOfVotesToGive;

    if (this.votesGiven <= maximumVotesToGive && this.listElement.votes > 0) {
      this.$store.commit("removeVoteGiven", id);
      this.listElement.votes -= 1;
      this.votes = this.listElement.votes;
    }
  }

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
