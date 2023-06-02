const price = [
  'Crédito',
  'R$ 200',
  'R$ 400',
  'Contas a Pagar',
  'R$ 300',
  'R$ 400',
  'Meus dados',
];

const priceFilter = price.filter((p) => {
  return Number(p.includes('R$'));
});
const priceMap = priceFilter.map((p) => Number(p.replace('R$', '')));

export default priceMap;
