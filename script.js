'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const displayMovements = function (movements) {
  containerMovements.innerHTML = ''; //.text = 0;
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposite' : 'withdrawal';
    const html = `
     <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__value">${mov}€</div>
        </div>
        `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);
console.log(containerMovements.innerHTML);
/////////////////////////////////////////////////
const arr = ['a', 'b', 'c', 'd', 'e'];
// SLICE: lay phan tu tu vi tri index va kh lam thay doi arr
console.log(arr.slice(2));
console.log(arr);

// SPLICE: ssau khi lay thi xoa tat ca phan tu tu index tro di
console.log(arr.splice(2)); // lay tu index 2 tro di c d e
console.log(arr); // sau khi slice thi da xoa tat ca tu index 2 tro di a b

//REVERSE: dao nguoc va thay doi chuoi ban dau
const arr2 = ['j', 'd', 'k', 'f']; // f k d j
console.log(arr2.reverse());

//CONCAT: noi chuoi
const letters = arr.concat(arr2);
console.log(letters);

//JOIN
console.log(letters.join('-')); // a-b-f-k-d-j

//AT()
console.log(letters[0]);// a
console.log(letters.at(0));// a

//getting last array
console.log(letters[letters.length - 1]); //j
console.log(letters.slice(-1));
console.log(letters.at(-1));

// ------FOR EACH
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, value] of movements.entries()) {
  if (value > 0) {
    console.log(`Movement ${i + 1}, You deporited ${value}`);
  } else {
    console.log(`Movement ${i + 1}, You withdrew ${Math.abs(value)}`);
  }
};

console.log('-------------FOR EACH-------------');
movements.forEach(function (value, i) { // 2 gtri nguoc nhau
  if (value > 0) {
    console.log(`Movement ${i + 1}, You deporited ${value}`);
  } else {
    console.log(`Movement ${i + 1}, You withdrew ${Math.abs(value)}`);
  }
});

//0: function(200); 1:function(450)....

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

console.log('----------FOR EACH WITH MAP-----------')
// tham so thu 3 co hay kh cung dc
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
})


console.log('----------FOR EACH WITH SET-----------')
//Set kh co index nen key vo nghia : tham so thu 3 co hay kh cung dc
const currenciesSet = new Set(['USD', 'GBP', 'USD', 'EUR', 'GBP']);
currenciesSet.forEach(function (value) {
  console.log(`${value}`);
})

/*
Coding Challenge #1
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
about their dog's age, and stored the data into an array (one array for each). For
now, they are just interested in knowing whether a dog is an adult or a puppy.
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
old.
Your tasks:
Create a function 'checkDogs', which accepts 2 arrays of dog's ages
('dogsJulia' and 'dogsKate'), and does the following things:

2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1
is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
�
")
4. Run the function for both test datasets
Test data:
§ Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
§ Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
Hints: Use tools from all lectures in this section so far �
GOOD LUCK �*/

const checkDogs = function (dogJulia, dogsKate) {
  // 1. Julia found out that the owners of the first and the last two dogs actually have
  // cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
  // ages from that copied array (because it's a bad practice to mutate function
  // parameters)
  const dogJuliaCorrected = dogJulia.slice();

  dogJuliaCorrected.splice(0, 1);

  dogJuliaCorrected.splice(-2);
  console.log(dogJuliaCorrected);

  // 2. Create an array with both Julia's (corrected) and Kate's data
  const dogs = dogJuliaCorrected.concat(dogsKate);
  console.log(dogs);

  // For each remaining dog, log to the console whether it's an adult ("Dog number 1
  // is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
  // �
  // ")
  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years olds`);
    } else {
      console.log(`Dog number ${i + 1} is still, and is a puppy🐶🐶`);

    }
  })

}

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

