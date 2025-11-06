//? You are given 2 large arrays of user object, listA and listB.
//? a object has { id: 'string', name: 'string' }

//? Your task is to return the number of mutual friends between these 2 people.
//? Mutual friends are people that are in both arrays.


//------------ Data Setup Block ----------------
const USER_COUNT = 50000;
let userA =[];
let userB =[];

const createUser = (id) =>({id: `user-${id}`, name: `User ${id}`});

for(let i = 0; i < USER_COUNT; i++){
    userA.push(createUser(i));
    userB.push(createUser(i+25000));
}
//? users 25000 to 50000 are mutual friends
//? users 0 to 24999 are not mutual friends and 50001 to 74999 are not mutual friends


//------------ Algorithm Block ----------------
const getMutualFriendCountSlow = (personA, personB) => {
    // 2.5billion
    let mutualFriend = [];
    const start = performance.now();

    personA.forEach(friendA => {
        personB.forEach(friendB => {
            if(friendA.id === friendB.id){
                mutualFriend.push(friendB);
            }
        })
    });

    const end = performance.now();
    return { count: mutualFriend.length, time: end-start };
}

const getMutualFriendCountFast = (personA, personB) => {
    const start = performance.now();
    const mutualFriend = personA.filter(friendA => personB.some(friendB => friendA.id === friendB.id));
    const end = performance.now();
    return { count: mutualFriend.length, time: end-start };
}

const getMutualFriendCountVeryFast = (personA, personB) => {
  const start = performance.now();

//   1lakh
//   const idListA = new Set(personA.map(friend => friend.id));
//   const mutualFriend = [];
//   userB.forEach(friendB => {
//       if(idListA.has(friendB.id)){
//           mutualFriend.push(friendB);
//       }
//   });


//   1lakh
  const idListA = new Set(personA.map((friend) => friend.id));
  const mutualFriend = personB.filter(friendB => idListA.has(friendB.id));


//   2.5lakh
//   const idListA = new Set(personA.map((friend) => friend.id));
//   const idListB = new Set(personB.map((friend) => friend.id));
//   const mutualFriend = [...idListA].filter((id) => idListB.has(id));

  const end = performance.now();
  return { count: mutualFriend.length, time: end - start };
}

// console.log(getMutualFriendCountSlow(userA,userB));
// console.log(getMutualFriendCountFast(userA,userB));
console.log(getMutualFriendCountVeryFast(userA,userB));