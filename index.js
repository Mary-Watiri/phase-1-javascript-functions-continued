function saturdayFun(activity){
    switch(activity){
        case "bathe my dog":
            return "This Saturday, I want to bathe my dog!";
            break;

    default:
        return "This Saturday, I want to roller-skate!";
            
    }
}
function mondayWork(activity){
    switch(activity){
       case"work from home":
          return "This Monday, I will work from home.";
          break;
     default:
        return "This Monday, I will go to the office.";

    }
}
function wrapAdjective(wrapper){
    const adj = function(adjString){
        return "You are "+wrapper+adjString+wrapper+"!";

    }
    return adj;
    
}