<!-- eslint-disable vue/no-unused-components -->
<!-- eslint-disable vue/no-unused-components -->
<template>
  <div :class="$style['fieldContainer']">
    <span :class="$style['fieldContainer__name']">Общие сведения</span>
    <div :class="$style['fieldSection']">
      <Input
        labelName="Фамилия"
        placeholderText="Впишите фамилию"
        :validator="{surnameValidator}"
      />
      <Input 
        labelName="Имя"
        placeholderText="Впишите имя"
        :validator="{nameValidator}"
      />
      <Input 
        labelName="Отчество"
        placeholderText="Впишите отчество"
        inputType="tel"
        :validator="{patronymicValidator}"
      />
      <div :class="$style['birthday']">
        <span :class="$style['birthdayLabel']">Дата рождения</span>
        <div :class="$style['birthdayInput']">
          <Input 
            placeholderText="День"
            inputType="number"
            :validator="{dayValidator}"
          />
          <Input
            placeholderText="Месяц"
            inputType="number"
            :validator="{monthValidator}"
          />
          <Input 
            placeholderText="Год"
            inputType="number"
            :validator="{yearValidator}"
          />
        </div>
      </div>
      <Input
        labelName="Номер телефона"
        placeholderText="Введите номер телефона"
        :validator="{phoneValidator}"
      />
      <Select
        labelName="Пол"
        placeholderText="Укажите пол"
        :options="['Мужской', 'Женский']"
        :validator="{genderValidator}"
      />
      <Multiselect />
      <Select
        labelName="Лечащий врач"
        :options="['Иванов', 'Захаров', 'Чернышева']"
        :validator="{attendingDoctorValidator}"
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
import { required, numeric, minValue, maxValue, helpers } from 'vuelidate/lib/validators';

export default {
  name: 'generalInfo',
  components: { Input, Select, Multiselect, Checkbox },
  data: () => ({
    surnameValidator: {
      required,
      $autoDirty: true,
      lettersOnlyValidator: helpers.regex('lettersOnlyValidator', /^[a-zа-яё]+$/i)
    },
    nameValidator: {
      required,
      $autoDirty: true,
    },
    patronymicValidator: {},
    dayValidator: {
      required,
      numeric,
      minValue: minValue(1),
      maxValue: maxValue(31)
    },
    monthValidator: {
      required,
      numeric,
      minValue: minValue(1),
      maxValue: maxValue(12)
    },
    yearValidator: {
      required,
      numeric,
      minValue: minValue(1900),
      maxValue: maxValue(new Date().getFullYear())
    },
    phoneValidator: {
      required,
      phoneNumberValidator: helpers.regex('phoneNumberValidator', /7([0-9]{10})/)
    },
    genderValidator: {},
    attendingDoctorValidator: {}
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

  .birthday {
    display: flex;
    flex-direction: column;
    align-items: start;
    &Label {
      color: var(--secondary-color);
    }
    &Input {
      display: flex;
      grid-template-columns: 1fr 1fr 1fr;
      grid-column-gap: 10px;
    }
  }
</style>