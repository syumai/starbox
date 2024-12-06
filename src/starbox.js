const AsyncFunction = (async () => {}).constructor;

/**
 * run executes the src as a body of an async function.
 * @param {string} src
 */
export async function run(src) {
  return String(await new AsyncFunction(src)());
}
