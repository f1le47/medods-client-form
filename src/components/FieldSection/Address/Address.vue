<template>
  <div :class="$style['fieldContainer']">
    <span :class="$style['fieldContainer__name']">Адрес</span>
    <div :class="$style['fieldSection']">
      <Input
        labelName="Индекс"
        placeholderText="Впишите индекс"
      />
      <Input
        labelName="Страна"
        placeholderText="Впишите страну"
      />
      <Input
        labelName="Область"
        placeholderText="Впишите область"
      />
      <Input
        labelName="Город"
        placeholderText="Впишите город"
      />
      <Input
        labelName="Улица"
        placeholderText="Впишите улицу"
      />
      <Input
        labelName="Дом"
        placeholderText="Впишите дом"
      />
    </div>
  </div>
</template>

<script>
import Input from '@/components/Input/Input.vue';

export default {
  name: 'addressBlock',
  components: { Input }
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