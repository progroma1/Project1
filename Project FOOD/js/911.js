const person = {
    name: 'Roman',
    age: 33,
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
  };
  
 const clone = JSON.parse(JSON.stringify(person));
 clone.parents.dad = 'Vasyl';
 console.log(person.parents.dad);
 console.log(clone.parents.dad);
 
