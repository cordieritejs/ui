<template>
  <button :class="buttonStyle" class="test-button"><slot /></button>
</template>
<script lang="ts" setup>
import './style/index.scss';
import { computed } from 'vue';

defineOptions({ name: 'test-button' });

type ButtonProps = {
  type?: string;
};
const buttonProps = defineProps<ButtonProps>();
const buttonStyle = computed(() => {
  return { [`test-button-${buttonProps.type}`]: buttonProps.type };
});
</script>
