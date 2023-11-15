<template>
  <div :class="$style['fieldContainer']">
    <span :class="$style['fieldContainer__name']">Адрес</span>
    <div :class="$style['fieldSection']">
      <Input
        labelName="Индекс"
        placeholderText="Впишите индекс"
        :validator="{indexValidator}"
      />
      <Input
        labelName="Страна"
        placeholderText="Впишите страну"
        :validator="{countryValidator}"
      />
      <Input
        labelName="Область"
        placeholderText="Впишите область"
        :validator="{regionValidator}"
      />
      <Input
        labelName="Город"
        placeholderText="Впишите город"
        :validator="{cityValidator}"
      />
      <Input
        labelName="Улица"
        placeholderText="Впишите улицу"
        :validator="{streetValidator}"
      />
      <Input
        labelName="Дом"
        placeholderText="Впишите дом"
        :validator="{houseValidator}"
      />
    </div>
  </div>
</template>

<script>
import Input from '@/components/Input/Input.vue';
import { required, numeric } from 'vuelidate/lib/validators';
import lettersOnlyValidator from '@/assets/helpers/lettersOnlyValidator/lettersOnlyValidator';

export default {
  name: 'addressBlock',
  components: { Input },
  data: () => ({
    indexValidator: {
      numeric
    },
    countryValidator: {
      lettersOnlyValidator
    },
    regionValidator: {
      lettersOnlyValidator
    },
    cityValidator: {
      required,
      lettersOnlyValidator
    },
    streetValidator: {
      lettersOnlyValidator
    },
    houseValidator: {
      numeric
    }
  })
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