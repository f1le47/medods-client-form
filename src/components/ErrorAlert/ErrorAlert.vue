<template>
  <div :class="$style['errorContainer']">
    <span v-if="isDirty && requiredError">Это поле обязательно для заполнения.</span>
    <span v-if="isDirty && numericError">Это поле заполняется только цифрами.</span>
    <span v-if="isDirty && onlyLettersError">Это поле заполняется только буквами.</span>
  </div>
</template>

<script>
export default {
  name: 'errorAlert',
  props: {
    requiredError: Boolean,
    numericError: Boolean,
    onlyLettersError: Boolean,
    isDirty: Boolean
  },
  updated() {
    console.log('sss')
  }
}
</script>

<style module lang="scss">
.errorContainer {
  display: flex;
  flex-direction: column;
}
</style>