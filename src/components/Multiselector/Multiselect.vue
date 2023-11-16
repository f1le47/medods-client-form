<template>
  <div :class="$style['multiselect']">
    <span :class="$style['labelName']">Группа клиента</span>
    <div :class="$style['selectBlock']">
      <div :class="$style['selectedGroups']">
        <SelectedItem 
          v-for="group in selectedGroups"
          :key="group"
          :item="group"
          @removeItem="removeSelectedGroup(group)"
        />
      </div>
      <div
        :class="$style['markdown']"
        v-on:click="toggleSelectedGroups()"
      >
        <img 
          src="@/assets/imgs/markdown.svg"
          alt=""
          :class="$style['markdown__image']"
        >
      </div>
      <div
        :class="$style['selectGroups']"
        v-if="isSelectVisible"
      >
        <span
          :class="$style['selectGroups__group']"
          v-for="group in groups"
          :key="group"
          v-on:click="addSelectedGroup(group)"
        >
          {{ group }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import SelectedItem from './SelectedItem/SelectedItem.vue'

export default {
  name: 'multiSelector',
  components: { SelectedItem },
  data: () => ({
    groups: ['VIP', 'Проблемные', 'ОМС'],
    selectedGroups: [],
    isSelectVisible: false,
  }),
  methods: {
    toggleSelectedGroups() {
      this.isSelectVisible = !this.isSelectVisible;
    },
    addSelectedGroup(group) {
      console.log('worked');
      const selectedGroupId = this.groups.indexOf(group);
      this.groups.splice(selectedGroupId, 1);
      this.selectedGroups.push(group);
    },
    removeSelectedGroup(group) {
      const selectedGroupId = this.selectedGroups.indexOf(group);
      this.selectedGroups.splice(selectedGroupId, 1);
      this.groups.push(group);
    }
  }
}
</script>

<style module lang="scss">
  .multiselect {
    display: flex;
    flex-direction: column;
    align-items: start;

    .labelName {
      color: var(--secondary-color);
    }

    .selectBlock {
      position: relative;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .selectedGroups {
        padding: 5px;
        display: flex;
        column-gap: 10px;
        height: 40px;
        width: 100%;
        background-color: var(--secondary-color);
        border-radius: 5px 0px 0px 5px;
      }

      .markdown {
        padding: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        border-left: 1px solid var(--light-additional-color);
        border-radius: 0px 5px 5px 0px;
        cursor: pointer;
        &__image {
          width: 30px;
        }
      }

      .selectGroups {
        position: absolute;
        z-index: 3;
        top: 45px;
        display: flex;
        flex-direction: column;
        align-items: start;
        width: 100%;
        background-color: var(--secondary-color);
        border-radius: 5px;
        box-shadow: 2px 2px 3px var(--dark-additional-color);
        &__group {
          padding: 10px;
          width: 100%;
          cursor: pointer;
          border-top: 1px solid var(--light-additional-color);
          border-radius: 5px;
          &:first-child {
            border-top: none;
          }
          &:hover {
            background-color: var(--light-additional-color);
          }
        }
      }

    }
  }
</style>