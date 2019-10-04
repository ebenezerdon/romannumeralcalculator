import React, {useState} from 'react';

export default function RomanNumeralComponent () {
    const [calculatedAnswer, updateAnswer] = useState("Nulla");
    const [input, updateInput] = useState("");
    const baseValues = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    const addAndConvertToRomanNumerals = (ints) => {
        let sumOfInts = ints.reduce((total, int) => (total + int), 0);
        let romanNumeral = '';

        if (sumOfInts > 1000) return alert('Sum should not be greater than 1000');

        Object.keys(baseValues).forEach(key => {
            while(sumOfInts >= baseValues[key]) {
                romanNumeral += key;
                sumOfInts -= baseValues[key];
            }
        })

        return romanNumeral.length > 0 ? romanNumeral : 'Nulla';
    }

    const addNumbers = (inputString) => {
        const numbersStringArray = inputString.split(",");
        const numbers = numbersStringArray.map((numberAsString) => { return parseInt(numberAsString, 10) })

        /* numbers is an array of ints. E.g. [1, 2, 3] */
        const answer = addAndConvertToRomanNumerals(numbers)

        return answer;
    }

    const handleChange = (event) => {
        updateInput(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const answer = addNumbers(input);
        updateAnswer(answer);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label style={{paddingRight: "10px"}}>
                    <span style={{paddingRight: "10px"}}>Numbers (separated by commas):</span>
                    <input type="text" name="input-form" onChange={handleChange}/>
                </label>
                <input type="submit" value="Add Numbers" />
            </form>
            <div>Answer in Roman Numerals: {calculatedAnswer}</div>
        </div>
    )
}