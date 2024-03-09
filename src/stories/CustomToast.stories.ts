import type { Meta, StoryObj } from '@storybook/react';

import { CustomToast } from './CustomToast';

const meta = {
  title: 'CustomToast',
  component: CustomToast,
  tags: ['autodocs'],
} satisfies Meta<typeof CustomToast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UserToast: Story = {
  args: {
    open: true,
    title: 'Bonnie Green',
    message: 'Hi Neil, thanks for sharing your thoughts regardingFlowbite.',
  },
};
