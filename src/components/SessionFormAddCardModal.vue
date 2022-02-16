<template>
  <v-dialog v-model="dialog" max-width="600px">
    <template v-slot:activator="{ on, attrs }" @click.stop="dialog = true">
      <v-btn dark v-bind="attrs" v-on="on" fab small outlined>
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">Add card</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                @keydown.enter.exact="addCard"
                label="Title*"
                v-model="title"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-textarea
                @keydown.enter.exact="addCard"
                label="Description*"
                v-model="description"
                required
              ></v-textarea>
            </v-col>
          </v-row>
          <small> Ctrl + Enter for new line</small>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="warning" text @click="dialog = false"> Cancel </v-btn>
        <v-btn color="success" text @click="addCard"> Save </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import IDGenerator from "@/Utilities/IDGenerator";

@Component
export default class SessionFormAddCardModal extends Vue {
  title = "";
  description = "";
  dialog = false;

  addCard(): void {
    this.$emit("addCard", {
      title: this.title,
      description: this.description,
      id: IDGenerator.GenerateId(),
      votes: 0,
    });

    this.title = "";
    this.description = "";
    this.dialog = false;
  }
}
</script>
