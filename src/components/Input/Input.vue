<template>
  <label :class="$style['label']">
    <span :class="$style['labelName']">{{ labelName }}</span>
    <div :class="$style['inputBlock']">
      <input 
        :class="$style['input']"
        :placeholder="placeholderText"
        v-model.trim="$v.value.$model"
        :type="inputType"
      >
      <img
        src="@/assets/imgs/warning.svg"
        alt="!"
        :class="$style['error__img']"
        @mouseover="isShowErrors=true"
        @mouseleave="isShowErrors=false"
        v-if="isHasErrors"
      >
      <div :class="$style['errorAlert']" v-if="isShowErrors">
        <span v-if="$v.value.required !== undefined && !$v.value.required">Поле обязательно для заполнения!</span>
        <span v-if="$v.value.lettersOnlyValidator !== undefined && !$v.value.lettersOnlyValidator">В поле должны быть только буквы</span>
        <span v-if="$v.value.numeric !== undefined && !$v.value.numeric">В поле должны быть только цифры</span>
        <span v-if="$v.value.phoneNumberValidator !== undefined && !$v.value.phoneNumberValidator">Номер телефона должен содержать 11 цифр и начинаться с 7</span>
        <span 
          v-if="$v.value.minValue !== undefined && !$v.value.minValue || $v.value.maxValue !== undefined && !$v.value.maxValue" 
        >
          Доступны значения от {{ $v.value.$params.minValue.min }} до {{ $v.value.$params.maxValue.max }}
        </span>
      </div>
    </div>
  </label>
</template>

<script>
export default {
  name: "InputField",
  data: () => ({
    value: "",
    isShowErrors: false,
    isHasErrors: false,
  }),
  validations() {
    const objKeys = Object.keys(this.validator);
    return {
      value: this.validator[objKeys[0]]
    }
  },
  methods: {
    checkErrors() {
      if (this.$v.value.required !== undefined && !this.$v.value.required) {
        this.isHasErrors = true;
      } else if (this.$v.value.phoneNumberValidator !== undefined && !this.$v.value.phoneNumberValidator) {
        this.isHasErrors = true;
      } else if (this.$v.value.lettersOnlyValidator !== undefined && !this.$v.value.lettersOnlyValidator) {
        this.isHasErrors = true;
      } else if (this.$v.value.minValue !== undefined && !this.$v.value.minValue || this.$v.value.maxValue !== undefined && !this.$v.value.maxValue) {
        this.isHasErrors = true;
      } else {
        this.isHasErrors = false;
      }
    }
  },
  props: {
      placeholderText: String,
      labelName: String,
      inputType: {
          default: "text",
          type: String,
      },
      validator: Object
  },
  updated() {
    this.checkErrors()
  }
}
</script>

<style module lang="scss">
  .label {
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
  }

  .labelName {
    color: var(--secondary-color);
  }

  .inputBlock {
    position: relative;
    width: 100%;
    .input {
      padding: 10px;
      text-align: center;
      border: none;
      border-radius: 5px;
      width: 100%;
      &:focus {
        border: none;
        outline: none;
      }
    }

    .error__img {
      position: absolute;
      width: 20px;
      top: 10px;
      right: 10px;
    }
  }

    .errorAlert {
      position: absolute;
      top: 0;
      right: -290px;
      width: 250px;
      display: flex;
      flex-direction: column;
      background-color: var(--secondary-color);
      border: 3px solid var(--primary-color);
      border-radius: 5px;
      box-shadow: 0px 0px 5px #000;
      z-index: 10;
      & span {
        padding: 10px;
        color: rgb(226, 32, 32);
        border-top: 2px solid var(--primary-color);
        &:first-child {
          border-top: none;
        }
      }
  }
</style>