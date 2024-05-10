const calculateWeightLostInAMonth = (cycling,running,swimming,extraCalorieInTake) =>{
   // let weightLostInAMonth = 0;

   // write logic here 
   if (cycling!=500 || running!=300|| swimming!=400 || extraCalorieInTake!=100) {
      return -1; // Invalid parameters
    }
    const caloriesBurnedPerWeek = cycling * 2 + running * 2 + swimming * 2;
    const caloriesBurnedInAMonth = caloriesBurnedPerWeek * 4;
    const netCaloriesBurnedInAMonth = caloriesBurnedInAMonth - extraCalorieInTake * 30;
   const weightLostInAMonth = netCaloriesBurnedInAMonth / 1000;
   return weightLostInAMonth;
   
}

module.exports = calculateWeightLostInAMonth

