// SchoolCafe Pro - Configuration File
// Buyers customize their app by editing only this file

export const APP_CONFIG = {
    // ============================================================
    // APP BRANDING — customize for your business
    // ============================================================
    APP_NAME: 'SchoolCafe Pro',
    APP_TAGLINE: 'Fresh meals, pre-ordered',
    PRIMARY_COLOR: '#B85C38',
    SECONDARY_COLOR: '#F5E6DF',

    // ============================================================
    // BUSINESS RULES
    // ============================================================
    ACCESS_CODE: 'CCP15',   // Required for new user registration
    CURRENCY: '₹',
    COUNTRY_CODE: '+91',

    // Collection time slots
    COLLECTION_SLOTS: [
        { key: 'morning', label: 'Morning', time: '9:00 AM – 10:00 AM', emoji: '🌅' },
        { key: 'evening', label: 'Evening', time: '12:00 PM – 1:00 PM', emoji: '🌞' },
    ],

    // ============================================================
    // SUBSCRIPTION SETTINGS
    // ============================================================
    SUBSCRIPTION_START_DATE: '2026-06-01',   // YYYY-MM-DD
    SUBSCRIPTION_PLANS: [
        { months: 1, discount: 0 },
        { months: 3, discount: 15 },  // 15% off for 3-month plan
    ],

    // ============================================================
    // CONTACT INFO (shown in app for support)
    // ============================================================
    SUPPORT_EMAIL: 'support@schoolcafepro.com',
    SUPPORT_PHONE: '+91 99999 99999',
}