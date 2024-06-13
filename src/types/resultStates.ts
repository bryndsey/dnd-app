// Create reusable types for the different states of a result
export type Pending = { status: "pending" };
export type Error = { status: "error"; error: globalThis.Error | null };
export type Success<T> = { status: "success"; data: T };
