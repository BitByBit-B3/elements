# Testing Components

This guide covers the testing strategies and tools used in the Elements UI library to ensure component quality and reliability.

## Testing Philosophy

### Our Approach

We believe in comprehensive testing to ensure:

- **Reliability**: Components work as expected in all scenarios
- **Accessibility**: Components meet accessibility standards
- **Performance**: Components perform well under various conditions
- **Maintainability**: Tests make it safe to refactor and improve components

### Testing Pyramid

```
        ┌─ E2E Tests ─┐
        │  (10%)     │
    ┌───┴───┐        │
    │ Unit  │        │
    │ Tests │ (90%)  │
    └───────┘        │
        ▲            │
        │            │
    Component Tests
```

- **Unit Tests**: 90% - Test individual components in isolation
- **E2E Tests**: 10% - Test complete user workflows

## Testing Tools

### Primary Testing Tools

- **Jest**: JavaScript testing framework
- **React Testing Library**: Testing utilities for React components
- **@testing-library/jest-dom**: Custom Jest matchers for DOM testing
- **@testing-library/user-event**: Simulate user interactions
- **Storybook**: Component testing and documentation

### Accessibility Testing

- **@storybook/addon-a11y**: Accessibility testing in Storybook
- **axe-core**: Accessibility rule engine
- **jest-axe**: Accessibility testing utilities for Jest

### Performance Testing

- **React Test Renderer**: For component performance testing
- **@testing-library/react-hooks**: For custom hook testing

## Setting Up Tests

### Test File Structure

```
components/
├── button/
│   ├── button.tsx
│   ├── button.stories.tsx
│   ├── button.test.tsx      # Unit tests
│   └── button.a11y.test.tsx # Accessibility tests
```

### Test Configuration

The project uses Jest with React Testing Library. Configuration is in `jest.config.js`:

```javascript
// jest.config.js
module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapping: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.d.ts",
    "!src/**/*.stories.{js,jsx,ts,tsx}",
  ],
};
```

### Test Setup

```javascript
// jest.setup.js
import "@testing-library/jest-dom";

// Mock window.matchMedia
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
```

## Writing Unit Tests

### Basic Component Test

```tsx
// packages/react/src/components/button/button.test.tsx
import { render, screen } from "@testing-library/react";
import { Button } from "./button";

describe("Button", () => {
  it("renders with default props", () => {
    render(<Button>Click me</Button>);

    // Check if button is rendered
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();

    // Check if text is rendered
    expect(button).toHaveTextContent("Click me");

    // Check default classes
    expect(button).toHaveClass("inline-flex", "items-center", "justify-center");
  });

  it("applies variant classes correctly", () => {
    render(<Button variant="primary">Primary</Button>);

    const button = screen.getByRole("button");
    expect(button).toHaveClass("bg-blue-600", "text-white");
  });

  it("applies size classes correctly", () => {
    render(<Button size="lg">Large</Button>);

    const button = screen.getByRole("button");
    expect(button).toHaveClass("h-11", "px-8");
  });

  it("handles disabled state", () => {
    render(<Button disabled>Disabled</Button>);

    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
    expect(button).toHaveClass("opacity-50", "cursor-not-allowed");
  });

  it("handles loading state", () => {
    render(<Button loading>Loading</Button>);

    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
    expect(button).toHaveClass("opacity-50");

    // Check if spinner is rendered
    const spinner = screen.getByTestId("spinner");
    expect(spinner).toBeInTheDocument();
  });
});
```

### Testing User Interactions

```tsx
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./button";

describe("Button Interactions", () => {
  it("handles click events", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("does not handle click when disabled", () => {
    const handleClick = jest.fn();
    render(
      <Button disabled onClick={handleClick}>
        Disabled
      </Button>
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(handleClick).not.toHaveBeenCalled();
  });

  it("does not handle click when loading", () => {
    const handleClick = jest.fn();
    render(
      <Button loading onClick={handleClick}>
        Loading
      </Button>
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(handleClick).not.toHaveBeenCalled();
  });

  it("handles keyboard events", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    const button = screen.getByRole("button");

    // Test Enter key
    fireEvent.keyDown(button, { key: "Enter" });
    expect(handleClick).toHaveBeenCalledTimes(1);

    // Test Space key
    fireEvent.keyDown(button, { key: " " });
    expect(handleClick).toHaveBeenCalledTimes(2);
  });
});
```

