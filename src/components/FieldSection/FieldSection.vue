<template>
  <div :class="$style['container']">
    <GeneralInfo />
    <Address />
    <Passport />
  </div>
</template>

<script>
import Address from './Address/Address.vue';
import GeneralInfo from './GeneralInfo/GeneralInfo.vue';
import Passport from './Passport/Passport.vue';

export default {
  name: 'FieldSection',
  components: { GeneralInfo, Address, Passport }
}
</script>

<style module lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    width: 100%;
  }
</style>