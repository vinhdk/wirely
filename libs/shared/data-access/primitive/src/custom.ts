import { JsonApiPrimitive } from "./primitive";

export type JsonApiObject = {
  [key: string]: JsonApiValue;
};

export type JsonApiArray = Array<JsonApiValue>;

export type JsonApiValue = JsonApiPrimitive | JsonApiObject | JsonApiArray;
