export function isArray(arg: unknown): arg is unknown[] {
  return Array.isArray(arg);
}
export function isEmpty(arg: unknown) {
  if (typeof arg === "string") {
    return arg.length === 0;
  }
  return isArray(arg) && arg.length <= 0;
}

//TODO length 체크로 변경
