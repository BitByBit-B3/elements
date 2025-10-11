<div align="center">
  <img src="./assests/logo.png" alt="Elements UI Logo" width="120" height="120" />

  # Elements UI Library

  **A component library experiment built with AI-assisted workflows in mind.**

  Created by university students exploring how agentic coding tools like Claude Code can transform library development. We're building a collection of UI components with an architecture optimized for AI-assisted contributions.

  [![npm version](https://img.shields.io/npm/v/@bitbybit-b3/elements-react.svg)](https://github.com/BitByBit-B3/elements/packages)
  [![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](LICENSE)
  [![GitHub](https://img.shields.io/badge/GitHub-BitByBit--B3-181717?logo=github)](https://github.com/BitByBit-B3)
  [![Claude Code](https://img.shields.io/badge/Optimized_for-Claude_Code-7C3AED?logo=anthropic)](https://www.anthropic.com/claude)

</div>

## The Problem With Component Libraries

Contributing to traditional component libraries means hours of manual work: fixing imports, updating configs, managing dependencies, writing docs. It's a barrier that keeps great components trapped in private projects.

## How Elements UI Solves This

We've architected a system where **agentic coding tools do the heavy lifting**. Point Claude Code at your components, and automated workflows handle everything from import resolution to CI/CD updates.

### What Makes This Different

- **Learning experiment**: Exploring how AI can reshape open source contribution workflows
- **Workflow automation**: Custom slash commands designed for Claude Code and agentic tools
- **Framework flexibility**: Architecture that auto-creates packages for React, Vue, Svelte, Next.js
- **Developer-friendly**: Built by students, for developers curious about AI-assisted development

### Workflow Comparison

**Traditional approach** (2-3 hours per component):
```bash
1. Copy component code
2. Manually fix all imports
3. Update package.json dependencies
4. Configure build tools
5. Update exports in index.ts
6. Write documentation
7. Test everything manually
8. Create PR with all configs
```

**With Elements UI** (5 minutes):
```bash
# Using Claude Code or similar agentic tools
/update-components ~/my-project/components

# The automation handles:
# - Framework detection and package selection
# - Import path resolution and fixing
# - Dependency analysis and updates
# - Build configuration
# - CI/CD workflow integration
# - Documentation generation
```

### Designed for Agentic Tools

Elements UI includes **automation workflows** that agentic coding assistants can execute:

**Component Updates**: Detect frameworks (React, Vue, Svelte, Next.js), create packages as needed, resolve imports, manage dependencies, update CI/CD

**Package Creation**: Scaffold new framework packages with TypeScript, build tools, and GitHub Actions integration—all through natural language instructions

## Quick Start

```bash
npm install @bitbybit-b3/elements-react
# or
pnpm add @bitbybit-b3/elements-react
```

```tsx
import { Button, Card, Dialog } from "@bitbybit-b3/elements-react";

function App() {
  return (
    <Card>
      <Button variant="default">Lightning Fast</Button>
    </Card>
  );
}
```

## The Vision

### The Problem We're Tackling

**Traditional component libraries:**
- Hours of manual work per contribution
- Complex build configurations create barriers
- Framework-specific limitations
- Manual dependency management
- Slow iteration cycles

**Our Experiment:**
- **Automated workflows**: Agentic tools handle boilerplate
- **Lower barriers**: Simplified contribution through AI assistance
- **Multi-framework**: Auto-creates packages for different frameworks
- **Intelligent management**: Automated dependency and config handling

### What We're Learning

This is an **active experiment** in AI-assisted development. We're exploring:
- Can agentic tools like Claude Code truly streamline contribution workflows?
- How far can we push automation while maintaining code quality?
- What does the future of collaborative development look like?

## Components

A growing collection of 49+ UI components built with Radix UI primitives and Tailwind CSS. Components focus on accessibility and modern React patterns.

<details>
<summary><strong>View all components</strong></summary>

**Layout & Structure**
- **Card** - Content containers
- **Separator** - Visual dividers
- **Aspect Ratio** - Media containers
- **Scroll Area** - Custom scrolling
- **Resizable** - Adjustable panels
- **Sidebar** - App navigation

**Forms & Inputs**
- **Button** - Interactive buttons
- **Input** - Text inputs
- **Input OTP** - One-time password
- **Textarea** - Multi-line text
- **Checkbox** - Binary selection
- **Radio Group** - Single selection
- **Select** - Dropdown selection
- **Switch** - Toggle controls
- **Slider** - Range selection
- **Label** - Form labels
- **Form** - Form management

**Navigation**
- **Tabs** - Tabbed interfaces
- **Accordion** - Collapsible sections
- **Breadcrumb** - Navigation paths
- **Navigation Menu** - Site navigation
- **Menubar** - App menus
- **Dropdown Menu** - Action menus
- **Context Menu** - Right-click menus
- **Pagination** - Page controls

**Overlays & Dialogs**
- **Dialog** - Modal windows
- **Alert Dialog** - Confirmations
- **Sheet** - Side panels
- **Drawer** - Mobile panels
- **Popover** - Floating content
- **Hover Card** - Rich tooltips
- **Tooltip** - Helpful hints

**Feedback & Status**
- **Alert** - Important messages
- **Toast** - Notifications
- **Sonner** - Toast alternative
- **Progress** - Progress bars
- **Skeleton** - Loading states
- **Badge** - Status indicators

**Data Display**
- **Table** - Data tables
- **Avatar** - Profile images
- **Calendar** - Date pickers
- **Chart** - Data visualization
- **Carousel** - Content sliders

**Advanced**
- **Command** - Command palette
- **Collapsible** - Expandable content
- **Toggle** - Toggle buttons
- **Toggle Group** - Toggle groups

</details>

## Contributing with AI Assistance

### What You'll Need

An agentic coding assistant that can:
- Read and write files
- Execute terminal commands
- Run custom slash commands (optional but recommended)

**Optimized for**: Claude Code, Cursor, GitHub Copilot, or similar tools

### Method 1: Smart Contribution (Recommended)

**We've built slash commands that work with AI assistants:**

1. **Fork and clone**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/elements.git
   cd elements
   ```

2. **Tell your AI assistant**:
   ```
   "Add the components from ~/my-project/components to this library"
   ```

3. **AI automatically**:
   - Scans your components
   - Detects framework
   - Creates packages if needed
   - Fixes imports
   - Updates dependencies
   - Configures builds
   - Updates CI/CD
   - Creates documentation

4. **Done!** Just review and commit.

### Method 2: Use Slash Commands Directly

If your AI supports custom commands (we use them in our workflow):

```bash
# Update library with components from another project
/update-components ~/path/to/components

# Create a new framework package
/create-package elements-vue vue

# AI handles all configuration automatically
```

### Method 3: Traditional (Manual)

<details>
<summary>Step-by-step manual process</summary>

1. Fork repository
2. Create feature branch
3. Add/modify components
4. Update exports in `packages/react/src/index.ts`
5. Add dependencies to `package.json`
6. Run `pnpm typecheck` and `pnpm build`
7. Create PR

See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

</details>

## The AI-Expandable Architecture

### How It Works

```
elements/
├── packages/
│   ├── react/          # React components
│   ├── core/           # Design tokens
│   ├── nextjs/         # Auto-created when needed
│   ├── vue/            # Auto-created when needed
│   ├── svelte/         # Auto-created when needed
│   └── utils/          # Auto-created when needed
├── .claude/            # AI automation commands (works with any AI)
│   └── commands/
│       ├── update-components.md   # Intelligent updater
│       └── create-package.md      # Package generator
└── .github/
    └── workflows/      # Self-scaling CI/CD
        └── publish.yml # Auto-detects new packages
```

### Intelligent Automation

Our automation commands (usable by any AI):

**Component Update Command**:
- Framework detection (React, Vue, Svelte, Next.js, etc.)
- Automatic package creation for new frameworks
- Import path resolution and fixing
- Dependency analysis and installation
- Build configuration
- CI/CD workflow updates
- Documentation generation

**Package Creation Command**:
- Complete package scaffolding
- TypeScript configuration
- Build tool setup
- GitHub Actions integration
- npm metadata and keywords

### Self-Scaling Infrastructure

GitHub Actions that adapt automatically:
- Detect ALL packages in `packages/*`
- Auto version bumping
- Build and publish ALL packages
- No manual updates when adding packages
- Deploy docs automatically

## Why This Approach Matters

### For Learning

**Traditional barrier**: Understanding complex build configs and tooling
**Our approach**: Agentic tools abstract the complexity

**Benefits**:
- Lower barrier to open source contribution
- Focus on component quality, not configuration
- Learn modern AI-assisted development patterns

### For the Future

- **Experimentation**: Try new frameworks without manual setup overhead
- **Community-driven**: Anyone can extend for their favorite framework
- **Adaptable**: New frameworks emerge? Architecture accommodates them

### About Our Components

Components built using:
- **Modern patterns**: TypeScript, React 18+, tree-shakeable exports
- **Accessibility focus**: Built on Radix UI primitives
- **Flexible**: Framework packages auto-created as needed
- **Student project**: Learning and experimenting with AI workflows

## Packages

### Current Packages

| Package | Description | Status |
|---------|-------------|--------|
| `@bitbybit-b3/elements-react` | React components | Published (experimental) |
| `@bitbybit-b3/elements-core` | Design tokens | Published (experimental) |

### Potential Future Packages

Architecture supports auto-creation of framework-specific packages:

- `@bitbybit-b3/elements-nextjs` - Next.js specific components
- `@bitbybit-b3/elements-vue` - Vue 3 components
- `@bitbybit-b3/elements-svelte` - Svelte components
- `@bitbybit-b3/elements-solid` - SolidJS components
- `@bitbybit-b3/elements-utils` - Universal utilities
- `@bitbybit-b3/elements-hooks` - React hooks library
- `@bitbybit-b3/elements-icons` - Icon library

**The system can expand** when contributors add components for new frameworks.

## Roadmap

### What We've Built
- Architecture for agentic tool integration
- Automated component update workflows
- Automated package creation system
- Self-scaling CI/CD pipeline
- Collection of 49+ UI components

### What We're Exploring
- [ ] Community contribution patterns
- [ ] VSCode extension for workflow automation
- [ ] Automated testing integration
- [ ] Cross-framework component patterns
- [ ] Component composition strategies
- [ ] Better developer experience tools

### Framework Support
- React 18+ (supported)
- Next.js 13+ App Router (supported)
- Vue 3 (auto-created on first contribution)
- Svelte 4+ (auto-created on first contribution)
- SolidJS (auto-created on first contribution)

## Built by BitByBit-B3

**Organization**: [BitByBit-B3](https://github.com/BitByBit-B3)

**Team** (university students exploring AI-assisted development):
- [YasogaN](https://github.com/YasogaN)
- [Methika1234](https://github.com/Methika1234)
- [Sithumli](https://github.com/Sithumli)
- [Thilina2468](https://github.com/Thilina2468)
- [d3varaja](https://github.com/d3varaja)
- [Thanukamax](https://github.com/Thanukamax)

**Want to experiment with us?** Try the AI-assisted workflow and share your feedback!

## Documentation

- **Website**: [https://bitbybit-b3.github.io/elements](https://bitbybit-b3.github.io/elements)
- **Architecture**: [ARCHITECTURE.md](ARCHITECTURE.md) - Deep dive into expandable system
- **Examples**: [EXAMPLES.md](EXAMPLES.md) - Real-world usage patterns
- **Contributing**: [CONTRIBUTING.md](CONTRIBUTING.md) - How to contribute
- **Production Guide**: [PRODUCTION-READY-CHECKLIST.md](PRODUCTION-READY-CHECKLIST.md)

## Tech Stack

- **UI Primitives**: [Radix UI](https://www.radix-ui.com/) - Accessible, unstyled components
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- **Build**: [tsup](https://tsup.egoist.dev/) - Lightning-fast bundler
- **Type Safety**: TypeScript - Full type coverage
- **Automation**: Custom slash commands - Works with any AI
- **CI/CD**: GitHub Actions - Self-scaling workflows
- **Package Manager**: pnpm - Efficient monorepo management

## FAQ

### What makes this different from other component libraries?

We're experimenting with **agentic workflows** for library contributions. Instead of manually managing build configs and dependencies, tools like Claude Code can handle that automatically through custom automation commands.

### Was this built by AI?

No! Built by our team of university students. We designed the architecture to work seamlessly WITH agentic coding tools, but humans wrote the code and make the decisions.

### What tools work with this?

The architecture is optimized for **Claude Code**, but works with any agentic coding assistant that can:
- Read/write files
- Execute terminal commands
- Run custom slash commands

Also compatible with: Cursor, GitHub Copilot, and similar tools.

### Do I need AI tools to use the components?

Not at all! Install and use like any npm package:
```bash
npm install @bitbybit-b3/elements-react
```

Agentic tools are only needed if you want to contribute using our automated workflows.

### Is this production-ready?

This is an **experimental/learning project** by university students. Components use modern patterns (TypeScript, Radix UI, Tailwind), but consider it a proof-of-concept for AI-assisted development rather than battle-tested production code.

Use at your own discretion and feel free to contribute improvements!

### Why build this?

We wanted to explore: Can agentic tools like Claude Code actually streamline open source contribution? This project is our answer—an experiment in making contribution workflows faster and more accessible through intelligent automation.

## License

Apache 2.0 - See [LICENSE](LICENSE) for details.

## Links

- **GitHub**: [https://github.com/BitByBit-B3/elements](https://github.com/BitByBit-B3/elements)
- **npm**: [@bitbybit-b3/elements-react](https://www.npmjs.com/package/@bitbybit-b3/elements-react)
- **Documentation**: [https://bitbybit-b3.github.io/elements](https://bitbybit-b3.github.io/elements)
- **Issues**: [https://github.com/BitByBit-B3/elements/issues](https://github.com/BitByBit-B3/elements/issues)
- **Discussions**: [Join the conversation](https://github.com/BitByBit-B3/elements/discussions)

---

**An experiment in AI-assisted development** | Built by [BitByBit-B3](https://github.com/BitByBit-B3) university students | Optimized for Claude Code and agentic workflows
