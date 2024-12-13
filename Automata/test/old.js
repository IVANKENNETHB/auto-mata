// nested objects
// NFA
// Strings that starts with '0'



// function test1() {
//     const transitions = {
//         'q0': { '0': 'q1', '1': 'p' }, 
//         'q1': { '0': 'q1', '1': 'q1' }
//     };

//     document.getElementById("language").innerText = "Strings that starts with '0'";
//     const input = document.getElementById('inputString').value.trim(); // dito mapunta yung value ng tinype mo. Ignore whitespaces

//     let currentState = 'q0';
//     let accepted = false;
//     const transitionLog = []; 
//     document.getElementById('initial').innerText = `Start State: 'q0'`;
//     document.getElementById('final').innerText = `Final State: 'q1'`;
//     for (let i = 0; i < input.length; i++) {
//         const element = input[i];
//         if (transitions[currentState] && transitions[currentState][element]) {
//             const nextState = transitions[currentState][element];
//             transitionLog.push(`${element} → '${currentState}' → '${nextState}'`); // yung .push eii mag lagay lang ng maglagay ng element sa array
//             currentState = nextState;
//         } else {
//             currentState = 'p';
//             break;
//         }
//     }

//     accepted = currentState === 'q1' && input.startsWith('0');
//     document.getElementById('result').innerText = accepted ?
//         `The string "${input}" is accepted.\nTransitions:\n${transitionLog.join('\n')}` : // .join, pagsamasamahin yung mga element ng array
//         `The string "${input}" is not accepted.\nTransitions:\n${transitionLog.join('\n')}`;
// }

// Test2

//  NFA that accepts strings having the last two characters 00 or 11
// function test() {
//     const transitions = {
//         'q0': { '0': ['q0', 'q1'], '1': ['q0', 'q3'] },
//         'q1': { '0': ['q2'], '1': ['null'] },
//         'q2': { '0': ['q2'], '1': ['null'] },
//         'q3': { '0': ['null'], '1': ['q4'] },
//         'q4': { '0': ['null'], '1': ['null'] }
//     };

//     const input = document.getElementById('inputString').value.trim();
//     let currentStates = ['q0'];
//     const transitionLog = [];

//     for (let i = 0; i < input.length; i++) {
//         const element = input[i];
//         const newStates = [];

//         for (const state of currentStates) {
//             if (transitions[state] && transitions[state][element]) {
//                 const nextStates = transitions[state][element];
//                 for (const nextState of nextStates) {
//                     transitionLog.push(`'${state}' → '${element}' → '${nextState}'`);
//                     newStates.push(nextState);
//                 }
//             }
//         }

//         currentStates = newStates.length > 0 ? newStates : [];
//     }

//     const finalStates = ['q2', 'q4'];
//     const accepted = currentStates.some(state => finalStates.includes(state));

//     if (accepted) {
//         document.getElementById('result').innerText =
//             `The string "${input}" is accepted.\nTransitions:\n${transitionLog.join('\n')}`;
//     } else {
//         document.getElementById('result').innerText =
//             `The string "${input}" is not accepted.\nTransitions:\n${transitionLog.join('\n')}`;
//     }
// }


// test 3

// nested objects

// Strings that contains even number of '0' and '1'


// function test3() {
//     const transitions = {
//         'q0': { '0': 'q1', '1': 'q2' }, 
//         'q1': { '0': 'q0', '1': 'q3' },
//         'q2': { '0': 'q3', '1': 'q0' },
//         'q3': { '0': 'q2', '1': 'q1' }
//     };

//     document.getElementById("language").innerText = "Strings that contains even number of '0' and '1'";
//     const input = document.getElementById('inputString').value.trim(); // dito mapunta yung value ng tinype mo. Ignore whitespaces

