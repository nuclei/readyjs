export const ready = function (fn) {
  const completed = () => {
    document.removeEventListener('DOMContentLoaded', completed)
    window.removeEventListener('load', completed)
    fn()
  }

  if (document.readyState !== 'loading') {
    setTimeout(fn) // Execute asynchronously to have a consistent behavior
  } else {
    document.addEventListener('DOMContentLoaded', completed)

    // A fallback to window.onload, that will always work
    window.addEventListener('load', completed)
  }
}
