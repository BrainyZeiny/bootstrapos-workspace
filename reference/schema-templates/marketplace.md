# Schema Template: Marketplace

## Use This For
Two-sided marketplaces: buyers and sellers, services and providers, renters and hosts.

## Tables

### users
| Field | Type | Notes |
|---|---|---|
| id | integer | primary key |
| name | string | |
| email | string | unique |
| password_hash | string | |
| role | string | 'buyer', 'seller', or 'both' |
| stripe_customer_id | string | for buyers |
| stripe_account_id | string | for sellers (Connect) |
| created_at | timestamp | |

### listings
| Field | Type | Notes |
|---|---|---|
| id | integer | primary key |
| title | string | |
| description | string (text) | |
| price | integer | in cents to avoid float issues |
| price_type | string | 'fixed', 'hourly', 'daily' |
| category | string | |
| status | string | 'draft', 'active', 'paused', 'sold' |
| seller_id | integer | → users.id |
| created_at | timestamp | |
| updated_at | timestamp | |

### listing_images
| Field | Type | Notes |
|---|---|---|
| id | integer | primary key |
| listing_id | integer | → listings.id |
| url | string | |
| position | integer | display order |

### orders
| Field | Type | Notes |
|---|---|---|
| id | integer | primary key |
| buyer_id | integer | → users.id |
| seller_id | integer | → users.id |
| listing_id | integer | → listings.id |
| amount | integer | in cents |
| status | string | 'pending', 'paid', 'completed', 'refunded', 'cancelled' |
| stripe_payment_intent_id | string | |
| created_at | timestamp | |

### reviews
| Field | Type | Notes |
|---|---|---|
| id | integer | primary key |
| order_id | integer | → orders.id |
| reviewer_id | integer | → users.id |
| reviewee_id | integer | → users.id |
| rating | integer | 1-5 |
| body | string (text) | |
| created_at | timestamp | |

### messages
| Field | Type | Notes |
|---|---|---|
| id | integer | primary key |
| sender_id | integer | → users.id |
| recipient_id | integer | → users.id |
| listing_id | integer | → listings.id (context) |
| body | string (text) | |
| read | boolean | default false |
| created_at | timestamp | |

## Relationships

- One User (seller) has many Listings
- One Listing has many ListingImages
- One Order belongs to one Buyer, one Seller, one Listing
- One Order has one Review
- Messages belong to Sender and Recipient users
