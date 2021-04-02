<template>
  <v-card>
    <v-card-text style="margin-top:220px">
      <Card
        :cardNumber="cardNumber"
        :cardMonth="cardMonth"
        :cardYear="cardYear"
        :cardName="cardName"
        :cardCVC="cardCVC"
        style="position:absolute;top:-170px;width:320px;height:200px"
      />
    </v-card-text>
    <v-card-text>
      <v-form>
        <v-row>
          <v-col cols="12"
            ><v-text-field
              v-model="cardNumber"
              refs="cardNumber"
              dense
              label="Kart Numarası"
              outlined
              hide-details
              class="elevation-2"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12"
            ><v-text-field
              v-model="cardName"
              ref="cardName"
              dense
              label="Kart Sahibininin Adı"
              outlined
              hide-details
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="8"
            ><v-text-field
              v-model="cardMonthYear"
              ref="cardMonthYear"
              dense
              label="Son Kullanım Tarihi"
              outlined
              hide-details
            ></v-text-field>
          </v-col>
          <v-col cols="4"
            ><v-text-field
              v-model="cardCVC"
              ref="cardCVC"
              dense
              label="CVC"
              outlined
              hide-details
            ></v-text-field>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>
<script>
import Card from "@/components/Card";
export default {
  name: "CreditCardForm",
  props: {
    cvcSelect: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Card
  },
  data: () => {
    return {
      cardMonthYear: null
    };
  },
  computed: {
    cardNumber: {
      get() {
        return this.$store.getters.getCardNumber;
      },
      set(value) {
        this.$store.commit("SET_CARD_NUMBER", value);
      }
    },
    cardName: {
      get() {
        return this.$store.getters.getCardName;
      },
      set(value) {
        this.$store.commit("SET_CARD_NAME", value);
      }
    },
    cardMonth: {
      get() {
        return this.$store.getters.getCardMonth;
      },
      set(value) {
        this.$store.commit("SET_CARD_MONTH", value);
      }
    },
    cardYear: {
      get() {
        return this.$store.getters.getCardYear;
      },
      set(value) {
        this.$store.commit("SET_CARD_YEAR", value);
      }
    },
    cardCVC: {
      get() {
        return this.$store.getters.getCardCVC;
      },
      set(value) {
        this.$store.commit("SET_CARD_CVC", value);
      }
    }
  }
};
</script>
<style scoped>
.v-input--is-focused {
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%) !important;
}
</style>
