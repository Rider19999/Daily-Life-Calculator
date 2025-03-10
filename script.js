function calculateCalories() {
    const weight = parseFloat(document.getElementById('weight').value);
    const activity = parseFloat(document.getElementById('activity').value);
    if (isNaN(weight)) {
      alert("Please enter a valid weight.");
      return;
    }
    const calories = weight * 24 * activity;
    document.getElementById('calorieResult').innerText = `Your daily calorie needs: ${calories.toFixed(2)} kcal`;
  }
  
  function calculateWater() {
    const weight = parseFloat(document.getElementById('weightWater').value);
    if (isNaN(weight)) {
      alert("Please enter a valid weight.");
      return;
    }
    const water = weight * 0.033;
    document.getElementById('waterResult').innerText = `Your daily water intake: ${water.toFixed(2)} liters`;
  }
  
  function calculateSleep() {
    const age = parseFloat(document.getElementById('age').value);
    if (isNaN(age)) {
      alert("Please enter a valid age.");
      return;
    }
    let sleepHours;
    if (age < 18) sleepHours = "8-10 hours";
    else if (age < 65) sleepHours = "7-9 hours";
    else sleepHours = "7-8 hours";
    document.getElementById('sleepResult').innerText = `Recommended sleep: ${sleepHours}`;
  }