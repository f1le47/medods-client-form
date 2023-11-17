<template>
  <div 
    :class="$style['selectedItem']"
    @click="$emit('removeItem', item.toString())"
    v-on:click="event => event.stopPropagation()"
  >
    <span>{{ item.toString() }}</span>
    <img :class="$style['cancel']" src="@/assets/imgs/cancel.svg" alt="x">
  </div>
</template>

<script>
export default {
  name: 'selectedItem',
  props: {
    item: {
      type: String,
      required: true
    }
  }
}
</script>

<style module lang="scss">
.selectedItem {
  padding: 5px;
  display: flex;
  align-items: center;
  color: var(--dark-additional-color);
  background-color: var(--light-additional-color);
  border-radius: 5px;
}
.cancel {
  margin-left: 10px;
  width: 15px;
  background-color: var(--dark-additional-color);
  border-radius: 50%;
  cursor: pointer;
}
</style>