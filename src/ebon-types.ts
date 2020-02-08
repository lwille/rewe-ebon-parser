export type TaxCategory = 'A' | 'B';

export type ReceiptItem = {
    /** The tax category of this item, used to calculate the tax */
    taxCategory: TaxCategory,

    /** Name of this item */
    name: string,

    /** Subtotal value including multiple units */
    subTotal: number,

    /** Whether the item qualifies for PayBack */
    paybackQualified: boolean,

    /** Amount of this item; for unit, see the unit field */
    amount: number,

    /** The unit of this item (piece, kg etc.) */
    unit?: string,

    /** Price per unit of this item */
    pricePerUnit?: number
};

export type Payment = {
    /** Type of payment (cash, EC, REWE credit etc.) */
    type: string,

    /** Value of this payment */
    value: number
}

export type Receipt = {
    /** Date and time of the purchase */
    date: Date,

    /** Market identifier */
    market: string,

    /** Cashier identifier */
    cashier: string,

    /** Checkout identifier */
    checkout: string,

    /** Value Added Tax Identification Number */
    vatin: string,

    /** Items of this purchase */
    items: ReceiptItem[],

    /** Total sum */
    total: number,

    /** The customer's payments */
    given: Payment[],

    /** Change given to the customer if he paid cash */
    change?: number,

    /** Cash money paid out; only defined if the customer used this feature */
    payout?: number,

    /** PayBack-related data, only defined if the customer used a PayBack card */
    payback?: PaybackData,

    /** Tax data */
    taxDetails: TaxDetails
};

export type PaybackCoupon = {
    /** Name of this coupon */
    name: string,

    /** PayBack Points generated with this coupon */
    points: number
};

export type PaybackData = {
    /** Card identification */
    card: string,

    /** Amount of PayBack points before this purchase */
    pointsBefore: number,

    /** PayBack points earned with this purchase */
    earnedPoints: number,

    /** PayBack points excluding points generated by coupns */
    basePoints: number,

    /** PayBack points generated with coupons */
    couponPoints: number,

    /** PayBack-qualified revenue in this purchase */
    qualifiedRevenue: number,

    /** Coupons used in this purchase */
    usedCoupons: PaybackCoupon[],

    /** If the customer payed with REWE PayBack credit, this is the amount used, otherwise undefined */
    usedREWECredit?: number,

    /** If the customer payed with REWE PayBack credit, this is the amount of REWE PayBack credit left after the purchase */
    newREWECredit?: number
};

export type TaxDetailsEntry = {
    /** Tax percentage, e.g. 19 */
    taxPercent: number,

    /** Net value */
    net: number,

    /** Tax amount */
    tax: number,

    /** Gross value (net + tax) */
    gross: number
};

export type TaxDetails = {
    /** Total tax info */
    total: Omit<TaxDetailsEntry, 'taxPercent'>,
    /** Tax on category A items */
    A?: TaxDetailsEntry,

    /** Tax on category B items */
    B?: TaxDetailsEntry
};
