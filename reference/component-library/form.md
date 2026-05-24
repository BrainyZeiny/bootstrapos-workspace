# Component Template: Form

## Use This For
Any form that collects user input and submits to Hasura via GraphQL mutation.

## Component Interface

```typescript
interface FormField {
  name: string
  label: string
  type: 'text' | 'email' | 'password' | 'textarea' | 'select' | 'checkbox'
  placeholder?: string
  required?: boolean
  options?: { value: string; label: string }[] // for select fields
}

interface FormProps {
  fields: FormField[]
  onSubmit: (data: Record<string, unknown>) => Promise<void>
  submitLabel?: string
  loading?: boolean
  error?: string
}
```

## Build Prompt

```
Build me a reusable Form component in TypeScript and Tailwind CSS.

It takes in:
- fields: array of field definitions (name, label, type, placeholder, required)
- onSubmit: async function that receives the form data object
- submitLabel: text for the submit button (default "Submit")
- loading: boolean that disables and shows spinner on submit button
- error: string displayed as an error message above the submit button

Features:
- Supports field types: text, email, password, textarea, select, checkbox
- Client-side validation: required fields, email format
- Shows field-level error messages
- Disables all inputs when loading is true
- Submit button shows spinner when loading is true

Style: clean form with Tailwind. Labels above inputs. Error messages in red below fields.

Add console.log of the form data before submit for debugging.
```

## Usage Example

```tsx
<Form
  fields={[
    { name: 'name', label: 'Full Name', type: 'text', required: true },
    { name: 'email', label: 'Email', type: 'email', required: true },
    { name: 'group', label: 'Group', type: 'select', options: [
      { value: 'A', label: 'Group A' },
      { value: 'B', label: 'Group B' }
    ]}
  ]}
  onSubmit={async (data) => {
    await createStudent({ variables: data })
  }}
  submitLabel="Add Student"
  loading={loading}
  error={error?.message}
/>
```
