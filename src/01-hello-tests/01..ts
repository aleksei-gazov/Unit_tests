
export function sum(a: number, b: number) {
    return a + b
}
export function mult(a: number, b: number) {
    return a * b
}
export function splitIntoWorlds (sentens: string) {
    const words =  sentens.toLowerCase().split(' ')

  return  words.filter(i=> i !== '' && i !== '-')
        .map(i => i.replace('!','')
            .replace(".", '')
            .replace(',', ''))
}