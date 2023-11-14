<template>
  <div :class="$style['form']">
    <FieldSection />
  </div>
</template>

<script>
import FieldSection from '../FieldSection/FieldSection.vue';

export default {
  name: 'formBlock',
  components: { FieldSection }
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
</style>
