const {MONEY,LIFE,FREEWILL} = require('./utils')

const handleQuestion =(question) =>{
    switch(question.type){
    case MONEY:
    console.log('Print how does the social construction of money work')
    break
    case LIFE:
    console.log('What does it mean to live a good life')
    break
    case FREEWILL:
    console.log('Is free will real or just an illusion?')
    break
    default:
        'Keep tring buddy!'


    }
    
   }
    module.exports.handleQuestion =handleQuestion