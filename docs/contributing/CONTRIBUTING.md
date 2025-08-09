# Contributing to Elements UI

Thank you for your interest in contributing to the Elements UI library! This guide will help you get started with contributing to our project.

## Table of Contents

- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Making Changes](#making-changes)
- [Creating Components](#creating-components)
- [Testing](#testing)
- [Code Quality](#code-quality)
- [Pull Requests](#pull-requests)
- [Community Guidelines](#community-guidelines)
- [Resources](#resources)

## Getting Started

### Prerequisites

Before you start contributing, make sure you have:

- **Node.js**: Version 18.0.0 or higher
- **pnpm**: Version 8.0.0 or higher
- **Git**: For version control
- **VS Code**: Recommended editor (with extensions)

### Fork and Clone

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/your-username/elements.git
   cd elements
   ```
3. **Add the upstream repository**:
   ```bash
   git remote add upstream https://github.com/bitbybit-b3/elements.git
   ```

### Install Dependencies

```bash
# Install all dependencies
pnpm install

# Install specific package dependencies
pnpm install --filter packages/core
pnpm install --filter packages/react
pnpm install --filter packages/docs
pnpm install --filter packages/playground
```

## Development Setup

### Project Structure

```
elements/
├── packages/
│   ├── core/                 # Design tokens and theme
│   ├── react/                # React components
│   ├── docs/                 # Storybook documentation
│   └── playground/           # Development playground
├── docs/                     # Documentation
├── .github/                  # GitHub workflows
└── package.json              # Root package.json
```

### Development Scripts

```bash
# Start development servers
pnpm dev          # Start playground
pnpm storybook    # Start Storybook documentation
pnpm test         # Run tests
pnpm typecheck    # Run TypeScript checks
pnpm build        # Build all packages
```

### Environment Setup

1. **Configure your editor** with TypeScript and ESLint
2. **Install recommended VS Code extensions**:
   - ESLint
   - Prettier
   - Tailwind CSS IntelliSense
   - Jest Runner

## Making Changes

### Workflow Overview

1. **Create a new branch** from `main`
2. **Make your changes**
3. **Test your changes**
4. **Update documentation** if needed
5. **Submit a pull request**

### Branch Naming

Use descriptive branch names:

```bash
# Good branch names
git checkout -b feature/button-loading-state
git checkout -b fix/button-accessibility-issue
git checkout -b docs/update-component-api

# Bad branch names
git checkout -b fix
git checkout -b update
git checkout -b change
```

### Making Changes

1. **Create a new branch**:

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**:

   - Follow the [Component Guidelines](./component-guidelines.md)
   - Follow the [Testing Guidelines](./testing.md)
   - Ensure code quality with ESLint

3. **Test your changes**:

   ```bash
   pnpm test
   pnpm typecheck
   pnpm build
   ```

4. **Check your changes**:

   ```bash
   # See what files you've changed
   git status

   # Review your changes
   git diff

   # Check if tests pass
   pnpm test
   ```

5. **Commit your changes**:
   ```bash
   git add .
   git commit -m "feat: add loading state to Button component"
   ```

## Creating Components

### Component Structure

Each component should follow this structure:

```
packages/react/src/components/component-name/
├── component-name.tsx          # Main component
├── component-name.stories.tsx  # Storybook stories
└── component-name.test.tsx     # Unit tests
```

### Creating a New Component

1. **Create the component directory**:

   ```bash
   mkdir packages/react/src/components/your-component
   ```

2. **Create the component file**:

   ```tsx
   // packages/react/src/components/your-component/your-component.tsx
   import { forwardRef } from "react";
   import React from "react";

   export interface YourComponentProps {
     // Define your props
     variant?: "default" | "primary";
     size?: "sm" | "md" | "lg";
   }

   const YourComponent = forwardRef<HTMLDivElement, YourComponentProps>(
     ({ variant = "default", size = "md", children, ...props }, ref) => {
       return (
         <div ref={ref} {...props}>
           {children}
         </div>
       );
     }
   );

   YourComponent.displayName = "YourComponent";

   export { YourComponent };
   ```

3. **Create Storybook stories**:

   ```tsx
   // packages/react/src/components/your-component/your-component.stories.tsx
   import type { Meta, StoryObj } from "@storybook/react";
   import { YourComponent } from "./your-component";

   const meta: Meta<typeof YourComponent> = {
     title: "Components/YourComponent",
     component: YourComponent,
     parameters: {
       layout: "centered",
     },
     tags: ["autodocs"],
   };

   export default meta;
   type Story = StoryObj<typeof meta>;

   export const Default: Story = {
     args: {
       children: "Your Component",
     },
   };
   ```

4. **Update the main exports**:
   ```tsx
   // packages/react/src/index.ts
   export { YourComponent } from "./components/your-component/your-component";
   ```

### Component Guidelines

- Follow the [Component Guidelines](./component-guidelines.md)
- Use TypeScript for type safety
- Use Tailwind CSS for styling
- Ensure accessibility compliance
- Write comprehensive tests
- Document with Storybook

## Testing

### Testing Requirements

All components must have:

- **Unit tests** with Jest and React Testing Library
- **Accessibility tests** with axe-core
- **Storybook stories** for documentation

### Running Tests

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test:coverage

# Run tests for a specific package
pnpm --filter packages/react test

# Run tests for a specific file
pnpm test packages/react/src/components/button/button.test.tsx
```

### Testing Guidelines

- Follow the [Testing Guidelines](./testing.md)
- Test all component variants and states
- Test accessibility compliance
- Test user interactions
- Test edge cases

## Code Quality

### Linting and Formatting

```bash
# Run ESLint
pnpm lint

# Fix ESLint issues automatically
pnpm lint:fix

# Format code with Prettier
pnpm format

# Check formatting
pnpm format:check
```

### TypeScript

```bash
# Run TypeScript checks
pnpm typecheck

# Run TypeScript checks for a specific package
pnpm --filter packages/react typecheck
```

### Code Style

- Follow the [ESLint configuration](../../.eslintrc.js)
- Use Prettier for code formatting
- Follow the [Component Guidelines](./component-guidelines.md)
- Write clear, descriptive code comments

## Pull Requests

### PR Process

1. **Update your fork** with the latest changes:

   ```bash
   git fetch upstream
   git checkout main
   git merge upstream/main
   ```

2. **Create a new branch** from the updated `main`:

   ```bash
   git checkout -b feature/your-feature
   ```

3. **Make your changes** and test them

4. **Push your branch** to your fork:

   ```bash
   git push origin feature/your-feature
   ```

5. **Create a pull request** on GitHub

### PR Guidelines

#### PR Title

Use conventional commit format:

```
type(scope): description

Examples:
feat(button): add loading state
fix(input): handle empty values
docs(button): update API documentation
style(button): fix button spacing
refactor(button): simplify component logic
test(button): add accessibility tests
chore: update dependencies
```

#### PR Description

Include:

- **What** you changed and why
- **How** you tested your changes
- **Screenshots** if applicable
- **Related issues** (if any)

#### PR Checklist

- [ ] Code follows the project style guide
- [ ] Tests pass and are comprehensive
- [ ] Documentation is updated if needed
- [ ] Storybook stories are updated
- [ ] Accessibility tests pass
- [ ] TypeScript types are correct
- [ ] Linting passes
- [ ] Changes are tested in the playground

### PR Review

### Review Process

1. **Automated checks** run on PR:

   - Tests must pass
   - Linting must pass
   - TypeScript must pass
   - Security checks must pass

2. **Code review** by maintainers:

   - Code quality and style
   - Test coverage
   - Documentation
   - Accessibility

3. **Feedback and changes**:

   - Address review comments
   - Update tests if needed
   - Update documentation if needed

4. **Approval and merge**:
   - All checks must pass
   - All review comments must be addressed
   - PR must be approved by at least one maintainer

### Review Response

When responding to review comments:

- **Be respectful and constructive**
- **Explain your reasoning** if you disagree with a suggestion
- **Make the requested changes** when appropriate
- **Ask for clarification** if you don't understand a comment

## Community Guidelines

### Code of Conduct

This project follows a standard Code of Conduct:

- **Be respectful** and inclusive
- **Be constructive** in feedback
- **Be collaborative** and helpful
- **Be patient** with newcomers
- **Be professional** in all interactions

### Getting Help

If you need help:

1. **Check the documentation** first
2. **Search existing issues** for similar problems
3. **Ask in discussions** for general questions
4. **Create an issue** for bugs or feature requests

### Communication Channels

- **GitHub Issues**: Bug reports and feature requests
- **GitHub Discussions**: General questions and discussions
- **Pull Requests**: Code reviews and contributions

### Reporting Issues

When reporting issues, include:

- **Environment**: Node.js version, OS, browser
- **Steps to reproduce**: Clear steps to reproduce the issue
- **Expected behavior**: What should happen
- **Actual behavior**: What actually happens
- **Screenshots**: If applicable
- **Code examples**: Minimal code that reproduces the issue

### Feature Requests

When requesting features, include:

- **Use case**: Why this feature is needed
- **Proposed solution**: How you think it should work
- **Alternatives**: Any alternative solutions you've considered
- **Examples**: Code examples or mockups

## Resources

### Documentation

- [Main Documentation](../README.md)
- [Component Guidelines](./component-guidelines.md)
- [Creating Components](./creating-components.md)
- [Editing Components](./editing-components.md)
- [Testing](./testing.md)

### Development Tools

- [Storybook](https://storybook.js.org/docs)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Jest](https://jestjs.io/docs/getting-started)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)

### Learning Resources

- [React Documentation](https://react.dev/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/)
- [CSS-Tricks](https://css-tricks.com/)

### Community

- [GitHub Discussions](https://github.com/bitbybit-b3/elements/discussions)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/elements-ui)
- [Twitter](https://twitter.com/bitbybit_b3)

## Additional Information

### Release Process

1. **Version bump** according to semantic versioning
2. **Changelog update** with all changes
3. **Release branch** creation
4. **Testing** on the release branch
5. **Tag creation** and release
6. **Documentation update** with release notes

### Security

- **Report security issues** privately
- **Follow security best practices**
- **Keep dependencies updated**
- **Use secure coding practices**

### License

By contributing to this project, you agree that your contributions will be licensed under the MIT License.

### Acknowledgments

Thank you to all contributors who help make Elements UI better!

---

**Happy coding! 🎉**

If you have any questions or need help, don't hesitate to reach out to the community or create an issue.
