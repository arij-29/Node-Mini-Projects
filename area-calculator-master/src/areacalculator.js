const pi = 3.14;

const calculateArea = (choice,side,length,breadth,radius) =>{   
    let area = 0.0; 
    if(choice == "square"){
        if(side > 0){
            area = side * side;;
        }
        else{
            area = -1;
        }
    }
    else if(choice == "rectangle"){
        if(length > 0 && breadth > 0){
            area = length * breadth;
        }
        else{
            area = -1;
        }
    }
    else if(choice == "circle"){
        if(radius > 0){
            area = 3.14 * (radius * radius);
        }
        else{
            area = -1;
        }
    }
    else if(choice == "cone"){
        area = -1
    }
    else{
        area = -1;
    }
    return area
}
module.exports = {calculateArea}
