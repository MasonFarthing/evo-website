// Parts of the site that only show while running locally (npm run dev), not on
// the live site. Set a flag to true to put that part live.

// The Required Reading list on the home page, and its link in the header.
export const SHOW_READING = process.env.NODE_ENV === "development"
