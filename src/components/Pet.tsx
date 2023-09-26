import React, { useState } from 'react';


type PetProps = {


  group: {
    name: string;
    type: string[];
    color: string;
  };

  //Add Pet property
  onAddPet: (pet: string) => void;

  //Delete Pet property
  onDeletePet: (petIndex: number) => void;
};

//(Uses functional Component -> React.FC)
const Pets: React.FC<PetProps> = ({ group, onAddPet, onDeletePet }) => {
  const [newPet, setNewPet] = useState('');

  const handleAddPet = () => {
    if (newPet.trim() !== '') {
      onAddPet(newPet);
      setNewPet('');
    }
  };

  return (

    <div className="pet-group">
      <h2>{group.name}</h2>
      <ul>
        {group.type.map((pet, index) => (
          <li key={index}>
            {pet}
            {/*React event "onClick" */}
            <button onClick={() => onDeletePet(index)}>Delete</button>
          </li>
        ))}
      </ul>
      
      <div className="add-pet"> 
        <input
          type="text"
          placeholder="New Pet"
          value={newPet}

          onChange={(e) => setNewPet(e.target.value)}
        />
        <button onClick={handleAddPet}>Add Task</button>
      </div>
    </div>
  );
};

export default Pets;