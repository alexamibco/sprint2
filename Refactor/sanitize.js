export function sanitize(text) {
  const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
    "/": "&#x2F;"
  };
  return text.replace(/[&<>"'/]/g, function (match) {
    return map[match];
  });
}
