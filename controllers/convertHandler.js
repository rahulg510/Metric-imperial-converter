
function ConvertHandler() {
  
  this.getNum = function(input) {
    if(input){
    var regexStr = input.match(/[a-z]+|[^ a-z]+/gi);
    if(regexStr.length == 1){
      return getUnit(regexStr[0]) == 'Invalid Unit' ? "Invalid Number" : 1;
    }
    else{
      var num = regexStr[0];
      var oper = parseFloat(regexStr[0]);
      if(oper == NaN) return "Invalid Number";
      let index = num.indexOf('/');
      let index2 = num.indexOf('/',index+1);
      console.log(index2);
      if(index2>0) return "Invalid Number";
      var deno = (function() {
        if(index > 0){
            return parseFloat(num.substring(num.indexOf('/')+1)); 
       }}()) || 1;
     return oper/deno;
    }
  }
  return 'Invalid Number';
};
  
  this.getUnit = function(input) {
    if(input){
    var regexStr = input.match(/[a-z]+|[^ a-z]+/gi);
    return getUnit(regexStr[regexStr.length-1]);  
  }
  return "Invalid Unit";
};
  
  function getUnit(initUnit){

    if(initUnit == 'mi' || initUnit=='MI' || initUnit == 'miles' || initUnit == 'mile'){
      result = 'miles';
     }
    else if(initUnit == 'km' || initUnit=='KM' ||  initUnit == 'kilometers' || initUnit == 'kilometer'){
      result = 'kilometers';
     }
    else if(initUnit == 'kg' || initUnit=='KG' || initUnit == 'kilograms' || initUnit == 'kilogram'){
      result = 'kilograms';
      }
    else if(initUnit == 'lb' || initUnit=='LB' || initUnit == 'lbs' || initUnit == 'LBS' || initUnit == 'pounds' || initUnit == 'pound'){
      result = 'pounds';
     }
    else if(initUnit == 'gal' || initUnit=="GAL" || initUnit == 'gallons' || initUnit == 'gallons'){
      result = 'gallons';
    }
    else if(initUnit == 'l' || initUnit == "L" || initUnit == 'liters' || initUnit == 'liter'){
      result = 'liters';
    }
    else{
      result = "Invalid Unit";
    }
      return result;
  }

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
      default: 
        return 'Invalid Unit';
  
      }
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
                  returnNum: returnNum.toFixed(5),
                  returnUnit: returnUnit, 
                  string: "\'" + initNum + ' ' + initUnit + " converts to " + returnNum.toFixed(5) + " " + returnUnit + "\'"
  }
  return result;
}
}

module.exports = ConvertHandler;
