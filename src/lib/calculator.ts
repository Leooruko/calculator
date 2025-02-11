import Mexp from 'math-expression-evaluator';

export const calculate = (expression : string)=>{
    try{
        expression = expression.replace(/\s+/g,'');

        // check for invalid characters
        if(!/^[\d+\-*/%.]+$/.test(expression)){
            throw new Error('Invalid characters in Expresison');
        }
        // Replace percentage with division (e.g., "50% -> 50/100")
        expression = expression.replace(/(\d+)%/g, '($1/100)');
        const mexp = new Mexp();
        return mexp.eval(expression);
    }
    catch(e){
        return 'Error';
    }
};


