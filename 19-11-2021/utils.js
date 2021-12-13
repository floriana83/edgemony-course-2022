/**
 * Render some content within a container HTML tag
 */
const render = (container, content) => (container.innerHTML = content);

/**
 * Wrapper for document.querySelector (type less!)
 */
const q = (selector) => document.querySelector(selector);

export { render, q };
