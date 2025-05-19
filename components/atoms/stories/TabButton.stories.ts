import type { Meta, StoryObj } from '@storybook/react';
import TabButton from '../TabButton';
import { ETabType } from '@/types/enum';

const meta: Meta<typeof TabButton> = {
  title: 'TabButton',
  component: TabButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    isActive: true,
    title: ETabType.LOCATION,
    handleClick: () => console.log('Location tab clicked'),
  },
  argTypes: {
    isActive: { control: 'boolean' },
    title: {
      control: 'select',
      options: Object.values(ETabType),
    },
    handleClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof TabButton>;

export const Default: Story = {
  args: {
    isActive: false,
    title: ETabType.OVERVIEW,
    handleClick: () => console.log('Tab clicked'),
  },
};

export const Active: Story = {
  args: {
    isActive: true,
    title: ETabType.OVERVIEW,
    handleClick: () => console.log('Tab clicked'),
  },
};

export const LocationTab: Story = {
  args: {
    isActive: false,
    title: ETabType.LOCATION,
    handleClick: () => console.log('Location tab clicked'),
  },
};

export const ActiveLocationTab: Story = {
  args: {
    isActive: true,
    title: ETabType.LOCATION,
    handleClick: () => console.log('Location tab clicked'),
  },
};