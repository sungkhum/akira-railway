import { Webhooks } from "@dodopayments/nextjs";

export const dynamic = "force-dynamic";

export const POST = Webhooks({
  webhookKey: process.env.DODO_WEBHOOK_SECRET!,
  onPaymentSucceeded: async (payload) => {
    console.log("Payment succeeded:", payload.data.payment_id);
  },
  onPaymentFailed: async (payload) => {
    console.log("Payment failed:", payload);
  },
});
