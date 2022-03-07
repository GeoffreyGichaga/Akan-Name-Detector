const formInfo = document.getElementById("inform");

const day = document.getElementById("dayInput");
const month = document.getElementById("monthInput");
const year = document.getElementById("yearInput");





const male = document.getElementById("male");
const female = document.getElementById("female");
const btn = document.getElementById("subtn");
const btn2 = document.getElementById("akanbtn")
const par = document.getElementById("akaname");

const genderMale = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
const genderFemale = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]









let getAkanName = ()=>
{

    // Getting the date format and joining the inputs

    let inputDate = [year.value, month.value,day.value].join()

    let dateNew = new Date(inputDate)
    const dayOfWeek = dateNew.getDay();


    // Verifying  Inputs
    if(day.value == " " || day.value >31)
    {
        alert("Enter Valid day between 1 -31")
    }
    else if(month.value == " " || month.value >12)
    {
        alert("Enter a Valid Month between 1 - 12")
    }
    else if(year.value.length >2022)
    {
        alert("Enter a valid Year")
    }
    else
    {

    }






    // Getting the gender of user
   if(male.checked == true)
   {
       alert("Your Akan Name is " + genderMale[dayOfWeek])
    

   }
   else if(female.checked == true)
   {
       alert("Your Akan Name is " + genderFemale[dayOfWeek])
   }



  

  

}

getAkanName();

btn.addEventListener("click", getAkanName)