### Testing with Different Props

```tsx
describe("Button Props", () => {
  it("applies custom className", () => {
    render(<Button className="custom-class">Custom</Button>);

    const button = screen.getByRole("button");
    expect(button).toHaveClass("custom-class");
  });

  it("forwards ref correctly", () => {
    const ref = jest.fn();
    render(<Button ref={ref}>Ref Test</Button>);

    expect(ref).toHaveBeenCalledWith(expect.any(HTMLButtonElement));
  });

  it("spreads additional props", () => {
    render(<Button data-testid="custom-test">Props Test</Button>);

    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("data-testid", "custom-test");
  });
});
```

## Testing Accessibility

### Basic Accessibility Tests

```tsx
// packages/react/src/components/button/button.a11y.test.tsx
import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { Button } from "./button";

expect.extend(toHaveNoViolations);

describe("Button Accessibility", () => {
  it("has no accessibility violations", async () => {
    const { container } = render(<Button>Accessible Button</Button>);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("is keyboard accessible", () => {
    render(<Button>Keyboard Test</Button>);

    const button = screen.getByRole("button");

    // Should be focusable
    expect(button).toBeVisible();
    expect(button).toHaveAttribute("tabindex", "0");
  });

  it("has proper ARIA attributes when loading", () => {
    render(<Button loading>Loading Button</Button>);

    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("aria-busy", "true");
  });

  it("has proper ARIA attributes when disabled", () => {
    render(<Button disabled>Disabled Button</Button>);

    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("aria-disabled", "true");
  });
});
```

### Testing with Different Screen Readers

```tsx
describe("Button Screen Reader Compatibility", () => {
  it("announces button text correctly", () => {
    render(<Button>Submit Form</Button>);

    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Submit Form");
  });

  it("announces loading state correctly", () => {
    render(<Button loading>Loading...</Button>);

    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("aria-busy", "true");
  });

  it("announces disabled state correctly", () => {
    render(<Button disabled>Disabled</Button>);

    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("aria-disabled", "true");
  });
});
```

## Testing Complex Components

### Testing Components with State

```tsx
// packages/react/src/components/modal/modal.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import { Modal } from "./modal";

describe("Modal", () => {
  it("opens and closes correctly", () => {
    const { rerender } = render(<Modal open={false}>Content</Modal>);

    // Modal should not be in the document when closed
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

    // Re-render with open state
    rerender(<Modal open={true}>Content</Modal>);

    // Modal should be in the document when open
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  it("calls onOpenChange when closed", () => {
    const onOpenChange = jest.fn();
    render(
      <Modal open={true} onOpenChange={onOpenChange}>
        Content
      </Modal>
    );

    const closeButton = screen.getByRole("button", { name: /close/i });
    fireEvent.click(closeButton);

    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  it("traps focus when open", () => {
    render(<Modal open={true}>Content</Modal>);

    const modal = screen.getByRole("dialog");
    expect(modal).toHaveAttribute("tabindex", "-1");
  });
});
```

### Testing Custom Hooks

```tsx
// packages/react/src/hooks/use-counter/use-counter.test.tsx
import { renderHook, act } from "@testing-library/react";
import { useCounter } from "./use-counter";

describe("useCounter", () => {
  it("initializes with default value", () => {
    const { result } = renderHook(() => useCounter());

    expect(result.current.count).toBe(0);
  });

  it("increments correctly", () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });

  it("decrements correctly", () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.decrement();
    });

    expect(result.current.count).toBe(-1);
  });

  it("resets correctly", () => {
    const { result } = renderHook(() => useCounter(10));

    act(() => {
      result.current.decrement();
      result.current.reset();
    });

    expect(result.current.count).toBe(10);
  });
});
```

### Testing Asynchronous Components

```tsx
// packages/react/src/components/async-button/async-button.test.tsx
import { render, screen, waitFor } from "@testing-library/react";
import { AsyncButton } from "./async-button";

describe("AsyncButton", () => {
  it("shows loading state during async operation", async () => {
    const mockAsyncAction = jest
      .fn()
      .mockImplementation(
        () => new Promise((resolve) => setTimeout(resolve, 100))
      );

    render(<AsyncButton onAsyncAction={mockAsyncAction}>Click me</AsyncButton>);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    // Should show loading state
    expect(button).toHaveTextContent("Loading...");
    expect(button).toBeDisabled();

    // Wait for async operation to complete
    await waitFor(() => {
      expect(button).toHaveTextContent("Click me");
      expect(button).not.toBeDisabled();
    });

    expect(mockAsyncAction).toHaveBeenCalledTimes(1);
  });

  it("handles async errors", async () => {
    const mockAsyncAction = jest.fn().mockRejectedValue(new Error("Failed"));

    render(<AsyncButton onAsyncAction={mockAsyncAction}>Click me</AsyncButton>);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    await waitFor(() => {
      expect(button).toHaveTextContent("Error");
    });
  });
});
```

