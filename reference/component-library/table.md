# Component Template: Table

## Use This For
Displaying lists of records with sortable columns, pagination, and row actions.

## Component Interface

```typescript
interface TableColumn<T> {
  key: keyof T
  label: string
  render?: (value: T[keyof T], row: T) => React.ReactNode
  sortable?: boolean
}

interface TableProps<T> {
  data: T[]
  columns: TableColumn<T>[]
  onRowClick?: (row: T) => void
  loading?: boolean
  emptyMessage?: string
}
```

## Build Prompt

```
Build me a reusable Table component in TypeScript and Tailwind CSS.

Props:
- data: array of objects
- columns: array of { key, label, render (optional), sortable (optional) }
- onRowClick: optional callback when a row is clicked
- loading: boolean for skeleton state
- emptyMessage: string shown when data is empty

Features:
- Sortable columns (click header to sort ascending/descending)
- Loading skeleton (3 skeleton rows when loading is true)
- Empty state with emptyMessage
- Row hover highlight
- Responsive (horizontal scroll on mobile)
- TypeScript generic so it works with any data shape

Style: clean, minimal, Tailwind. No external UI library.

Add console.log when a row is clicked for debugging.
```

## Usage Example

```tsx
<Table
  data={students}
  columns={[
    { key: 'name', label: 'Name', sortable: true },
    { key: 'email', label: 'Email' },
    { key: 'group', label: 'Group' },
    {
      key: 'paid',
      label: 'Paid',
      render: (value) => (
        <span className={value ? 'text-green-600' : 'text-red-600'}>
          {value ? 'Yes' : 'No'}
        </span>
      )
    }
  ]}
  onRowClick={(student) => router.push(`/students/${student.id}`)}
  loading={isLoading}
  emptyMessage="No students yet"
/>
```
