import { useEffect, useState } from 'react'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    console.log('[Home] page mounted')
  }, [])

  if (!mounted) return null

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          TaskFlow
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          A simple task manager built with the BootstrapOS stack.
          TypeScript. Next.js. Hasura. Turso. Deployed on Vercel.
        </p>

        <div className="flex gap-4 justify-center">
          <a
            href="/login"
            className="px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors"
          >
            Sign In
          </a>
          <a
            href="/signup"
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            Create Account
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-6 text-left">
          <div className="p-4 bg-white rounded-lg border">
            <div className="text-2xl mb-2">📋</div>
            <h3 className="font-semibold text-gray-900">Projects</h3>
            <p className="text-sm text-gray-500 mt-1">Organize work into projects with your team</p>
          </div>
          <div className="p-4 bg-white rounded-lg border">
            <div className="text-2xl mb-2">✅</div>
            <h3 className="font-semibold text-gray-900">Tasks</h3>
            <p className="text-sm text-gray-500 mt-1">Track tasks through todo, in progress, and done</p>
          </div>
          <div className="p-4 bg-white rounded-lg border">
            <div className="text-2xl mb-2">👥</div>
            <h3 className="font-semibold text-gray-900">Team</h3>
            <p className="text-sm text-gray-500 mt-1">Assign tasks to team members and collaborate</p>
          </div>
        </div>
      </div>
    </main>
  )
}