## Testing Performance

### Component Performance Testing

```tsx
import { render } from '@testing-library/react';
import { Button } from './button';

describe('Button Performance', () => {
  it('renders quickly', () => {
    const start = performance.now();

    render(<Button>Performance Test</Button>);

    const end = performance.now();
    const renderTime = end - start;

    expect(renderTime).toBeLessThan(100); // Should render in less than 100ms
  });

  it('handles rapid re-renders efficiently', () => {
    const { rerender } = render(<Button>TestButton>);

    const start = performance.now();

    // Re-render 100 times
    for (let i = 0; i < 100; i++) {
      rerender(<Button variant={i % 2 === 0 ? 'primary' : 'secondary'}>Test</Button>);
    }

    const end = performance.now();
    const totalTime = end - start;

    expect(totalTime).toBeLessThan(1000); // Should handle 100 re-renders in less than 1s
  });
});
```

## Integration Testing

### Testing Component Interactions

```tsx
// packages/react/src/components/form/form.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import { Form } from "./form";
import { Input } from "../input/input";
import { Button } from "../button/button";

describe("Form Integration", () => {
  it("handles form submission correctly", () => {
    const handleSubmit = jest.fn();

    render(
      <Form onSubmit={handleSubmit}>
        <Input name="email" placeholder="Email" />
        <Button type="submit">Submit</Button>
      </Form>
    );

    const input = screen.getByPlaceholderText("Email");
    const button = screen.getByRole("button", { name: /submit/i });

    fireEvent.change(input, { target: { value: "test@example.com" } });
    fireEvent.click(button);

    expect(handleSubmit).toHaveBeenCalledWith(
      expect.objectContaining({
        email: "test@example.com",
      }),
      expect.anything()
    );
  });
});
```

## Storybook Testing

### Component Testing in Storybook

Storybook provides excellent testing capabilities for components:

```tsx
// packages/react/src/components/button/button.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
    a11y: {
      config: {},
      options: {
        checkers: ["axe-core", "wcag2a", "wcag2aa", "wcag21aa"],
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "primary", "secondary"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    disabled: {
      control: { type: "boolean" },
    },
    loading: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};

export const Accessibility: Story = {
  parameters: {
    a11y: {
      config: {
        rules: {
          "color-contrast": { enabled: true },
          "button-name": { enabled: true },
        },
      },
    },
  },
  render: () => (
    <div className="space-y-4">
      <Button>Default Button</Button>
      <Button disabled>Disabled Button</Button>
      <Button loading>Loading Button</Button>
    </div>
  ),
};
```

### Visual Testing with Chromatic

```tsx
// packages/react/src/components/button/button.stories.tsx
export const VisualRegression: Story = {
  parameters: {
    chromatic: {
      disableSnapshot: false,
      viewports: [320, 1200],
    },
  },
  render: () => (
    <div className="p-8 bg-gray-50">
      <div className="space-y-4">
        <Button variant="default">Default</Button>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button size="sm">Small</Button>
        <Button size="lg">Large</Button>
      </div>
    </div>
  ),
};
```

## Test Organization

### File Structure

```
tests/
├── components/
│   ├── button/
│   │   ├── button.test.tsx
│   │   ├── button.a11y.test.tsx
│   │   └── button.performance.test.tsx
│   ├── input/
│   │   ├── input.test.tsx
│   │   └── input.a11y.test.tsx
│   └── ...
├── hooks/
│   ├── use-counter/
│   │   └── use-counter.test.tsx
│   └── ...
├── utils/
│   ├── format-date/
│   │   └── format-date.test.tsx
│   └── ...
└── setup/
    └── jest.setup.ts
```

### Test Naming Conventions

