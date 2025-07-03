<script setup lang="ts">
interface Props {
  modelValue: string;
  placeholder?: string;
  label?: string | null;
  type?: string;
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: '',
  label: null,
  type: 'text',
});

const emits = defineEmits<{ (e: 'update:modelValue', value: string): void }>();

const handleInput = (event: Event) => {
  emits('update:modelValue', (event.target as HTMLInputElement).value);
};
</script>

<template>
  <div>
    <label v-if="props.label" for="" class="ml-px block pl-3 text-sm font-medium text-gray-700">{{
      props.label
    }}</label>
    <div class="mt-1">
      <input
        :type="props.type"
        :value="props.modelValue"
        :placeholder="props.placeholder"
        class="block w-full rounded-full border border-gray-300 px-4 py-2 text-base shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        @input="handleInput"
      />
    </div>
  </div>
</template>
