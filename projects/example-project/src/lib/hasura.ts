const HASURA_ENDPOINT = process.env.NEXT_PUBLIC_HASURA_ENDPOINT!
const HASURA_ADMIN_SECRET = process.env.HASURA_ADMIN_SECRET!

interface GraphQLResponse<T> {
  data?: T
  errors?: { message: string }[]
}

export async function query<T>(
  gql: string,
  variables?: Record<string, unknown>,
  adminSecret?: boolean
): Promise<T> {
  console.log('[hasura] query start', { gql: gql.slice(0, 50), variables })

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  }

  if (adminSecret) {
    headers['x-hasura-admin-secret'] = HASURA_ADMIN_SECRET
  }

  const response = await fetch(HASURA_ENDPOINT, {
    method: 'POST',
    headers,
    body: JSON.stringify({ query: gql, variables }),
  })

  const json: GraphQLResponse<T> = await response.json()

  if (json.errors) {
    console.error('[hasura] query error', json.errors)
    throw new Error(json.errors[0].message)
  }

  console.log('[hasura] query success', { data: json.data })
  return json.data as T
}
