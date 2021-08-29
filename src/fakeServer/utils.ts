import { random, lorem, date, name, internet, address } from "faker/locale/vi";
import faker from "faker";
import { IAddress } from "../models/base";

export const randomInt = (min: number, max: number): number =>
  faker.random.number({ min, max, precision: 1 });

export const randomEnum = (enumVar: any): any => {
  const values = Object.values(enumVar);
  return values[Math.floor(Math.random() * values.length)];
};

export const randomArray = (arrayVar: any): any => {
  return arrayVar[Math.floor(Math.random() * arrayVar.length)];
};

export const randomAddress = (): IAddress => {
  return {
    province: address.city(),
    district: address.county(),
    ward: address.streetName(),
    specificAddress: address.streetAddress(),
  };
};

export const randomDescription = (): string => {
  return Array.apply(null, Array(random.number({ min: 1, max: 5 })))
    .map(() => lorem.sentences())
    .join("\n \r");
};
