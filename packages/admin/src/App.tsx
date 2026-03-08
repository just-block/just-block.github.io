import { useState } from "react"
import { Button } from "@/components/ui/button"
import { api } from "@/api/trpc-api"

export function App() {
  const [status, setStatus] = useState<string | null>(null)

  const checkHealth = async () => {
    setStatus("loading...")
    try {
      const result = await api.healthcheck.query()
      setStatus(result.ok ? "OK" : "Failed")
    } catch (e) {
      setStatus(e instanceof Error ? e.message : "Error")
    }
  }

  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div>
          <Button onClick={checkHealth}>Healthcheck</Button>
          {status && (
            <p className="mt-2 font-mono text-xs text-muted-foreground">
              {status}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
