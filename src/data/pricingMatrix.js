export const PRICING_MATRIX = {
  tiers: {
    starter:    { name: 'Starter',    baseRateUSD: 29  },
    pro:        { name: 'Pro',        baseRateUSD: 99  },
    enterprise: { name: 'Enterprise', baseRateUSD: 299 },
  },
  tariffs: {
    USD: { symbol: '$', multiplier: 1.0,  locale: 'en-US', code: 'USD' },
    INR: { symbol: '₹', multiplier: 83.5, locale: 'en-IN', code: 'INR' },
    EUR: { symbol: '€', multiplier: 0.92, locale: 'de-DE', code: 'EUR' },
  },
  billing: {
    monthly: { multiplier: 1.0,  suffix: '/mo' },
    annual:  { multiplier: 0.80, suffix: '/mo, billed yearly' },
  },
}

export function computePrice(tierKey, currencyKey, billingKey) {
  const base    = PRICING_MATRIX.tiers[tierKey].baseRateUSD
  const tariff  = PRICING_MATRIX.tariffs[currencyKey]
  const billing = PRICING_MATRIX.billing[billingKey]
  const raw     = base * tariff.multiplier * billing.multiplier
  return new Intl.NumberFormat(tariff.locale, {
    style: 'currency',
    currency: tariff.code,
    maximumFractionDigits: 0
  }).format(raw)
}
