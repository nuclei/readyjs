export const ready = function (fn) {
  if (document.readyState !== 'loading') {
    setTimeout(fn) // Execute asynchronously to have a consistent behavior
  } else {
    document.addEventListener('DOMContentLoaded', fn)
  }
}
