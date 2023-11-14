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
      />
      <Input
        labelName="Номер"
        placeholderText="Впишите номер"
      />
      <Input
        labelName="Кем выдан"
        placeholderText="Впишите учреждение"
      />
      <Input
        labelName="Дата выдачи"
        placeholderText="Впишите дату выдачи"
      />
    </div>
  </div>
</template>

<script>
import Select from '@/components/Select/Select.vue';
import Input from '@/components/Input/Input.vue';

export default {
  name: 'passportBlock',
  components: { Select, Input }
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