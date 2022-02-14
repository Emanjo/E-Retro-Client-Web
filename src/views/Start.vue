<template>
  <v-app style="background: #bbdefb">
    <v-main>
      <v-container fill-height>
        <v-row>
          <v-col>
            <v-row class="text-center">
              <v-col>
                <h1 color="dark">Create or join retro session</h1>
                <v-divider></v-divider>
              </v-col>
            </v-row>
            <v-row>
              <v-spacer></v-spacer>
              <v-col class="text-center">
                <v-btn
                  to="/session"
                  elevation="2"
                  class="mr-5 v-btn__custom"
                  color="success"
                  x-large
                  rounded
                  >Create session</v-btn
                >
                <v-btn
                  to="/session"
                  elevation="2"
                  class="v-btn__custom text-center"
                  color="primary"
                  x-large
                  rounded
                  >Join session</v-btn
                >
              </v-col>

              <v-spacer></v-spacer>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Start extends Vue {}
</script>

<style lang="scss" scoped></style>
