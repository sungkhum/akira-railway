import { Checkout } from "@dodopayments/nextjs";

export const dynamic = "force-dynamic";

let handler: ReturnType<typeof Checkout>;

export const GET = (...args: Parameters<typeof handler>) => {
  handler ??= Checkout({
    bearerToken: process.env.DODO_API_KEY!,
    returnUrl: process.env.DODO_PAYMENTS_RETURN_URL,
    environment: "test_mode",
    type: "static",
  });
  return handler(...args);
};
