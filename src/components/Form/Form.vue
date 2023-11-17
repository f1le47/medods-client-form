<template>
  <div :class="$style['form']">
    <FieldSection
      @errors="errors"
    />
    <div :class="$style['submitBlock']">
      <button
        v-on:click="submit"
        :class="$style['button']"
        :disabled="isValidationFailed"
      >
        Создать
      </button>
      <span
        v-if="isValidationFailed"
        :class="$style['failed']"
      >
        Поля не прошли проверку.
      </span>
      <span
        v-if="isValidationSuccess"
        :class="$style['success']"
      >
        Новый клиент успешно создан.
      </span>
    </div>
  </div>
</template>

<script>
import FieldSection from '../FieldSection/FieldSection.vue';

export default {
  name: 'formBlock',
  components: { FieldSection },
  data: () => ({
    hasErrors: false,
    isValidationFailed: false,
    isValidationSuccess: false
  }),
  methods: {
    submit() {
      if (this.hasErrors) {
        this.isValidationFailed = true
        this.isValidationSuccess = false
        return;
      }
      this.isValidationFailed = false
      this.isValidationSuccess = true
    },
    errors(data) {
      this.hasErrors = data.hasErrors
    }
  }
}
</script>

<style module lang="scss">
  .form {
    padding: 20px;
    width: 500px;
    border-radius: 10px;
    background-color: var(--primary-color);
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

  .submitBlock {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .button {
    margin-top: 30px;
    padding: 15px;
    border: none;
    border-radius: 5px;
    text-align: center;
    font-size: var(--font-size-m);
    color: var(--dark-additional-color);
    background-color: var(--secondary-color);
    cursor: pointer;
    width: 100%;
    &:hover {
      background-color: var(--light-additional-color);
    }
  }

  .failed {
    margin-top: 10px;
    color: var(--error-color);
  }
  .success {
    margin-top: 10px;
    color: var(--secondary-color);
  }
</style>
