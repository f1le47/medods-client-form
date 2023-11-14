<template>
  <label :class="$style['label']">
    <span :class="$style['labelName']">{{ labelName }}</span>
    <input 
      :class="$style['input']"
      :placeholder="placeholderText"
      v-model="value"
      :type="inputType"
    >
  </label>
</template>

<script>

export default {
  name: 'InputField',
  data: () => ({
    value: '',
  }),
  props: {
    placeholderText: String,
    labelName: String,
    inputType: {
      default: "text",
      type: String,
    }
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
</style>