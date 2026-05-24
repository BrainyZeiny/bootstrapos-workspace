# Schema Template: Social Feed

## Use This For
Apps with user-generated content, following/follower relationships, likes, and comments. Twitter, Instagram, LinkedIn feed clones.

## Tables

### users
| Field | Type | Notes |
|---|---|---|
| id | integer | primary key |
| username | string | unique |
| name | string | display name |
| email | string | unique |
| password_hash | string | |
| bio | string | |
| avatar_url | string | |
| followers_count | integer | cached counter |
| following_count | integer | cached counter |
| created_at | timestamp | |

### posts
| Field | Type | Notes |
|---|---|---|
| id | integer | primary key |
| author_id | integer | → users.id |
| body | string (text) | |
| image_url | string | optional |
| likes_count | integer | cached counter |
| comments_count | integer | cached counter |
| created_at | timestamp | |

### follows
| Field | Type | Notes |
|---|---|---|
| id | integer | primary key |
| follower_id | integer | → users.id (the person following) |
| following_id | integer | → users.id (the person being followed) |
| created_at | timestamp | |

### likes
| Field | Type | Notes |
|---|---|---|
| id | integer | primary key |
| user_id | integer | → users.id |
| post_id | integer | → posts.id |
| created_at | timestamp | |

### comments
| Field | Type | Notes |
|---|---|---|
| id | integer | primary key |
| post_id | integer | → posts.id |
| author_id | integer | → users.id |
| body | string | |
| created_at | timestamp | |

## Relationships

- One User has many Posts
- Users follow Users via Follows (self-referential many-to-many)
- Users like Posts via Likes (many-to-many)
- Posts have many Comments

## Feed Query

```graphql
query GetFeed($userId: Int!) {
  posts(
    where: {
      author: {
        followers: { follower_id: { _eq: $userId } }
      }
    }
    order_by: { created_at: desc }
    limit: 20
  ) {
    id
    body
    image_url
    likes_count
    comments_count
    created_at
    author {
      username
      name
      avatar_url
    }
  }
}
```
