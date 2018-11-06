function solve(arr) {
    let username = arr[0];
    let password = '';
    for ( let i = username.length - 1; i >= 0; i--){
        password += username[i];
    }
    let counter = 1;
    for (let i = 1; i <= arr.length - 1; i++, counter++){
        let currentUsername = arr[i];
        if (currentUsername === password){
            console.log (`User ${username} logged in.`);
            break;
        }
        if (counter === 4){
            console.log(`User ${username} blocked!`);
            break;

        } else {
            console.log(`Incorrect password. Try again.`);

        }
    }
}

solve(['Acer', 'login', 'go', 'let me in', 'recA']);
