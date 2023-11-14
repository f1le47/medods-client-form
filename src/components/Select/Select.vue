<template>
  <label :class="$style['selectLabel']">
    <span :class="$style['selectName']">{{ labelName }}</span>
    <select name="gender" id="gender" :class="$style['select']">
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
  </label>
</template>

<script>
export default {
  name: 'selectField',
  data: () => ({
    value: '',
  }),
  props: {
    placeholderText: String,
    labelName: String,
    inputType: {
      default: "text",
      type: String,
    },
    options: {
      type: Array
    }
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
</style>