export function toRna(dna: string) {
    const rna = dna.split('').map(T => {
      if (T === 'G') return 'C'
      else if (T === 'C') return 'G'
      else if (T === 'T') return 'A'
      else if (T === 'A') return 'U'
      else throw new Error('Invalid input DNA.')
    })
    return rna.join('')
  }