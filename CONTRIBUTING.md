# Contributing to Elements UI

Thank you for your interest in contributing to Elements UI! These components are actively used in our production projects, and we welcome contributions from the community.

## Getting Started

1. **Fork the repository**
   ```bash
   gh repo fork BitByBit-B3/elements
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/elements.git
   cd elements
   ```

3. **Install dependencies**
   ```bash
   pnpm install
   ```

4. **Create a branch**
   ```bash
   git checkout -b feature/my-new-feature
   ```

## Development Workflow

### Project Structure

```
elements/
├── packages/
│   ├── core/              # Design tokens and theme
│   ├── react/             # React components
│   │   └── src/
│   │       ├── components/
│   │       │   └── ui/    # UI components
│   │       ├── hooks/     # React hooks
│   │       └── lib/       # Utilities
│   └── playground/        # Development playground
└── docs-site/             # VitePress documentation
```

### Available Commands

```bash
# Development
pnpm dev              # Start playground dev server
pnpm build            # Build all packages
pnpm typecheck        # Run TypeScript type checking

# Documentation
cd docs-site
pnpm dev              # Start docs dev server
pnpm build            # Build documentation
```

## Making Changes

### Adding a New Component

1. **Create the component file**
   ```bash
   # Create in packages/react/src/components/ui/
   touch packages/react/src/components/ui/my-component.tsx
   ```

2. **Export the component**
   - Add exports to `packages/react/src/index.ts`

3. **Add dependencies** (if needed)
   - Update `packages/react/package.json`

4. **Create documentation**
   - Add a page in `docs-site/components/my-component.md`
   - Update `docs-site/components/index.md`

5. **Update README**
   - Add to component list in `README.md`

### Updating an Existing Component

1. Make your changes to the component file
2. Update documentation if API changed
3. Update version in package.json if needed
4. Test in the playground

### Component Guidelines

- **Accessibility**: Use Radix UI primitives when possible
- **TypeScript**: Fully type all props and exports
- **Styling**: Use Tailwind CSS utilities
- **Variants**: Use `class-variance-authority` for variants
- **Composition**: Support `asChild` pattern where appropriate
- **Documentation**: Include examples and API reference

### Code Style

- Use TypeScript
- Follow existing code patterns
- Use meaningful variable names
- Add JSDoc comments for public APIs
- Keep components focused and composable

## Testing

Before submitting:

1. **Type check**
   ```bash
   pnpm typecheck
   ```

2. **Build successfully**
   ```bash
   pnpm build
   ```

3. **Test in playground**
   ```bash
   pnpm dev
   ```

## Submitting Changes

1. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add new component"
   ```

   Commit message format:
   - `feat:` New feature
   - `fix:` Bug fix
   - `docs:` Documentation changes
   - `chore:` Maintenance tasks
   - `refactor:` Code refactoring

2. **Push to your fork**
   ```bash
   git push origin feature/my-new-feature
   ```

3. **Create a Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Select your branch
   - Fill in the PR template
   - Wait for review

## Pull Request Guidelines

- **Clear description**: Explain what and why
- **Screenshots**: Add for UI changes
- **Breaking changes**: Clearly mark and explain
- **Tests**: Ensure everything builds
- **Documentation**: Update docs for API changes

## Component Update Command

We have a slash command to help update components from other projects:

```bash
/update-components /path/to/source/project
```

This command will:
- Scan for new components
- Update existing components
- Add dependencies
- Update documentation

## Questions?

- Open an [Issue](https://github.com/BitByBit-B3/elements/issues)
- Check existing issues and PRs
- Reach out to the team

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on the code, not the person
- Help others learn and grow

## License

By contributing, you agree that your contributions will be licensed under the Apache 2.0 License.

---

Thank you for contributing to Elements UI! 🎉
