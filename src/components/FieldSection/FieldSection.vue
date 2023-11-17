<template>
  <div :class="$style['container']">
    <GeneralInfo
      @errors="generalInfoErrors"
    />
    <Address
      @errors="addressErrors"
    />
    <Passport
      @errors="passportErrors"
    />
  </div>
</template>

<script>
import Address from './Address/Address.vue';
import GeneralInfo from './GeneralInfo/GeneralInfo.vue';
import Passport from './Passport/Passport.vue';

export default {
  name: 'FieldSection',
  components: { GeneralInfo, Address, Passport },
  data: () => ({
    generalInfoHasErrors: false,
    addressHasErrors: false,
    passportHasErrors: false,
  }),
  methods: {
    generalInfoErrors(data) {
      this.generalInfoHasErrors = data.hasErrors
      this.dataForwarding()
    },
    addressErrors(data) {
      this.addressHasErrors = data.hasErrors
      this.dataForwarding()
    },
    passportErrors(data) {
      this.passportHasErrors = data.hasErrors
      this.dataForwarding()
    },
    dataForwarding() {
      this.$emit('errors', {
        hasErrors: this.generalInfoHasErrors || this.addressHasErrors || this.passportHasErrors
      })
    }
  }
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