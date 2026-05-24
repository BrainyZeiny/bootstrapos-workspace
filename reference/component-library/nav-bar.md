# Component Template: Navigation Bar

## Use This For
Top navigation for any app. Shows logo, nav links, and user account menu.

## Component Interface

```typescript
interface NavItem {
  label: string
  href: string
  icon?: React.ReactNode
}

interface NavBarProps {
  logo: React.ReactNode
  items: NavItem[]
  user?: {
    name: string
    email: string
    avatarUrl?: string
  }
  onSignOut?: () => void
}
```

## Build Prompt

```
Build me a NavBar component in TypeScript and Tailwind CSS.

Props:
- logo: React node (image or text)
- items: array of { label, href, icon (optional) }
- user: object with name, email, avatarUrl (optional) — shown when logged in
- onSignOut: callback for sign out action

Features:
- Desktop: horizontal nav with logo left, links center, user avatar right
- Mobile: hamburger menu that opens a slide-down or slide-over nav
- Active link highlighted based on current route (use Next.js usePathname)
- User avatar with dropdown menu on click: account settings link + sign out button
- If no user prop: show Sign In and Sign Up buttons instead

Style: clean, white background, subtle border bottom. No heavy shadows.

Use Next.js Link component for all navigation (not <a> tags).

Add console.log when mobile menu opens/closes for debugging.
```

## Usage Example

```tsx
<NavBar
  logo={<span className="font-bold text-xl">FieldTrip</span>}
  items={[
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Students', href: '/students' },
    { label: 'Activities', href: '/activities' },
  ]}
  user={currentUser}
  onSignOut={handleSignOut}
/>
```
