# Component Template: Modal

## Use This For
Confirmation dialogs, forms in overlay, detail views, any content that appears over the current page.

## Component Interface

```typescript
interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl'
  showCloseButton?: boolean
}
```

## Build Prompt

```
Build me a reusable Modal component in TypeScript and Tailwind CSS.

Props:
- isOpen: boolean
- onClose: callback function
- title: string shown in modal header
- children: content rendered inside modal body
- size: 'sm' | 'md' | 'lg' | 'xl' (default 'md')
- showCloseButton: boolean (default true)

Features:
- Semi-transparent dark overlay behind modal
- Clicking overlay closes the modal (calls onClose)
- Escape key closes the modal
- Smooth open/close animation (fade in)
- Scrollable body for long content
- Accessible: focus trapped inside when open, aria attributes

Style: white modal card, rounded corners, shadow. Header with title and X button.

Add console.log when modal opens and closes for debugging.
```

## Usage Example

```tsx
const [isOpen, setIsOpen] = useState(false)

<button onClick={() => setIsOpen(true)}>Add Student</button>

<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Add New Student"
  size="md"
>
  <Form
    fields={studentFields}
    onSubmit={handleAddStudent}
    submitLabel="Add Student"
  />
</Modal>
```
