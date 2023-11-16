<template>
  <div id="app">
    <Form />
  </div>
</template>

<script>
import Form from '@/components/Form/Form.vue';
import './styles/variables.scss';

export default {
  name: 'App',
  components: { Form }
}
</script>

<style lang="scss">
  *,
  *:before,
  *:after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font: var(--font);
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  input[type='number'],
  input[type="number"]:hover,
  input[type="number"]:focus {
    appearance: none;
    -moz-appearance: textfield;
  }

  #app {
    padding: 20px 0;
    text-align: center;
    display: flex;
    justify-content: center;
    background: url(@/assets/imgs/bg.png);
  }
</style>
