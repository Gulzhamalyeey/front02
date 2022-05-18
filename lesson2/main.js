/*const array = [
    {
        username: 'jack' ,
        full_name: "jack barbaro"
    },
    {
        username: 'jack' ,
        full_name: "jack barbaro"
    },
    {
        username: 'jack' ,
        full_name: "jack barbaro"
    },
    {
        username: 'jack' ,
        full_name: "jack barbaro"
    },
    {
        username: 'jack' ,
        full_name: "jack barbaro"
    },
]*/

//let i = 0;
//i++
//console.log(i)

/*for(let i = 0 ; i < array.length; i++) {
    //console.log(array[i])
} //индексы*/

/*for(let user of array){
    console.log(user)
}*/


/*const users = [
    {
        username: 'jack',
        salary: 500
    },
    {
        username: 'jonh',
        salary: 5000
    },
    {
        username: 'beka',
        salary: 10000
    }
]*/
/* вариант 1 */
/*const filteredUsers = 500

for (let user of users ){
    if(user.salary > filteredUsers){
        console.log(user)
    }
}*/

/*вариант 2*/
//const filteredUsers = users.filter(user => user.salary >500)
//console.log(filteredUsers);

const users = [
    {
        username: 'robot1',
        power: 2,
        speed: 2000
    },
    {
        username: 'robot2',
        power: 4,
        speed: 3000
    },
    {
        username: 'robot3',
        power: 5,
        speed: 4000
    }
]

const filteredUsers = 2

for (let user of users){
    if(user.power > filteredUsers){
        console.log(user)
    }
}

