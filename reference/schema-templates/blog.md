# Schema Template: Blog

## Use This For
Personal blogs, company blogs, content sites with authors and articles.

## Tables

### users
| Field | Type | Notes |
|---|---|---|
| id | integer | primary key, auto-increment |
| name | string | author's display name |
| email | string | unique |
| password_hash | string | never store plain text passwords |
| bio | string | short author bio |
| avatar_url | string | profile picture |
| created_at | timestamp | |

### posts
| Field | Type | Notes |
|---|---|---|
| id | integer | primary key |
| title | string | |
| slug | string | unique, URL-friendly version of title |
| body | string (text) | full markdown content |
| excerpt | string | short summary for cards and SEO |
| published | boolean | default false |
| published_at | timestamp | null until published |
| cover_image_url | string | |
| author_id | integer | → users.id |
| created_at | timestamp | |
| updated_at | timestamp | |

### tags
| Field | Type | Notes |
|---|---|---|
| id | integer | primary key |
| name | string | unique |
| slug | string | unique |

### post_tags (junction table)
| Field | Type | Notes |
|---|---|---|
| id | integer | primary key |
| post_id | integer | → posts.id |
| tag_id | integer | → tags.id |

## Relationships

- One User has many Posts (author_id on Post)
- One Post has many Tags via PostTag junction (many-to-many)

## Hasura Permissions

- Public: read published posts only
- Author: read/write their own posts
- Admin: read/write all posts, all users

## GraphQL Queries to Build

```graphql
# Get all published posts with author
query GetPublishedPosts {
  posts(where: {published: {_eq: true}}, order_by: {published_at: desc}) {
    id
    title
    slug
    excerpt
    cover_image_url
    published_at
    author {
      name
      avatar_url
    }
    post_tags {
      tag {
        name
        slug
      }
    }
  }
}

# Get single post by slug
query GetPost($slug: String!) {
  posts(where: {slug: {_eq: $slug}, published: {_eq: true}}) {
    title
    body
    cover_image_url
    published_at
    author {
      name
      bio
      avatar_url
    }
  }
}
```
