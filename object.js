const objetotest = {
  name: 'sakura',
  power: 33366999,
  couple() {
    return `name is ${this.name}, and power is: ${this.power}`;
  },
};

const objectoClone = { ...objetotest, jutsu: 'Byakugou no Jutsu' };

export default objectoClone;
