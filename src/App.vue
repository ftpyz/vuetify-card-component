<template>
  <v-app>
    <v-main>
      <v-row justify="center">
        <v-col cols="4">
          <h2>Kredi Kartı Formu</h2>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="4"><CreditCardForm cvcSelect /> </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import CreditCardForm from "./components/CreditCardForm";

export default {
  name: "App",

  components: {
    CreditCardForm
  },

  data: () => ({
    //
  })
};
</script>
