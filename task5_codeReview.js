/*
Line        Comment
3           Better to move the style declaration into the component scope
7           Typo in the component name (Fuel) not (Fuuel)
12          You can use destruction as "const { fuel } = props;"
13          Better not to use common react reserved names you can use "const [consumption, setConsumption] = useState(0);"
19          Better to set useEffect dependencies, here you need [fuel, setState] as a dependencies array // or setConsumption after update the const name ;)
21          As it's only one tag it's okay but if the HTML structure scales up you can just use the condition in the regions that you want to change only
            Like <h2 style={state ? {color: "red"} : undefined}>{state ? 'Alert' : 'All is fine'}</h2>
28          Better to unify the way you're coding your React app "Class components or Function component with React Hooks"
34          Better to use meaningful state names like "distance, fuel"
40          You need to save the intervalId into a state to clear it on componentWillUnmount life cycle
48          Use const rather than var
48          Also here you can use destruction for getting const out of state
*/

const review = [
    { line: 3, comment: 'Better to move the style declaration into the component scope' },
    { line: 7, comment: 'Typo in the component name (Fuel) not (Fuuel)' },
    { line: 12, comment: 'You can use destruction as "const { fuel } = props;"' },
    { line: 13, comment: 'Better not to use common react reserved names you can use "const [consumption, setConsumption] = useState(0);"' },
    { line: 19, comment: 'Better to set useEffect dependencies, here you need [fuel, setState] as a dependencies array // or setConsumption after update the const name ;)' },
    {
        line: 21, comment: 'As it\'s only one tag it\'s okay but if the HTML structure scales up you can just use the condition in the regions that you want to change only ' +
            'Like <h2 style=\{state ? \{color: "red"\} : undefined\}>\{state ? \'Alert\' : \'All is fine\'\}</h2>'
    },
    { line: 28, comment: 'Better to unify the way you\'re coding your React app "Class components or Function component with React Hooks"' },
    { line: 34, comment: 'Better to use meaningful state names like "distance, fuel"' },
    { line: 40, comment: 'You need to save the intervalId into a state to clear it on componentWillUnmount life cycle' },
    { line: 48, comment: 'Use const rather than var' },
    { line: 48, comment: 'Also here you can use destruction for getting const out of state' },

]

function test() {
    console.table(review);
}


module.exports = {test};