//     let currentState = 'q0';
//     let accepted = false;
//     const transitionLog = []; 
//     document.getElementById('initial').innerText = `Start State: 'q0'`;
//     document.getElementById('final').innerText = `Final State: 'q0'`;
//     for (let i = 0; i < input.length; i++) {
//         const element = input[i];
//         if (transitions[currentState] && transitions[currentState][element]) {
//             const nextState = transitions[currentState][element];
//             transitionLog.push(`${element} → '${currentState}' → '${nextState}'`); // yung .push eii mag lagay lang ng maglagay ng element sa array
//             currentState = nextState;
//         } else {
//             currentState = 'p';
//             break;
//         }
//     }

//     accepted = currentState === 'q0' ;
//     document.getElementById('result').innerText = accepted ?
//         `The string "${input}" is accepted.\nTransitions:\n${transitionLog.join('\n')}` : // .join, pagsamasamahin yung mga element ng array
//         `The string "${input}" is not accepted.\nTransitions:\n${transitionLog.join('\n')}`;
// }

// //Test 4
// // nested objects

// // not sure pa kung anong language to
// // pero nag aaccept sya ng binary string odd number na substring na "10" or "01" 


// function test4() {

//     const transitions = {
//         'q0': { '0': ['q0', 'q1'], '1': 'q3' }, 
//         'q1': { '0': ['q2'], '1': ['null'] },
//         'q2': { '0': ['null'], '1': ['null'] },
//         'q3': { '0': ['null'], '1': ['q4'] }
//     };
    
//     document.getElementById("language").innerText = "not sure pa kung anong language to pero nag aaccept sya ng binary string odd number na substring na '10' or '01' ";
//     const input = document.getElementById('inputString').value.trim(); // dito mapunta yung value ng tinype mo. Ignore whitespaces

//     let currentState = 'q0';
//     let accepted = false;
//     const transitionLog = []; 
//     document.getElementById('initial').innerText = `Start State: 'q0'`;
//     document.getElementById('final').innerText = `Final State: 'q3'`;
//     for (let i = 0; i < input.length; i++) {
//         const element = input[i];
//         if (transitions[currentState] && transitions[currentState][element]) {
//             const nextState = transitions[currentState][element];
//             transitionLog.push(`${element} → '${currentState}' → '${nextState}'`); // yung .push eii mag lagay lang ng maglagay ng element sa array
//             currentState = nextState;
//         } else {
//             currentState = 'p';
//             break;
//         }
//     }

//     accepted = currentState === 'q3' ;
//     document.getElementById('result').innerText = accepted ?
//         `The string "${input}" is accepted.\nTransitions:\n${transitionLog.join('\n')}` : // .join, pagsamasamahin yung mga element ng array
//         `The string "${input}" is not accepted.\nTransitions:\n${transitionLog.join('\n')}`;
// }

// String that ends with zero

function test5() {
    const transitions = {
        'q0': { '0': ['q0', 'q1'], '1': ['q0'] }, 
        'q1': { '0': ['q2'], '1': ['null'] },
        'q2': { '0': ['q2'], '1': ['q2'] }
    };
    
    const input = document.getElementById('inputString').value.trim();

    let currentStates = ['q0']; 
    const transitionLog = [];
    let accepted = false;

    for (let i = 0; i < input.length; i++) {
        const element = input[i];
        const newStates = [];

        for (let j = 0; j < currentStates.length; j++) {
            const state = currentStates[j];
            if (transitions[state] && transitions[state][element]) {
                const nextStates = transitions[state][element];

                for (let k = 0; k < nextStates.length; k++) {
                    const nextState = nextStates[k];
                    if (nextState !== 'null') {
                        transitionLog.push(`${state}, ${element} → ${nextState}`);
                        newStates.push(nextState);

                        if (nextState === 'q2') {
                            accepted = true;
                        }
                    }
                }
            }
        }

        if (newStates.length > 0) {
            currentStates = newStates;
        } else {
            currentStates = [];
            break; 
        }
    }

    if (accepted) {
        document.getElementById('result').innerText = 
            `The string "${input}" is accepted.\nTransitions:\n${transitionLog.join('\n')}`;
    } else {
        document.getElementById('result').innerText = 
            `The string "${input}" is not accepted.\nTransitions:\n${transitionLog.join('\n')}`;
    }
}

