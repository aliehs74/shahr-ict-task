import type { Meta, StoryObj } from '@storybook/react';
import { ProductItem } from '../ProductItem';
import { mockProduct } from '@/utils/mock/mock';

const meta: Meta<typeof ProductItem> = {
  title: 'ProductItem',
  component: ProductItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    product: mockProduct,
    handleClick: () => console.log('Location tab clicked')
  },
  argTypes: {
    product: { control: 'object' },
    handleClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof ProductItem>;

export const Default: Story = {
  args: {
    product: mockProduct,
    handleClick: () => console.log('Product clicked'),
  },
};
export const NoRating: Story = {
  args: {
    product: {
      ...mockProduct,
      id: 2,
      title: 'Product Without Rating',
      rating: undefined
    },
    handleClick: () => console.log('No rating product clicked'),
  },
};

export const LongTitle: Story = {
  args: {
    product: {
      ...mockProduct,
      id: 3,
      title: 'This is an extremely long product title that should demonstrate how the component handles text overflow and truncation in the UI',
    },
    handleClick: () => console.log('Long title product clicked'),
  },
};
