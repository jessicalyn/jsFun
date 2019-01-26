const mods = [
  { mod: 1, students: 27, instructors: 3 },
  { mod: 2, students: 33, instructors: 3 },
  { mod: 3, students: 20, instructors: 2 },
  { mod: 4, students: 16, instructors: 2 }
];

module.exports = {
  mods
};


//Go into the array and in each object we need to take the
//key of students/ key instructors
//Assign that value toa new key value pair called
//studentsperinstructor
//And return that array of objects with the new key values