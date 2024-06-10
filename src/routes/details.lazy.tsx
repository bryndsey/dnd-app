import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/details')({
  component: () => <div>Hello /details!</div>
})