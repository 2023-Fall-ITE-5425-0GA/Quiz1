import React, { useState } from 'react';
import Header from './components/Header';
import Pets from './components/Pet';


const pets = [

  {

     name: 'doggy',

     type: ['type a'],

     color: 'brown'

  },

  {

     name: 'Trex',

     type: ['type b'],

     color: 'purple'

  },

  {

     name: 'fish',

     type: ['type b'],

     color: 'red'

  }

]


function App() {
  //Uses useState hooks:
  const [groups, setGroups] = useState(pets);


 
  const handleAddPet = (name: string, type: string[], color: string) => {
    const updatedGroups = groups.map((pet) => {
      if (pet.name === name) {
        return {
          ...pet,
          pets: [...pet.name, pet.type, pet.color],
        };
      }
      return pet;
    });

    setGroups(updatedGroups);
   
  };

  const handleDeletePet = (name: string, type: string[], color: string) => {
    const updatedGroups = groups.map((pet) => {
      if (pet.name === name) {
        return {
          ...pet,
          pets: groups.filter((_, index) => index !== index),
        };
      }
      return pet;
    });

    setGroups(updatedGroups);

  };




  return (
    <div className="App">
      <Header /> {/* Add the Header component */}


      {groups
      .map((pets) => (
        <Pets
          key={pets.name}
          group={pets}
          onAddPet={(pet) => handleAddPet(pets.name, pets.type, pets.color)}
          onDeletePet={(index) => handleDeletePet(pets.name, pets.type, pets.color)}
        />
      ))}
    </div>
  );
}

export default App;