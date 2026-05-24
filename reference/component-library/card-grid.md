# Component Template: Card Grid

## Use This For
Displaying a collection of items in a responsive grid. Product listings, blog posts, team members, activity cards.

## Component Interface

```typescript
interface CardGridProps<T> {
  items: T[]
  renderCard: (item: T) => React.ReactNode
  columns?: {
    mobile?: number   // default 1
    tablet?: number   // default 2
    desktop?: number  // default 3
  }
  loading?: boolean
  skeletonCount?: number
  emptyMessage?: string
}
```

## Build Prompt

```
Build me a CardGrid component in TypeScript and Tailwind CSS.

Props:
- items: array of any type
- renderCard: function that takes one item and returns a React node (the card UI)
- columns: object with mobile, tablet, desktop counts (defaults: 1, 2, 3)
- loading: boolean
- skeletonCount: number of skeleton cards to show when loading (default 6)
- emptyMessage: string when items is empty

Features:
- Responsive CSS grid based on columns prop
- Loading state: shows skeleton cards (grey placeholder boxes with pulse animation)
- Empty state: centered emptyMessage
- Gap between cards: consistent spacing

Style: clean grid, Tailwind only, no external card component.
```

## Card Example (Pass as renderCard)

```tsx
const ActivityCard = (activity: Activity) => (
  <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
    <h3 className="font-semibold">{activity.name}</h3>
    <p className="text-sm text-gray-500">{activity.start_time}</p>
    <p className="text-sm">{activity.capacity} spots</p>
  </div>
)

<CardGrid
  items={activities}
  renderCard={ActivityCard}
  columns={{ mobile: 1, tablet: 2, desktop: 3 }}
  loading={isLoading}
  emptyMessage="No activities yet"
/>
```
