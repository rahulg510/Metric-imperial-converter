/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var regexStr = input.match(/[a-z]+|[^a-z]+/gi);
    return parseFloat(regexStr[0]) || "Invalid Number";
    
  };
  
  this.getUnit = function(input) {
    var regexStr = input.match(/[a-z]+|[^a-z]+/gi);
    return spellitOut(regexStr[1]);
  
  };
  
  this.getReturnUnit = function(initUnit) {

  switch(initUnit){
    case 'miles':
      return 'kilometers';
    case 'kilometers':
      return 'miles';
    case 'pounds':
      return 'kilograms';
    case 'kilorgrams':
      return 'pounds';
    case 'gallons':
      return 'liters';
    case 'liters':
      return 'gallons';

    }
  };

 function spellitOut (initUnit) {
    var result;
    if(initUnit == 'mi' || initUnit == 'miles' || initUnit == 'mile'){
      result = 'miles';
     }
    else if(initUnit == 'km' || initUnit == 'kilometers' || initUnit == 'kilometer'){
      result = 'kilometers';
     }
    else if(initUnit == 'kg' || initUnit == 'kilograms' || initUnit == 'kilogram'){
      result = 'kilograms';
      }
    else if(initUnit == 'lb' || initUnit == 'pounds' || initUnit == 'pound'){
      result = 'pounds';
     }
    else if(initUnit == 'gal' || initUnit == 'gallons' || initUnit == 'gallons'){
      result = 'gallons';
    }
    else if(initUnit == 'l' || initUnit == 'liters' || initUnit == 'liter'){
      result = 'liters';
    }
    else{
      result = "Invalid Unit";
    }
      return result;
  };
  
  this.convert = function(initNum, initUnit) {
    var result;

    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    
    switch(initUnit){
      case 'miles':
        result = initNum * miToKm;
        break;
      case 'kilometers': 
        result = initNum / miToKm;
        break;
      case 'pounds':
        result = initNum * lbsToKg;
        break;
      case 'kilograms':
        result = initNum / lbsToKg;
        break;
      case 'gallons':
        result = initNum * galToL;
        break;
      case 'liters':
        result = initNum / galToL;
        break;
      }
    return result;
  }
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result = {initNum:  initNum,
                  initUnit: initUnit,
                  returnNum: returnNum,
                  returnUnit: returnUnit, 
                  string: "\'" + initNum + initUnit + "converts to " + returnNum + " " + returnUnit + "\'"
  }
  return result;
}
}

module.exports = ConvertHandler;
