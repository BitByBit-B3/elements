import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'lg', 'icon'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Variants: Story = {
  args: {
    variant: 'default',
    children: 'Button',
  },
  render: (args) => (
    <div className="flex flex-wrap gap-3">
      <Button variant="default">Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
};

export const Sizes: Story = {
  args: {
    size: 'default',
    children: 'Button',
  },
  render: (args) => (
    <div className="flex flex-wrap items-center gap-3">
      <Button size="sm">Small</Button>
      <Button>Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon">
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      </Button>
    </div>
  ),
};

export const WithIcons: Story = {
  args: {
    children: 'Button',
  },
  render: (args) => (
    <div className="flex flex-wrap gap-3">
      <Button leftIcon={
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      }>
        Add Item
      </Button>
      <Button rightIcon={
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      }>
        Save Changes
      </Button>
    </div>
  ),
};

export const States: Story = {
  args: {
    children: 'Button',
  },
  render: (args) => (
    <div className="flex flex-wrap gap-3">
      <Button>Enabled</Button>
      <Button loading>Loading</Button>
      <Button disabled>Disabled</Button>
      <Button loading variant="outline">Loading</Button>
      <Button loading variant="secondary">Loading</Button>
      <Button disabled variant="outline">Disabled</Button>
      <Button disabled variant="secondary">Disabled</Button>
    </div>
  ),
};

export const Playground: Story = {
  args: {
    children: 'Default Button',
  },
  render: (args) => (
    <div className="flex flex-wrap gap-3">
      <Button>Default Button</Button>
      <Button className="hover:bg-blue-800">Hover Me</Button>
      <Button className="focus:ring-4 focus:ring-blue-300">Focus Me</Button>
      <Button disabled>Disabled Button</Button>
      <Button loading>Loading Button</Button>
    </div>
  ),
};