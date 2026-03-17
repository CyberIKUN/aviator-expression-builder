export type AviatorValueType =
  | "string"
  | "number"
  | "boolean"
  | "date"
  | "array"
  | "object"
  | "any";

export type ComparisonOperator =
  | "=="
  | "!="
  | ">"
  | ">="
  | "<"
  | "<="
  | "in"
  | "not in"
  | "contains"
  | "startsWith"
  | "endsWith"
  | "matches";

export interface AviatorFieldOption {
  label: string;
  value: string;
  type?: AviatorValueType | string;
}

export interface AviatorFunctionParameter {
  name: string;
  type?: string;
  required?: boolean;
  description?: string;
  valueType?: AviatorValueType | string;
}

export interface AviatorFunction {
  name: string;
  category?: string;
  displayName?: string;
  description?: string;
  parameters?: AviatorFunctionParameter[];
  returnType?: AviatorValueType | string;
  example?: string;
}

export interface AviatorConditionNode {
  id: string;
  type: "condition";
  field?: string;
  functionName?: string;
  comparison?: ComparisonOperator | string;
  value?: unknown;
  parameters?: unknown[];
  [key: string]: unknown;
}

export interface AviatorFunctionNode {
  id: string;
  type: "function";
  functionName?: string;
  comparison?: ComparisonOperator | string;
  value?: unknown;
  parameters?: unknown[];
  [key: string]: unknown;
}

export interface AviatorGroupNode {
  id: string;
  type: "group";
  expanded?: boolean;
  operator?: "and" | "or" | string;
  children: AviatorTreeNode[];
  [key: string]: unknown;
}

export type AviatorTreeNode =
  | AviatorConditionNode
  | AviatorFunctionNode
  | AviatorGroupNode;

export interface AviatorValidationError {
  nodeId: string;
  message: string;
}

export interface ParseExpressionResult {
  success: boolean;
  nodes: AviatorTreeNode[];
  error?: string;
}

export interface AviatorExpressionEngineContext {
  availableFields: AviatorFieldOption[];
  parameterDataTypes: Map<string, Map<string, string>>;
  getFieldTypeForNode?: (fieldPath: string) => string;
}

export interface AviatorExpressionEngine {
  parse(
    expression: string,
    context: AviatorExpressionEngineContext
  ): ParseExpressionResult;
  generate(nodes: AviatorTreeNode[], context: AviatorExpressionEngineContext): string;
  validate(nodes: AviatorTreeNode[]): AviatorValidationError[];
}

export interface AviatorRuntimeOptions {
  availableFields?: AviatorFieldOption[];
  engine?: AviatorExpressionEngine;
  getFieldTypeForNode?: (fieldPath: string) => string;
}

export interface AviatorExpressionService {
  parseDetailed(expression: string): ParseExpressionResult;
  parse(expression: string): AviatorTreeNode[];
  generate(nodes: AviatorTreeNode[]): string;
  validate(nodes: AviatorTreeNode[]): AviatorValidationError[];
  getAvailableFields(): AviatorFieldOption[];
  setAvailableFields(fields: AviatorFieldOption[]): void;
  getParameterDataTypes(): Map<string, Map<string, string>>;
  setParameterDataType(functionName: string, paramName: string, type: string): void;
  clearParameterDataTypes(): void;
}

export declare const AVIATOR_FUNCTIONS: readonly AviatorFunction[];
export declare const COMPARISON_OPERATORS: readonly (ComparisonOperator | string)[];

export declare function createAviatorExpressionService(
  options?: AviatorRuntimeOptions
): AviatorExpressionService;

export declare function parseExpression(
  expression: string,
  context?: Partial<AviatorExpressionEngineContext>
): ParseExpressionResult;

export declare function parseExpressionNodes(
  expression: string,
  context?: Partial<AviatorExpressionEngineContext>
): AviatorTreeNode[];

export declare function generateExpression(
  nodes: AviatorTreeNode[],
  context?: Partial<AviatorExpressionEngineContext>
): string;

export declare function validateExpression(
  nodes: AviatorTreeNode[]
): AviatorValidationError[];

export declare function createConditionNode(
  partial?: Partial<AviatorConditionNode>
): AviatorConditionNode;

export declare function createGroupNode(
  partial?: Partial<AviatorGroupNode>
): AviatorGroupNode;

export declare function generateNodeId(): string;

export declare function shouldBeLambdaParameter(...args: unknown[]): boolean;

export declare function extractFieldPaths(data: unknown): AviatorFieldOption[];

export declare function extractFieldsFromJson(input: string): AviatorFieldOption[];
