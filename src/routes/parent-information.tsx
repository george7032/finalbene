import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/parent-information")({
  beforeLoad: () => {
    throw redirect({ to: "/news", replace: true });
  },
});
