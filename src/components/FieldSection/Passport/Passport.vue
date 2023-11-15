<template>
  <div :class="$style['fieldContainer']">
    <span :class="$style['fieldContainer__name']">Паспорт</span>
    <div :class="$style['fieldSection']">
      <Select
        labelName="Тип документа"
        placeholderText="Укажите тип документа"
        :options="['Паспорт', 'Свидетельство о рождении', 'Водительское удостоверение']"
      />
      <Input
        labelName="Серия"
        placeholderText="Впишите серию"
        :validator="{seriesValidator}"
      />
      <Input
        labelName="Номер"
        placeholderText="Впишите номер"
        :validator="{numberValidator}"
      />
      <Input
        labelName="Кем выдан"
        placeholderText="Впишите учреждение"
        :validator="{issuedByValidator}"
      />
      <Input
        labelName="Дата выдачи"
        placeholderText="Впишите дату выдачи"
        :validator="{dateOfIssueValidator}"
      />
    </div>
  </div>
</template>

<script>
import Select from '@/components/Select/Select.vue';
import Input from '@/components/Input/Input.vue';
import { required, numeric, minLength, maxLength } from 'vuelidate/lib/validators';

export default {
  name: 'passportBlock',
  components: { Select, Input },
  data: () => ({
    seriesValidator: {
      numeric,
      minLength: minLength(4),
      maxLength: maxLength(4)
    },
    numberValidator: {
      minLength: minLength(6),
      maxLength: maxLength(6)
    },
    issuedByValidator: {},
    dateOfIssueValidator: {
      required
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