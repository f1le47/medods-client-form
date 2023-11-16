<template>
  <label :class="$style['selectLabel']">
    <span :class="$style['selectName']">{{ labelName }}</span>
    <div :class="$style['inputBlock']">
      <select

        name="value"
        id="gender"
        :class="$style['select']"
        v-model="$v.value.$model"
        v-on:focusout="checkErrors"
      >
        <option
          selected
          hidden
          disabled
        >
          {{ placeholderText }}
        </option>
        <option
          v-for="option in options"
          :key="option"
        >
          {{ option }}
        </option>
      </select>
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
      </div>
    </div>
  </label>
</template>

<script>
export default {
  name: 'selectField',
  data: () => ({
    value: '',
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
      } else {
        this.isHasErrors = false;
      }
    },
  },
  props: {
    placeholderText: String,
    labelName: String,
    inputType: {
      default: "text",
      type: String,
    },
    options: {
      type: Array
    },
    validator: Object
  },
  updated() {
    this.checkErrors()
  }
}
</script>

<style module lang="scss">
.selectLabel {
  display: flex;
  flex-direction: column;
  align-items: start;
}

.selectName {
  color: var(--secondary-color);
}

  .inputBlock {
    position: relative;
    width: 100%;

    .select {
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
      right: 30px;
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
      z-index: 2;
      & span {
        padding: 10px;
        color: rgb(226, 32, 32);
        border-top: 2px solid var(--primary-color);
        &:first-child {
          border-top: none;
        }
      }
    }
  }
</style>