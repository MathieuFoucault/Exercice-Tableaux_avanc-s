const instructors = [
    {
      name: 'John',
      availability: 'all',
      specialities: ['Javascript', 'Python', 'C++']
    },
    {
      name: 'Mary',
      availability: 'weekend',
      specialities: ['Javascript', 'Ruby', 'C++']
    },
    {
      name: 'Chris',
      availability: 'evenings',
      specialities: ['Javascript']
    },
    {
      name: 'Anthony',
      availability: 'all',
      specialities: ['Python', 'Ruby']
    },
    {
      name: 'Pauline',
      availability: 'only Mondays',
      specialities: ['Javascript', 'Html', 'CSS']
    },
    {
      name: 'Mark',
      availability: 'all',
      specialities: ['C#', 'C++', 'Javascript']
    },
    {
      name: 'Helen',
      availability: 'evenings',
      specialities: ['Python', 'C++']
    },
    {
      name: 'Charles',
      availability: 'none',
      specialities: ['Python']
    }
  ];

// Partie 1 :

const JsWeekend = instructors.filter(NeededInstructors => 
  (NeededInstructors.availability.includes("all") || NeededInstructors.availability.includes("weekend")) 
  && NeededInstructors.specialities.includes("Javascript"));
console.log(JsWeekend);

  // Partie 2 :

  const NeededInstructors =[
  {
    name: 'John',
    availability: 'all',
    specialities: ['Javascript', 'Python', 'C++']
},
{
  name: 'Mary',
  availability: 'weekend',
  specialities: ['Javascript', 'Ruby', 'C++']
},
{
  name: 'Mark',
  availability: 'all',
  specialities: ['C#', 'C++', 'Javascript']
},
  ]

NeededInstructors.forEach(MessageInstructors => {
    console.log(`Hi ${MessageInstructors.name}, we inform you that this weekend you will be doing the support class`);
  });


// Partie 3 :

NeededInstructors.forEach(MessageInstructors2 => {
  if (MessageInstructors2.specialities.includes("Python")){
    console.log(`Hi ${MessageInstructors2.name}, we inform you that this weekend you will be doing the support class and you need to prepare a Python workshop.`);
  }
  else {
    console.log(`Hi ${MessageInstructors2.name}, we inform you that this weekend you will be doing the support class`);
  }
})

