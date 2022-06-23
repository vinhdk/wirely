export type JsonApiCorePrimitive = string | number | bigint | boolean;

export type JsonApiNullablePrimitive = undefined  | null;

export type JsonApiPrimitive = JsonApiCorePrimitive  | JsonApiNullablePrimitive | symbol;
