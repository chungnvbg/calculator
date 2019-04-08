
class Division{
    operate(numberOne , numberTwo){
        if (numberTwo == 0){
            throw ('Error');
        }
        else{
            return numberOne / numberTwo ;
        }
    }
}

module.exports = Division;