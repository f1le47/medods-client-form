<template>
  <label
    :class="$style['check']"
  >
    <span
      :class="$style['check__name']"
    >
      {{ labelName }}
    </span>
    <div :class="$style['container']">
      <input type="checkbox">
      <span :class="$style['checkmark']"></span>
    </div>
  </label>
</template>

<script>
  export default {
    name: 'checkboxBlock',
    props: {
      labelName: String
    }
  }
</script>

<style module lang="scss">
  .check {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    
    &__name {
      padding-top: 5px;
      color: var(--secondary-color);
    }
  }

  .container {
      display: block;
      position: relative;
      padding-left: 25px;
      margin-bottom: 20px;
      cursor: pointer;
      font-size: 22px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;

      & input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
      }
    }

    .container input:checked ~ .checkmark {
      background-color: var(--primary-color);
      border: 1px solid var(--secondary-color);
      border-radius: 5px;
    }
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: var(--secondary-color);
    border-radius: 5px;

    &:after {
      content: "";
      position: absolute;
      display: none;
    }
  }

  .container input:checked ~ .checkmark:after {
    display: block;
  }

  .container .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
</style>