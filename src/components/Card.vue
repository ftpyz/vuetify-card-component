<template>
  <v-card elevation="4" color="#000" dark class="credit-card">
    <v-card-text>
      <v-row>
        <v-col cols="3"
          ><v-img :src="require('@/assets/card_chip.png')" width="60"
        /></v-col>
      </v-row>
      <v-row :class="activeFocus === 'cardNumber' ? 'active-card' : ''">
        {{ cardNumber }}
        <v-col cols="12" @click="activeFocus = 'cardNumber'" v-if="cardNumber">
          <span
            v-for="(number, index) in cardNumber"
            :key="index"
            style="font-size:20pt;"
          >
            <div v-if="index <= 6" style="float:left">{{ number }}</div>
            <div v-else style="float:left">*</div>
            <div
              v-if="Number.isInteger((index + 1) / 4)"
              style="width:10px;height:20px;float:left;"
            ></div>
          </span>
        </v-col>
        <v-col v-else cols="12" @click="activeFocus = 'cardNumber'">
          <span style="font-size:20pt;">#### #### #### #### </span>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="6"
          :class="activeFocus === 'cardName' ? 'ma-0 active-card' : ''"
        >
          <p style="font-size:16pt;">Fuat POYRAZ</p></v-col
        >
        <v-col
          cols="3"
          :class="activeFocus === 'cardMonthYear' ? 'active-card' : ''"
          >08/25</v-col
        >

        <v-col cols="3" class="text-right">
          <v-img
            width="60"
            src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/visa.png
"
          />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: "Card",
  data: () => {
    return {};
  },
  computed: {
    activeFocus() {
      return this.$store.getters.getActiveFocus;
    },
    cardNumber() {
      return this.$store.getters.getCardNumber;
    },
    cardName() {
      return this.$store.getters.getCardName;
    },
    cardMonth() {
      return this.$store.getters.getCardMonth;
    },
    cardYear() {
      return this.$store.getters.getCardYear;
    },
    cardCVC() {
      return this.$store.getters.getCardCVC;
    }
  }
};
</script>
<style scoped>
.active-card {
  border: 1px solid #c0c0c0;
  border-radius: 5px;
  height: 50px;
}
.credit-card {
  border-radius: 15px !important;
}
</style>
