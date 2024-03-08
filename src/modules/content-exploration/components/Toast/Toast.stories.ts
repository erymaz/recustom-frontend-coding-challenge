import type { Meta, StoryObj } from '@storybook/react';

import { EToastType, Toast } from './Toast';

const meta = {
  title: 'Toast',
  component: Toast,
  tags: ['autodocs'],
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    open: true,
    type: EToastType.SUCCESS,
    message: 'The action that you have done was a success! Well done.',
  },
};

export const SuccessWithAction: Story = {
  args: {
    open: true,
    type: EToastType.SUCCESS_WITH_ACTION,
    message: 'Well done, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content. Be sure to use margin utilities to keep things nice and tidy.',
  },
};

export const Danger: Story = {
  args: {
    open: true,
    type: EToastType.DANGER,
    message: 'The file flowbite-figma-pro was permanently deleted.',
  },
};

export const DangerWithAction: Story = {
  args: {
    open: true,
    type: EToastType.DANGER_WITH_ACTION,
    message: 'Oh snap, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content. Be sure to use margin utilities to keep things nice and tidy.',
  },
};
