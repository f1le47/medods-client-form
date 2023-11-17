<template>
  <div :class="$style['fieldContainer']">
    <span :class="$style['fieldContainer__name']">Общие сведения</span>
    <div :class="$style['fieldSection']">
      <Input
        labelName="Фамилия"
        placeholderText="Впишите фамилию"
        :validator="{surnameValidator}"
        @hasErrors="surnameHasErrors"
      />
      <Input 
        labelName="Имя"
        placeholderText="Впишите имя"
        :validator="{nameValidator}"
        @hasErrors="nameHasErrors"
      />
      <Input 
        labelName="Отчество"
        placeholderText="Впишите отчество"
        inputType="tel"
        :validator="{patronymicValidator}"
        @hasErrors="patronymicHasErrors"
      />
      <div :class="$style['birthday']">
        <span :class="$style['birthdayLabel']">Дата рождения</span>
        <div :class="$style['birthdayInput']">
          <Input 
            placeholderText="День"
            inputType="number"
            :validator="{dayValidator}"
            @hasErrors="dayHasErrors"
          />
          <Input
            placeholderText="Месяц"
            inputType="number"
            :validator="{monthValidator}"
            @hasErrors="monthHasErrors"
          />
          <Input 
            placeholderText="Год"
            inputType="number"
            :validator="{yearValidator}"
            @hasErrors="yearHasErrors"
          />
        </div>
      </div>
      <Input
        labelName="Номер телефона"
        placeholderText="Введите номер телефона"
        :validator="{phoneValidator}"
        @hasErrors="phoneHasErrors"
      />
      <Select
        labelName="Пол"
        placeholderText="Укажите пол"
        :options="['Мужской', 'Женский']"
        :validator="{genderValidator}"
        @hasErrors="genderHasErrors"
      />
      <Multiselect />
      <Select
        labelName="Лечащий врач"
        :options="['Иванов', 'Захаров', 'Чернышева']"
        :validator="{attendingDoctorValidator}"
        @hasErrors="attendingDoctorHasErrors"
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
    attendingDoctorValidator: {},
    errors: {
      surname: false,
      name: false,
      patronymic: false,
      day: false,
      month: false,
      year: false,
      phone: false,
      gender: false,
      attendingDoctor: false,
      
    }
  }),
  methods: {
    surnameHasErrors(data) {
      this.errors.surname = data.hasErrors
      this.dataForwarding()
    },
    nameHasErrors(data) {
      this.errors.name = data.hasErrors
      this.dataForwarding()
    },
    patronymicHasErrors(data) {
      this.errors.patronymic = data.hasErrors
      this.dataForwarding()
    },
    dayHasErrors(data) {
      this.errors.day = data.hasErrors
      this.dataForwarding()
    },
    monthHasErrors(data) {
      this.errors.month = data.hasErrors
      this.dataForwarding()
    },
    yearHasErrors(data) {
      this.errors.year = data.hasErrors
      this.dataForwarding()
    },
    phoneHasErrors(data) {
      this.errors.phone = data.hasErrors
      this.dataForwarding()
    },
    genderHasErrors(data) {
      this.errors.gender = data.hasErrors
      this.dataForwarding()
    },
    attendingDoctorHasErrors(data) {
      this.errors.attendingDoctor = data.hasErrors
      this.dataForwarding()
    },
    dataForwarding() {
      this.$emit('errors', {
        hasErrors: this.errors.surname
          || this.errors.name
          || this.errors.patronymic
          || this.errors.day
          || this.errors.month
          || this.errors.year
          || this.errors.phone
          || this.errors.gender
          || this.errors.attendingDoctor
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