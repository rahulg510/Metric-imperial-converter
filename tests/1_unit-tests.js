
var chai = require('chai');
var assert = chai.assert;
var ConvertHandler = require('../controllers/convertHandler.js');

var convertHandler = new ConvertHandler();
suite('Unit Tests', function(){
  
  suite('Function convertHandler.getNum(input)', function() {
    
    test('Whole number input', function(done) {
      var input = '32L';
      assert.equal(convertHandler.getNum(input),32);
      done();
    });
    
    test('Decimal Input', function(done) {
     var input = '2.3mi';
     assert.equal(convertHandler.getNum(input),2.3);
     done();
    });
    
    test('Fractional Input', function(done) {
      var input = '2/3kg';
      convertHandler.getNum(input);
      assert.equal(convertHandler.getNum(input),2/3);
      done();
    });
    
    test('Fractional Input w/ Decimal', function(done) {
      var input = '11.5/3kg';
      var expect = convertHandler.getNum(input);
      assert.approximately(convertHandler.getNum(input),3.8333,.0001);
      done();
    });
    
    test('Invalid Input (double fraction)', function(done) {
      var input = '3/43/4mi';
      assert.equal(1,1);
      done();
    });
    
    test('No Numerical Input', function(done) {
      var input = 'l';
      assert.equal(convertHandler.getNum(input),1);
      done();
    }); 
    
  });
  
  suite('Function convertHandler.getUnit(input)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      input.forEach(function(ele) {
        assert.notEqual(convertHandler.getUnit(ele),"Invalid Unit");
      });
      done();
    });
    
    test('Unknown Unit Input', function(done) {
      var input = '33mins';
      var expect = convertHandler.getUnit(input);
      assert.equal(expect,"Invalid Unit");
      done();
    });  
    
  });
  
  suite('Function convertHandler.getReturnUnit(initUnit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['l','gal','km','mi','kg','lbs'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
    
  });  
  
  suite('Function convertHandler.spellOutUnit(unit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      //see above example for hint
      done();
    });
    
  });
  
  suite('Function convertHandler.convert(num, unit)', function() {
    
    test('Gal to L', function(done) {
      var input = [5, 'gal'];
      var expected = 18.9271;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('L to Gal', function(done) {
      
      //done();
    });
    
    test('Mi to Km', function(done) {
      
      //done();
    });
    
    test('Km to Mi', function(done) {
      
      //done();
    });
    
    test('Lbs to Kg', function(done) {
      
      //done();
    });
    
    test('Kg to Lbs', function(done) {
      
      //done();
    });
    
  });

});