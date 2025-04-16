
# Frontend Design System Documentation

This design system documentation provides guidelines, components, and patterns used across our application to maintain visual consistency and improve development efficiency.

## Table of Contents

1. [Colors](#colors)
2. [Typography](#typography)
3. [Spacing](#spacing)
4. [Components](#components)
5. [Layouts](#layouts)
6. [Responsive Design](#responsive-design)
7. [Forms](#forms)
8. [Modals](#modals)

## Colors

Our color palette is designed to provide a cohesive visual experience while ensuring accessibility.

### Primary Colors

- Primary Blue: `#1E40AF` - Used for primary actions, links, and highlighting important UI elements
- Background Light: `#EEF2FF` - Used for modal backgrounds and secondary panels
- Neutral Border: `#E5E7EB` - Used for dividers and subtle borders

### Semantic Colors

- Success: Green variants for confirmation and success states
- Warning: Yellow/orange variants for cautionary states
- Danger: Red variants for errors and destructive actions
- Info: Blue variants for informational states

### Text Colors

- Primary Text: Dark gray for body text
- Secondary Text: Medium gray for less emphasized text
- Muted Text: Light gray for placeholders and disabled states

## Typography

We use a consistent typographic scale to maintain readability and visual hierarchy.

### Font Family

- Primary: System font stack with fallbacks to ensure consistent rendering across platforms

### Font Sizes

- XS: 0.75rem (12px)
- SM: 0.875rem (14px) - Used for secondary text, labels
- Base: 1rem (16px) - Default body text
- LG: 1.125rem (18px) - Subtitles
- XL: 1.25rem (20px) - Section headings
- 2XL: 1.5rem (24px) - Major headings
- 3XL: 1.875rem (30px) - Page titles

### Font Weights

- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700

## Spacing

We use a consistent spacing scale throughout the application to maintain visual rhythm.

### Spacing Scale

- 1: 0.25rem (4px)
- 2: 0.5rem (8px)
- 3: 0.75rem (12px)
- 4: 1rem (16px)
- 6: 1.5rem (24px)
- 8: 2rem (32px)
- 12: 3rem (48px)
- 16: 4rem (64px)

### Applying Spacing

- Use margins for spacing between components
- Use padding for spacing within components
- Maintain consistent spacing within component groups

## Components

Our component library is built using Shadcn UI and follows consistent patterns for extensibility and customization.

### Button

Buttons are used for actions and navigation throughout the application.

#### Variants:

- `default`: Primary blue background, white text
- `outline`: Transparent background with border
- `ghost`: No background or border, used for subtle actions
- `link`: Appears as a text link with no background

#### Sizes:

- `sm`: Small buttons for compact UI areas
- `default`: Standard size for most uses
- `lg`: Large buttons for emphasis
- `icon`: Square button for icon-only buttons

#### Usage:

```jsx
<Button>Default Button</Button>
<Button variant="outline">Outline Button</Button>
<Button variant="ghost">Ghost Button</Button>
<Button size="sm">Small Button</Button>
<Button size="lg">Large Button</Button>
<Button size="icon"><IconComponent /></Button>
```

### Input

Text inputs for collecting user data.

#### Usage:

```jsx
<Input placeholder="Enter text here" />
<Input type="email" placeholder="Email address" />
```

### Select

Dropdown selection for choosing from a list of options.

#### Usage:

```jsx
<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
  </SelectContent>
</Select>
```

### Checkbox

Checkboxes for multiple selection options.

#### Usage:

```jsx
<Checkbox id="terms" />
<label htmlFor="terms">I agree to terms</label>
```

### Tabs

Tabbed interface for organizing content.

#### Usage:

```jsx
<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content for tab 1</TabsContent>
  <TabsContent value="tab2">Content for tab 2</TabsContent>
</Tabs>
```

## Layouts

### Container

Centered container with responsive max-width.

### Card

Container for grouping related content.

#### Usage:

```jsx
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description text</CardDescription>
  </CardHeader>
  <CardContent>
    Main content goes here
  </CardContent>
  <CardFooter>
    Footer actions
  </CardFooter>
</Card>
```

### Grid

CSS Grid-based layout system for complex arrangements.

## Responsive Design

Our application is designed to work across all device sizes, with special consideration for mobile experiences.

### Breakpoints

- `sm`: 640px and up
- `md`: 768px and up
- `lg`: 1024px and up
- `xl`: 1280px and up
- `2xl`: 1536px and up

### Mobile-First Approach

- Base styles target mobile devices
- Media queries add complexity for larger screens
- Use the `useIsMobile` hook to conditionally render components based on screen size

### Responsive Patterns

- Stack elements vertically on mobile, horizontally on desktop
- Hide secondary elements on smaller screens
- Adjust font sizes and spacing based on screen size

## Forms

### Form Layout

Forms should follow a consistent layout pattern:

- Labels are positioned above inputs
- Required fields are indicated with an asterisk
- Validation errors appear below the related input
- Submit buttons are aligned to the form edges

### Form Validation

- Use form libraries like `react-hook-form` for validation
- Display validation errors clearly below inputs
- Prevent form submission if validation fails

## Modals

Modals present focused content that requires user attention or interaction.

### Modal Types

- `Sheet`: Side or bottom sheet for forms and detailed content
- `Dialog`: Centered modal for important notifications or confirmations

### Mobile Considerations

- Bottom sheets instead of side sheets on mobile
- Larger touch targets for mobile interactions
- Clear closing mechanisms (close button, backdrop tap)

### Modal Structure

```jsx
<Sheet open={open} onOpenChange={setOpen}>
  <SheetContent side={isMobile ? "bottom" : "right"}>
    <SheetHeader>
      <SheetTitle>Modal Title</SheetTitle>
      <SheetDescription>Brief description</SheetDescription>
    </SheetHeader>
    <div className="modal-content">
      Content goes here
    </div>
    <SheetFooter>
      Action buttons
    </SheetFooter>
  </SheetContent>
</Sheet>
```

---

This design system documentation is a living document and will evolve as our application grows and new patterns emerge.
