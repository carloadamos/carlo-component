import ClTextField from '../components/TextField/ClTextField.vue';

import type { Meta, StoryFn } from '@storybook/vue3';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'cl-text-field',
  component: ClTextField,
} as Meta<typeof ClTextField>;

export const Primary: StoryFn<typeof ClTextField> = () => ({
  components: { ClTextField },
  template: '<cl-text-field />',
});