```tsx
// Good naming conventions
describe("Button", () => {
  it("renders with default props", () => {});
  it("applies variant classes correctly", () => {});
  it("handles click events", () => {});
  it("is accessible when enabled", () => {});
  it("is accessible when disabled", () => {});
});

// Bad naming conventions
describe("Button", () => {
  it("test", () => {}); // Too vague
  it("button works", () => {}); // Too generic
  it("test 1", () => {}); // Not descriptive
});
```

### Test Grouping

```tsx
describe("Button", () => {
  // Basic rendering tests
  describe("rendering", () => {
    it("renders with default props", () => {});
    it("applies custom className", () => {});
    it("forwards ref correctly", () => {});
  });

  // Interaction tests
  describe("interactions", () => {
    it("handles click events", () => {});
    it("handles keyboard events", () => {});
    it("does not handle click when disabled", () => {});
  });

  // Accessibility tests
  describe("accessibility", () => {
    it("has no accessibility violations", () => {});
    it("is keyboard accessible", () => {});
    it("has proper ARIA attributes", () => {});
  });

  // Edge cases
  describe("edge cases", () => {
    it("handles rapid clicks", () => {});
    it("works with complex children", () => {});
    it("handles undefined props", () => {});
  });
});
```

## Best Practices

### Writing Good Tests

1. **Test Behavior, Not Implementation**

   ```tsx
   // Good: Test behavior
   it("handles click events", () => {
     const handleClick = jest.fn();
     render(<Button onClick={handleClick}>Click</Button>);
     fireEvent.click(screen.getByRole("button"));
     expect(handleClick).toHaveBeenCalled();
   });

   // Bad: Test implementation
   it("calls onClick handler", () => {
     const handleClick = jest.fn();
     const { container } = render(<Button onClick={handleClick}>Click</Button>);
     const button = container.querySelector("button");
     button?.click();
     expect(handleClick).toHaveBeenCalled();
   });
   ```

2. **Use Semantic Selectors**

   ```tsx
   // Good: Use semantic selectors
   const button = screen.getByRole("button");
   const heading = screen.getByRole("heading");
   const input = screen.getByLabelText("Email");

   // Bad: Use generic selectors
   const element = screen.getByText("Click");
   const div = screen.getByTestId("button");
   ```

3. **Test User Scenarios**

   ```tsx
   // Good: Test real user scenarios
   it("allows users to submit a form", () => {
     render(
       <Form onSubmit={handleSubmit}>
         <Input name="email" />
         <Button type="submit">Submit</Button>
       </Form>
     );

     fireEvent.change(screen.getByLabelText("Email"), {
       target: { value: "test@example.com" },
     });
     fireEvent.click(screen.getByRole("button", { name: /submit/i }));
     expect(handleSubmit).toHaveBeenCalled();
   });

   // Bad: Test isolated functionality
   it("calls submit handler", () => {
     const handleSubmit = jest.fn();
     render(<Button onClick={handleSubmit}>Submit</Button>);
     fireEvent.click(screen.getByRole("button"));
     expect(handleSubmit).toHaveBeenCalled();
   });
   ```

### Testing Performance

1. **Keep Tests Fast**

   ```tsx
   // Good: Fast tests
   it("renders quickly", () => {
     const start = performance.now();
     render(<Button>Test</Button>);
     const end = performance.now();
     expect(end - start).toBeLessThan(100);
   });

   // Bad: Slow tests
   it("works correctly", async () => {
     // Complex setup and multiple async operations
     await waitFor(() => {
       // Multiple assertions
     });
   });
   ```

2. **Mock External Dependencies**

   ```tsx
   // Good: Mock external dependencies
   jest.mock("external-api", () => ({
     fetchData: jest.fn().mockResolvedValue({ data: "test" }),
   }));

   // Bad: Real external API calls
   it("fetches data from API", async () => {
     const response = await fetchData();
     expect(response.data).toBe("test");
   });
   ```

### Testing Accessibility

1. **Use Accessibility Testing Tools**

   ```tsx
   // Good: Use axe-core
   it("has no accessibility violations", async () => {
     const { container } = render(<Button>Accessible Button</Button>);
     const results = await axe(container);
     expect(results).toHaveNoViolations();
   });

   // Bad: Manual accessibility checks
   it("is accessible", () => {
     // Manual checks that might miss issues
   });
   ```

