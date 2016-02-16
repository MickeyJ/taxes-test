var code = {

  calcTax: function(amount){

    if(amount <= 10) {

      return amount / 10;

    }else if (numCheck(10,20)) {

      return calcRate(10,7) + 1;

    }else if (numCheck(20,30)) {

      return calcRate(20,5) + 1.7;

    }else {

      return calcRate(30,3) + 2.2;
    }
    
    function numCheck(min, max){
      return amount > min && amount <= max;
    }

    function calcRate(limit, percent){
      return (amount - limit) * percent / 100;
    }
  }
};

module.exports = code;


console.log(
  code.calcTax(25)
);
