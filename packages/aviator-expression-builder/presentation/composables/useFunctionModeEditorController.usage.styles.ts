export function getReturnTypeColor(type: string): string {
  const colorMap: Record<string, string> = {
    string: 'blue',
    number: 'green',
    boolean: 'orange',
    array: 'purple',
    list: 'purple',
    set: 'purple',
    map: 'cyan',
    object: 'cyan',
    date: 'magenta',
  }
  return colorMap[type] || 'gray'
}

export function getReturnTypeStyle(returnTypeColor: string) {
  return {
    display: 'inline-block',
    padding: '2px 8px',
    borderRadius: '4px',
    fontSize: '12px',
    backgroundColor: returnTypeColor === 'blue'
      ? '#e8f3ff'
      : returnTypeColor === 'green'
        ? '#e8f8f2'
        : returnTypeColor === 'orange' ? '#fff3e8' : '#f2f3f5',
    color: returnTypeColor === 'blue'
      ? '#165dff'
      : returnTypeColor === 'green'
        ? '#00b42a'
        : returnTypeColor === 'orange' ? '#ff7d00' : '#4e5969',
  }
}
