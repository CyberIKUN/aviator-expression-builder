/**
 * Aviator表达式词法分析器
 * 负责将表达式字符串分解为Token序列
 */

export interface Token {
  type: 'STRING' | 'NUMBER' | 'KEYWORD' | 'LAMBDA' | 'END' | 'IDENTIFIER' |
    'PAREN' | 'BRACKET' | 'COMMA' | 'LOGICAL' | 'COMPARISON' | 'UNARY' |
    'ARROW' | 'OPERATOR' | 'EOF'
  value: string | number
}

/**
 * 将表达式字符串转换为Token数组
 */
export function tokenizeExpression(input: string): Token[] {
  const tokens: Token[] = []
  let position = 0
  let current = input[0] || ''

  const advance = () => {
    position++
    current = input[position] || ''
  }

  const skipWhitespace = () => {
    while (current && /\s/.test(current)) advance()
  }

  const readString = (quote: string) => {
    let value = ''
    advance() // 跳过开头引号
    while (current && current !== quote) {
      value += current
      advance()
    }
    if (current === quote) advance() // 跳过结尾引号
    return value
  }

  const readNumber = () => {
    let value = ''
    while (current && /[0-9.]/.test(current)) {
      value += current
      advance()
    }
    return value
  }

  const readIdentifier = () => {
    let value = ''
    while (current && /[\w.]/.test(current)) {
      value += current
      advance()
    }
    return value
  }

  const readArrow = () => {
    let value = current // '-'
    advance()
    if (current === '>') {
      value += current
      advance()
    }
    return value
  }

  while (position < input.length) {
    skipWhitespace()
    if (!current) break

    if (current === '"' || current === '\'') {
      const quote = current
      const value = readString(quote)
      tokens.push({ type: 'STRING', value })
    } else if (/\d/.test(current)) {
      const value = readNumber()
      tokens.push({ type: 'NUMBER', value: Number.parseFloat(value) })
    } else if (/[a-z_]/i.test(current)) {
      const value = readIdentifier()

      // 检查特殊关键字
      if (value === 'nil' || value === 'null' || value === 'true' || value === 'false') {
        tokens.push({ type: 'KEYWORD', value })
      } else if (value === 'lambda') {
        tokens.push({ type: 'LAMBDA', value })
      } else if (value === 'end') {
        tokens.push({ type: 'END', value })
      } else {
        tokens.push({ type: 'IDENTIFIER', value })
      }
    } else if (current === '(' || current === ')') {
      tokens.push({ type: 'PAREN', value: current })
      advance()
    } else if (current === '[' || current === ']') {
      tokens.push({ type: 'BRACKET', value: current })
      advance()
    } else if (current === ',') {
      tokens.push({ type: 'COMMA', value: current })
      advance()
    } else if (current === '&' && input[position + 1] === '&') {
      tokens.push({ type: 'LOGICAL', value: '&&' })
      advance()
      advance()
    } else if (current === '|' && input[position + 1] === '|') {
      tokens.push({ type: 'LOGICAL', value: '||' })
      advance()
      advance()
    } else if (current === '!' && input[position + 1] === '=') {
      tokens.push({ type: 'COMPARISON', value: '!=' })
      advance()
      advance()
    } else if (current === '!' && input[position + 1] !== '=' && input[position + 1] !== '~') {
      tokens.push({ type: 'UNARY', value: '!' })
      advance()
    } else if (current === '=' && input[position + 1] === '=') {
      tokens.push({ type: 'COMPARISON', value: '==' })
      advance()
      advance()
    } else if (current === '>' && input[position + 1] === '=') {
      tokens.push({ type: 'COMPARISON', value: '>=' })
      advance()
      advance()
    } else if (current === '<' && input[position + 1] === '=') {
      tokens.push({ type: 'COMPARISON', value: '<=' })
      advance()
      advance()
    } else if (current === '>' || current === '<') {
      tokens.push({ type: 'COMPARISON', value: current })
      advance()
    } else if (current === '-' && input[position + 1] === '>') {
      const arrow = readArrow()
      tokens.push({ type: 'ARROW', value: arrow })
    } else if (current === '-') {
      tokens.push({ type: 'OPERATOR', value: current })
      advance()
    } else {
      advance() // 跳过未知字符
    }
  }

  return tokens
}
