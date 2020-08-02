//Variable privada o propiedades privadas

const person = () => {
    var saveName = "Name";
    return {
        getName: () => {
            return saveName;
        },
        setName: (Name) => {
            saveName = Name;
        }
    }
}

newPerson = person();
console.log(newPerson.getName());
newPerson.setName("Santiago");
console.log(newPerson.getName());
