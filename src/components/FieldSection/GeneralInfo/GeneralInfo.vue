<template>
  <div :class="$style['fieldContainer']">
    <span :class="$style['fieldContainer__name']">Общие сведения</span>
    <div :class="$style['fieldSection']">
      <Input
        labelName="Фамилия"
        placeholderText="Впишите фамилию"
      />
      <Input 
        labelName="Имя"
        placeholderText="Впишите имя"
      />
      <Input 
        labelName="Отчество"
        placeholderText="Впишите отчество"
        inputType="tel"
      />
      <div :class="$style['birthday']">
        <span :class="$style['birthdayLabel']">Дата рождения</span>
        <div :class="$style['birthdayInput']">
          <Input 
            placeholderText="День"
            inputType="number"
          />
          <Input
            placeholderText="Месяц"
            inputType="number"
          />
          <Input 
            placeholderText="Год"
            inputType="number"
          />
        </div>
      </div>
      <Input labelName="Номер телефона" />
      <Select
        labelName="Пол"
        placeholderText="Укажите пол"
        :options="['Мужской', 'Женский']"
      />
      <Multiselect />
      <Select
        labelName="Лечащий врач"
        :options="['Иванов', 'Захаров', 'Чернышева']"
      />
      <Checkbox 
        labelName="Не отправлять СМС."
      />
    </div>
  </div>
</template>

<script>
import Input from '@/components/Input/Input.vue';
import Select from '@/components/Select/Select.vue';
import Multiselect from '@/components/Multiselector/Multiselect.vue';
import Checkbox from '@/components/Checkbox/Checkbox.vue';

export default {
  name: 'generalInfo',
  components: { Input, Select, Multiselect, Checkbox }
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
  }

  .birthday {
    display: flex;
    flex-direction: column;
    align-items: start;
    &Label {
      color: var(--secondary-color);
    }
    &Input {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-column-gap: 10px;
    }
  }
</style>