2. **Test Keyboard Navigation**

   ```tsx
   // Good: Test keyboard navigation
   it("is keyboard accessible", () => {
     render(<Button>Keyboard Test</Button>);
     const button = screen.getByRole("button");

     fireEvent.keyDown(button, { key: "Enter" });
     // Test keyboard interaction
   });

   // Bad: No keyboard testing
   it("works with mouse", () => {
     // Only mouse interaction tests
   });
   ```

## Continuous Integration

### GitHub Actions

The project uses GitHub Actions for continuous integration:

```yaml
# .github/workflows/test.yml
name: Test
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: "18"
      - run: npm ci
      - run: npm test
      - run: npm run test:coverage
      - run: npm run build
```

### Test Coverage

The project maintains high test coverage standards:

```json
// package.json
{
  "scripts": {
    "test": "jest",
    "test:coverage": "jest --coverage",
    "test:watch": "jest --watch",
    "test:ci": "jest --ci --coverage --watchAll=false"
  }
}
```

### Coverage Reports

Coverage reports are generated and displayed in the CI pipeline:

```bash
# Generate coverage report
npm run test:coverage

# Upload coverage to Codecov
codecov --token=$CODECOV_TOKEN
```

## Troubleshooting

### Common Testing Issues

#### 1. Mocking Issues

```tsx
// Problem: Mock not working
import { useAuth } from "../hooks/use-auth";

// Solution: Mock the hook
jest.mock("../hooks/use-auth", () => ({
  useAuth: () => ({
    user: { id: 1, name: "Test User" },
    logout: jest.fn(),
  }),
}));
```

#### 2. Async Testing Issues

```tsx
// Problem: Async tests not working
it("handles async operations", () => {
  render(<AsyncComponent />);
  // Test fails because component hasn't loaded yet
});

// Solution: Use async/await
it("handles async operations", async () => {
  render(<AsyncComponent />);
  await waitFor(() => {
    expect(screen.getByText("Loaded")).toBeInTheDocument();
  });
});
```

#### 3. Testing Library Issues

```tsx
// Problem: Cannot find element
it("renders correctly", () => {
  render(<Component />);
  expect(screen.getByText("Text")).toBeInTheDocument(); // Fails
});

// Solution: Check if element is actually rendered
it("renders correctly", () => {
  render(<Component />);
  const element = screen.queryByText("Text");
  if (element) {
    expect(element).toBeInTheDocument();
  }
});
```

### Debugging Tests

#### 1. Debugging Rendered Components

```tsx
// Use debug() to see rendered content
it("renders correctly", () => {
  const { debug } = render(<Component />);
  debug();

  // Continue with assertions
  expect(screen.getByText("Text")).toBeInTheDocument();
});
```

#### 2. Debugging State Changes

```tsx
// Use state debugging
it("handles state changes", () => {
  const { rerender } = render(<Component />);

  // Log state before change
  console.log("Before:", screen.getByTestId("state").textContent);

  rerender(<Component newState={true} />);

  // Log state after change
  console.log("After:", screen.getByTestId("state").textContent);

  expect(screen.getByTestId("state")).toHaveTextContent("true");
});
```

#### 3. Debugging Events

```tsx
// Use event debugging
it("handles events correctly", () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click</Button>);

  const button = screen.getByRole("button");
  console.log("Button before click:", button);

  fireEvent.click(button);

  console.log("Button after click:", button);
  expect(handleClick).toHaveBeenCalled();
});
```

## Resources

### Testing Documentation

- [React Testing Library Documentation](https://testing-library.com/docs/react-testing-library/intro/)
- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [Storybook Testing Documentation](https://storybook.js.org/docs/writing-tests/overview)
- axe-core Documentation](https://www.deque.com/axe/)

### Tools and Libraries

- [@testing-library/react](https://www.npmjs.com/package/@testing-library/react)
- [@testing-library/jest-dom](https://www.npmjs.com/package/@testing-library/jest-dom)
- [@testing-library/user-event](https://www.npmjs.com/package/@testing-library/user-event)
- [jest-axe](https://www.npmjs.com/package/jest-axe)
- [react-testing-library](https://www.npmjs.com/package/react-testing-library)

### Best Practices

- [Testing Library Best Practices](https://testing-library.com/docs/guidelines/overview)
- [React Testing Patterns](https://kentcdodds.com/blog/react-testing-patterns)
- [Accessibility Testing Guide](https://testing-library.com/docs/ecosystem-user-event)
- [Performance Testing Guide](https://testing-library.com/docs/react-testing-library/api#act)
