import { createTRPCClient, httpLink } from "@trpc/client"
import { createTRPCOptionsProxy } from "@trpc/tanstack-react-query"
import type { AppRouter } from "api"
import { env } from "../env"
import { queryClient } from "./query-client"

const trpcClient = createTRPCClient<AppRouter>({
  links: [
    httpLink({
      url: `${env.VITE_API_URL}/trpc`,
      fetch(url, options) {
        return fetch(url, { ...options, credentials: "include" })
      },
    }),
  ],
})

export const api = createTRPCOptionsProxy<AppRouter>({
  client: trpcClient,
  queryClient,
})
