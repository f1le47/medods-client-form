<template>
  <div :class="$style['fieldContainer']">
    <span :class="$style['fieldContainer__name']">Адрес</span>
    <div :class="$style['fieldSection']">
      <Input
        labelName="Индекс"
        placeholderText="Впишите индекс"
        :validator="{indexValidator}"
        @hasErrors="indexHasErrors"
      />
      <Input
        labelName="Страна"
        placeholderText="Впишите страну"
        :validator="{countryValidator}"
        @hasErrors="countryHasErrors"
      />
      <Input
        labelName="Область"
        placeholderText="Впишите область"
        :validator="{regionValidator}"
        @hasErrors="regionHasErrors"
      />
      <Input
        labelName="Город"
        placeholderText="Впишите город"
        :validator="{cityValidator}"
        @hasErrors="cityHasErrors"
      />
      <Input
        labelName="Улица"
        placeholderText="Впишите улицу"
        :validator="{streetValidator}"
        @hasErrors="streetHasErrors"
      />
      <Input
        labelName="Дом"
        placeholderText="Впишите дом"
        :validator="{houseValidator}"
        @hasErrors="houseHasErrors"
      />
    </div>
  </div>
</template>

<script>
import Input from '@/components/Input/Input.vue';
import { required, numeric, helpers } from 'vuelidate/lib/validators';

export default {
  name: 'addressBlock',
  components: { Input },
  data: () => ({
    indexValidator: {
      numeric
    },
    countryValidator: {
      lettersOnlyValidator: helpers.regex('lettersOnlyValidator', /^[a-zа-яё]+$/i)
    },
    regionValidator: {
      lettersOnlyValidator: helpers.regex('lettersOnlyValidator', /^[a-zа-яё]+$/i)
    },
    cityValidator: {
      required,
      lettersOnlyValidator: helpers.regex('lettersOnlyValidator', /^[a-zа-яё]+$/i)
    },
    streetValidator: {
      lettersOnlyValidator: helpers.regex('lettersOnlyValidator', /^[a-zа-яё]+$/i)
    },
    houseValidator: {
      numeric
    },
    errors: {
      index: false,
      country: false,
      region: false,
      city: false,
      street: false,
      house: false
    }
  }),
  methods: {
    indexHasErrors(data) {
      this.errors.index = data.hasErrors
      this.dataForwarding()
    },
    countryHasErrors(data) {
      this.errors.country = data.hasErrors
      this.dataForwarding()
    },
    regionHasErrors(data) {
      this.errors.region = data.hasErrors
      this.dataForwarding()
    },
    cityHasErrors(data) {
      this.errors.city = data.hasErrors
      this.dataForwarding()
    },
    streetHasErrors(data) {
      this.errors.street = data.hasErrors
      this.dataForwarding()
    },
    houseHasErrors(data) {
      this.errors.house = data.hasErrors
      this.dataForwarding()
    },
    dataForwarding() {
      this.$emit('errors', {
        hasErrors: this.errors.index || this.errors.country || this.errors.region || this.errors.city || this.errors.street || this.errors.house
      })
    }
  },
}
</script>

<style module lang="scss">
  .fieldContainer {
    display: flex;
    flex-direction: column;
    align-items: start;

    &__name {
      font-size: var(--font-size-m);
      color: var(--secondary-color);
    }
  }

  .fieldSection {
    margin-top: 10px;
    display: grid;
    grid-row-gap: 10px;
    width: 100%;
  }
</style>