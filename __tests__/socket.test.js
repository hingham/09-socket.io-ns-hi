'use strict';

const helper = require('../lib/helper.js');

describe('socket io app', () =>{
  describe('the helpers', () =>{
    it('converts a number to a character', () =>{
      let result = helper.chgLetNum(65);
      expect(result).toEqual('A');
    });
    it('converts a letter to a number', () =>{
      let result = helper.chgLetNum('A');
      expect(result).toEqual(65);
    });
    it('returns false if it gets something that is not a number nor letter', () =>{
      let result = helper.chgLetNum([]);
      expect(result).toBe(false);
    });
  });
  
  describe('the letter change', () =>{
    it('takes a number and adds 1', () =>{
      let result = helper.letterChange(3, 10, 14);
      expect(result).toEqual(4);
    });
    it('will reset the number to be one more than start if called', () =>{
      let result = helper.letterChange(10, 3, 10);
      expect(result).toEqual(4);
    });
  });
});