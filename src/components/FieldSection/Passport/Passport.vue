<template>
  <div :class="$style['fieldContainer']">
    <span :class="$style['fieldContainer__name']">Паспорт</span>
    <div :class="$style['fieldSection']">
      <Select
        labelName="Тип документа"
        placeholderText="Укажите тип документа"
        :options="['Паспорт', 'Свидетельство о рождении', 'Водительское удостоверение']"
        :validator="{typeOfDocumentValidaotr}"
        @hasErrors="typeOfDocumentHasErrors"
      />
      <Input
        labelName="Серия"
        placeholderText="Впишите серию"
        :validator="{seriesValidator}"
        @hasErrors="seriesHasErrors"
      />
      <Input
        labelName="Номер"
        placeholderText="Впишите номер"
        :validator="{numberValidator}"
        @hasErrors="numberHasErrors"
      />
      <Input
        labelName="Кем выдан"
        placeholderText="Впишите учреждение"
        :validator="{issuedByValidator}"
        @hasErrors="issuedByHasErrors"
      />
      <Input
        labelName="Дата выдачи"
        placeholderText="Впишите дату выдачи"
        :validator="{dateOfIssueValidator}"
        @hasErrors="dateOfIssueHasErrors"
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
    typeOfDocumentValidaotr: {
      required
    },
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
    },
    errors: {
      typeOfDocument: false,
      series: false,
      number: false,
      issuedBy: false,
      dateOfIssue: false
    }
  }),
  methods: {
    typeOfDocumentHasErrors(data) {
      this.errors.typeOfDocument = data.hasErrors
      this.dataForwarding()
    },
    seriesHasErrors(data) {
      this.errors.series = data.hasErrors
      this.dataForwarding()
    },
    numberHasErrors(data) {
      this.errors.number = data.hasErrors
      this.dataForwarding()
    },
    issuedByHasErrors(data) {
      this.errors.issuedBy = data.hasErrors
      this.dataForwarding()
    },
    dateOfIssueHasErrors(data) {
      this.errors.dateOfIssue = data.hasErrors
      this.dataForwarding()
    },
    dataForwarding() {
      this.$emit('errors', {
        hasErrors: this.errors.typeOfDocument || this.errors.series || this.errors.number || this.errors.issuedBy || this.errors.dateOfIssue
      })
    }
  }
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