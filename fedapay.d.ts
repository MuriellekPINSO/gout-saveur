// Type declarations for FedaPay Checkout.js global

interface FedaPayTransaction {
  id: number;
  reference: string;
  amount: number;
  description: string;
  status: string;
  [key: string]: unknown;
}

interface FedaPayInitOptions {
  public_key: string;
  environment?: 'sandbox' | 'live';
  locale?: string;
  transaction?: {
    amount: number;
    description: string;
    custom_metadata?: Record<string, unknown>;
  };
  customer?: {
    email?: string;
    firstname?: string;
    lastname?: string;
    phone_number?: {
      number?: string;
      country?: string;
    };
  };
  currency?: {
    iso?: string;
  };
  container?: string;
  onComplete?: (args: { reason: number; transaction: FedaPayTransaction }) => void;
}

interface FedaPayWidget {
  open: () => void;
}

interface FedaPayStatic {
  init: (selectorOrOptions: string | FedaPayInitOptions, options?: FedaPayInitOptions) => FedaPayWidget;
  CHECKOUT_COMPLETED: number;
  DIALOG_DISMISSED: number;
}

declare const FedaPay: FedaPayStatic;
