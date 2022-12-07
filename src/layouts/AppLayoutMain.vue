<template>
  
    <v-app id="app">
      <v-card
        class="mx-auto mt-4 overflow-hidden"
        height="auto"
        width="95%"
        elevation="2"
      >
        <v-app-bar 
            elevation="0"
            dark 
            color="deep-purple accent-4">
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
            <v-toolbar-title>Mangapad E-Comics</v-toolbar-title>
        </v-app-bar>
  
        <v-navigation-drawer
          v-model="drawer"
          temporary
          app
        >
          <v-list
            nav
          >
            <v-list-item-group
              v-model="group"
              active-class="deep-purple--text text--accent-4"
              class="pt-10 pl-5"
            >
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-home</v-icon>
                </v-list-item-icon>
                <v-list-item-title class="text-left">
                  <router-link to="/">Home</router-link>
                </v-list-item-title>
              </v-list-item>
  
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-account</v-icon>
                </v-list-item-icon>
                <v-list-item-title class="text-left">
                  <router-link to="/invoices">Invoices</router-link>
                </v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>
  
        <router-view></router-view>
  
      </v-card>
  
    </v-app>
  </template>
  
  <script>
    export default {
      name:"AppLayoutMain",

      data: () => ({
        drawer: false,
        group: null,
      }),
    }
  </script>
  