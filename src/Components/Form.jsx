import {useState} from 'react';

const Form = () => {
// If localStorage exists , then get it.
//If not , set the personName to the empty string
    let personName=''
    personName= localStorage.getItem('person')? localStorage.getItem('person'):""
    //set the initial value of the state var to personName
const [userName, setUserName] = useState(personName);
// console.log(userName)
//saveName as a function for saving the data to local storage when we click the save  button 
const saveName =()=>{
localStorage.setItem('person',userName)
}
    return(
        //Preventb page refresh when the form is submitted
        <form onSubmit = {(e) => e.preventDefault()}>
        {/*This is a form input for typing the user's name 
        onChange triggers each time a letter is typed in and a method called setUserName is executed each time*/}
            <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="UserName"
            />
        
            <label>
                <input
                    type="checkbox"
                />
                Remember me
            </label>
            {/*When we save data the savename function is run */}
            <button type="submit" value="Submit" onClick={saveName}>Save ME!</button>
        </form>
    );
};

export default Form;
