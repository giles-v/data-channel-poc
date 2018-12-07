/**
 * Output a props array for components to use for crumb-passing.
 *
 * @param {Object} props - React component props
 * @param {string} componentSlug - the slugified name, e.g. myComponent
 */
export function autoCrumb(props, componentSlug) {
  const bits = props.crumb ? props.crumb.split('.') : [];
  bits.push(componentSlug);
  return {
    crumb: bits.join('.')
  };
}
