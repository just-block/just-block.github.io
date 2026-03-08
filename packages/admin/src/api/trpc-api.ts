import { createTRPCClient, httpLink } from "@trpc/client"
import type { AppRouter } from "api"
import { env } from "../env"

export const api = createTRPCClient<AppRouter>({
  links: [
    httpLink({
      url: `${env.VITE_API_URL}/trpc`,
      fetch(url, options) {
        return fetch(url, { ...options, credentials: "include" })
      },
    }),
  ],
})
