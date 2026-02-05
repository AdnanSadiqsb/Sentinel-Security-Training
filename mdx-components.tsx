import type { ComponentType } from "react";

type Components = Record<string, ComponentType<any>>;

export function useMDXComponents(components: Components = {}) {
  return components;
}
