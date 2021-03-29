const{MONEY,LIFE,FREEWILL}=require('./utils')
const handleQuestion=require('./handler')
let question1 = {
    text: "How do I get more money?",
    type: MONEY //use the FINANCE type from the utils module
};

let question2 = {
    text: "How much money do I need?",
    type:LIFE  //use the FINANCE type from the utils module
};

let question3 = {
    text: "To be free or not to be?",
    type: FREEWILL //use the FREEWILL type from the utils module
};

handleQuestion.handleQuestion(question1) //should print "how does the social construction of money work?"
handleQuestion.handleQuestion(question2) //should print "how does the social construction of money work?"
handleQuestion.handleQuestion(question3) //should print "Is free will real or just an illusion?"