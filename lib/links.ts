// Where the Evo app lives. Accounts are created and signed into there, not on
// this site: every Sign In / Sign Up button here is a link to it.
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://app.use-evo.com"

export const SIGN_IN_URL = `${APP_URL}/sign-in`
export const SIGN_UP_URL = `${APP_URL}/sign-up`
