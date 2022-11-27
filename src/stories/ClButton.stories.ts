import ClButton from '../components/Button/ClButton.vue';

import type { Meta, StoryFn } from '@storybook/vue3';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'cl-button',
  component: ClButton,
} as Meta<typeof ClButton>;

export const Primary: StoryFn<typeof ClButton> = () => ({
  components: { ClButton },
  template: '<cl-button primary label="Button" />',
});
