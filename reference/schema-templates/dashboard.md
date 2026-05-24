# Schema Template: Dashboard / Analytics App

## Use This For
Admin dashboards, analytics platforms, internal tools, reporting apps.

## Tables

### users
| Field | Type | Notes |
|---|---|---|
| id | integer | primary key |
| name | string | |
| email | string | unique |
| password_hash | string | |
| role | string | 'admin', 'viewer', 'editor' |
| created_at | timestamp | |

### events
| Field | Type | Notes |
|---|---|---|
| id | integer | primary key |
| user_id | integer | → users.id (nullable for anonymous) |
| event_name | string | e.g. 'page_view', 'button_click', 'signup' |
| properties | string (JSON) | flexible key-value store |
| session_id | string | |
| ip_address | string | |
| user_agent | string | |
| created_at | timestamp | |

### reports
| Field | Type | Notes |
|---|---|---|
| id | integer | primary key |
| name | string | |
| description | string | |
| query | string (text) | saved query definition |
| created_by | integer | → users.id |
| created_at | timestamp | |
| updated_at | timestamp | |

### dashboards
| Field | Type | Notes |
|---|---|---|
| id | integer | primary key |
| name | string | |
| created_by | integer | → users.id |
| is_public | boolean | default false |
| created_at | timestamp | |

### dashboard_widgets
| Field | Type | Notes |
|---|---|---|
| id | integer | primary key |
| dashboard_id | integer | → dashboards.id |
| report_id | integer | → reports.id |
| position_x | integer | grid position |
| position_y | integer | grid position |
| width | integer | grid width |
| height | integer | grid height |

## Key Queries

```graphql
# Get event counts by name for date range
query GetEventCounts($start: timestamptz!, $end: timestamptz!) {
  events_aggregate(where: { created_at: { _gte: $start, _lte: $end } }) {
    aggregate { count }
    nodes {
      event_name
    }
  }
}
```
