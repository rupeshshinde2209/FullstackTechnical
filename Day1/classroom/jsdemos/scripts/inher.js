let person={
    name:'admin',
    greet:function(){
        return "helloo" +this.name
    }
}

let user=Object.create(person)
user.name='manager'
user.dowork=function(task){
    return "i can do this " + task
}

console.log(user);
console.log(user.dowork('tecahing'));