import zepto from "./zepto"

// If `$` is not yet defined, point it to `Zepto`
window.Zepto = zepto

window.$ === undefined && (window.$ = zepto)

export default $ = zepto
export const Zepto = zepto