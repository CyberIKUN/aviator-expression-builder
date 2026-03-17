import type { App, DefineComponent, Plugin } from "vue";

export interface TreeExpressionBuilderNotifier {
  info?: (message: string) => void;
  success?: (message: string) => void;
  warning?: (message: string) => void;
  error?: (message: string) => void;
}

export interface AviatorExpressionBuilderPluginComponentNames {
  builder?: string;
  modal?: string;
}

export interface AviatorExpressionBuilderPluginOptions {
  componentNames?: AviatorExpressionBuilderPluginComponentNames;
}

export declare const AviatorExpressionBuilder: DefineComponent<
  Record<string, unknown>,
  Record<string, unknown>,
  unknown
>;

export declare const AviatorExpressionBuilderModal: DefineComponent<
  Record<string, unknown>,
  Record<string, unknown>,
  unknown
>;

export declare function installAviatorExpressionBuilder(
  app: App,
  options?: AviatorExpressionBuilderPluginOptions
): void;

export declare const AviatorExpressionBuilderPlugin: Plugin;

export declare const defaultTreeExpressionBuilderNotifier: TreeExpressionBuilderNotifier;
export declare const noopTreeExpressionBuilderNotifier: TreeExpressionBuilderNotifier;
