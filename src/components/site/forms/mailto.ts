export const ADMISSIONS_EMAIL = "admission@ebenedictaacademy.co.ke";

/**
 * Opens the visitor's mail application with a prefilled message to the
 * Academy admissions inbox.
 */
export function openMailTo(subject: string, lines: Array<[string, string]>) {
  const body = lines
    .filter(([, v]) => v.trim() !== "")
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");
  const url = `mailto:${ADMISSIONS_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = url;
}
