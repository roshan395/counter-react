const person = {
    name: 'roshan',
    address: {
        line1: 'vempal nagar',
        city: 'vizag'
    },
    profiles: ['twitter', 'linkedin', 'instagram'],
    printProfile: () => {
        person.profiles.map(
            profile => console.log(profile)
        )
    }
}

//function printProfile() {
//    console.log(person.profiles[1])
//}

export default function LearningJavaScript(){
    return(
        <>
        <div>{person.name}</div>
        <div>{person.address.line1}</div>
        <div>{person.address.city}</div>
        <div>{person.profiles[0]}</div>
        <div>{person.printProfile()}</div>
        </>
    )
}