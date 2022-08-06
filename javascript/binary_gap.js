const binaryString = '0010001000001001000001'

binaryString.match(/(?<=1)0*(?=1)/g)
  ?.map(x => x.length)
  .reduce( (previous, current) => previous < current ? current : previous , 0 )