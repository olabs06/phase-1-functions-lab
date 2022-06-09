// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
    let headquarterLocation = 42;
    // return distance - headquarterLocation
    if (distance >= headquarterLocation){
        return distance - headquarterLocation;
    }else{
        return headquarterLocation - distance;
    }
  }

  function distanceFromHqInFeet(pickupDistance) {
      let block = 264;
      //calculate the number of blocks from Scuber headquarters
      let headquarterLocation = 42;

      if (pickupDistance >= headquarterLocation){
        let distanceDifference = pickupDistance - headquarterLocation;
        return distanceDifference * 264;
    }else{
        return (headquarterLocation - pickupDistance) * 264;
    }

    distanceFromHqInBlocks(someValue);
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
  }

  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    let feetTravelled = destination - start;
    if (destination > start){
        return feetTravelled * 264
    } else {
        return (start - destination) * 264;
  }
}

  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer;
    let feetTravelled;
    let price;
    if(destination >start){
        feetTravelled = (destination - start) * 264;
    }else{
        feetTravelled = (start - destination ) * 264;
    }
   
    if (feetTravelled <= 400){
         price = 0;
    } else if (feetTravelled >400 && feetTravelled <= 2000 ) {
        price = (feetTravelled - 400) * 0.02
    
  } else if(feetTravelled >2000 && feetTravelled <=2500){
      price = 25 
  }else{
    price = 'cannot travel that far'
  }
  return price
}