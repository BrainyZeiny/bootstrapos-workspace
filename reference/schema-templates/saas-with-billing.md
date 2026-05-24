# Schema Template: SaaS with Billing

## Use This For
Any SaaS product with subscription billing, team accounts, and tiered pricing.

## Tables

### users
| Field | Type | Notes |
|---|---|---|
| id | integer | primary key |
| name | string | |
| email | string | unique |
| password_hash | string | |
| stripe_customer_id | string | |
| created_at | timestamp | |

### organizations
| Field | Type | Notes |
|---|---|---|
| id | integer | primary key |
| name | string | |
| slug | string | unique, for subdomain or URL |
| plan | string | 'free', 'starter', 'pro', 'enterprise' |
| stripe_subscription_id | string | |
| subscription_status | string | 'active', 'past_due', 'cancelled', 'trialing' |
| trial_ends_at | timestamp | |
| created_at | timestamp | |

### organization_members
| Field | Type | Notes |
|---|---|---|
| id | integer | primary key |
| organization_id | integer | → organizations.id |
| user_id | integer | → users.id |
| role | string | 'owner', 'admin', 'member' |
| invited_by | integer | → users.id |
| joined_at | timestamp | |

### invitations
| Field | Type | Notes |
|---|---|---|
| id | integer | primary key |
| organization_id | integer | → organizations.id |
| email | string | |
| role | string | |
| token | string | unique, for invite link |
| accepted | boolean | default false |
| expires_at | timestamp | |
| created_at | timestamp | |

## Relationships

- One Organization has many Users via OrganizationMember (many-to-many)
- One OrganizationMember has one role
- Invitations belong to an Organization

## Plan Limits (Implement in Code)

```typescript
const PLAN_LIMITS = {
  free: { members: 3, projects: 1 },
  starter: { members: 10, projects: 5 },
  pro: { members: 25, projects: 20 },
  enterprise: { members: Infinity, projects: Infinity },
}
```

## Stripe Webhook Events to Handle

- customer.subscription.created → update organization plan
- customer.subscription.updated → update plan and status
- customer.subscription.deleted → downgrade to free
- invoice.payment_failed → mark as past_due, notify owner
- invoice.payment_succeeded → update subscription status to active
