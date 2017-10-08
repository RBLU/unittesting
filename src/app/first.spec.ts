import {isNull} from "util";

describe('first tests', ()=> {

  function convert (value : number, fromUnit : string) {

    if (value < 0) {
      throw new Error('negative numbers not supported');
    }

    return {
      to: (toUnit: string): number => {
        return value;
      }
    };
  }


  it('should convert meters to foot', () => {
    expect(convert(33, 'm').to('ft')).toEqual(33);
  });

  it('should throw an error when passed a negative number as value', () => {
    expect(() => { convert(-1, 'm')}).toThrow();
  })


});
