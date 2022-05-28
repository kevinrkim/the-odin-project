const findTheOldest = function(people) {
  people.sort((a,b) => sortByAge(a,b));
  return people[0];
};

const sortByAge = (a,b) => {
  const aDeath = (!a.yearOfDeath) ? new Date().getFullYear() : a.yearOfDeath;
  const bDeath = (!b.yearOfDeath) ? new Date().getFullYear() : b.yearOfDeath;
  return Math.abs(bDeath - b.yearOfBirth) - Math.abs(aDeath - a.yearOfBirth);
};


// Do not edit below this line
module.exports = findTheOldest;
