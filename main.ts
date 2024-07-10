import inquirer from "inquirer"
import chalk from "chalk"

console.log(chalk.bold.blue("\n\t\t===={ wellcome in MURTAZA ALI opp_project }====\n"));


class student{
    Name:string

    constructor(name:string){
        this.Name=name
    }
}

class person{
    
    students:student[]=[]
  addstudent(Object:student){
            this.students.push(Object)
        
        }
    
    }


    let persons = new person()

    let start_program = async (persons:person)=>{
do{
    

let start =await inquirer.prompt([
    {
        name:"sellect_talk",
        message:chalk.italic.bold.gray("whos person from which you want to talk\n"),
        type:"list",
        choices:["student","friends","good_bay"]
    }
]);
if(start.sellect_talk === "student"){
    console.log(chalk.yellow("Hellow i am fine and now i feel bater \n thanks for talk to me and what about you..."));
    
}
else if(start.sellect_talk === "friends"){
    let Friend =await inquirer.prompt([
        {
            name:"friend_name",
            message:chalk.bold.italic.gray("from which friend you want to like to talk"),
            type:"input"
        }
    ])

    let friend= persons.students.find(val =>val.Name===Friend.friend_name)
if(!friend){

let name=new student(Friend.friend_name)
persons.addstudent(name)

console.log(chalk.green(`Hellow I am ${name.Name} and I am fine and now I am added successfuly in your friend list`));


 }
 if(friend){
    console.log(chalk.yellow(`Hellow I am ${friend.Name} and I am fine......`));
   }
   

   }else if(start.sellect_talk ==="good_bay"){
    process.exit()
   }



      }
while(true)

     }

start_program(persons)


















































