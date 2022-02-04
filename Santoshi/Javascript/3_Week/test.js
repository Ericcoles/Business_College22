// const sum = (a, b) => a + b;
// console.log(sum(1, 3));
// Need one line, without return keyword then one line.

// const isLegal = (age) => {
//   return age >= 18;
// };

// const isLegal = (age) => age >= 18;
// console.log(isLegal(21));

////////////

// const dimensions = [20, 5, 45];

// // create variables

// // const width = dimensions[0];
// // const height = dimensions[1];
// const [width, height, xyz] = dimensions;

// // log them

// console.log(width);
// console.log(height);
// console.log(xyz);

////////

// const lat = [5.234];
// const log = [1.423];
// const point = [...lat, ...log];
// console.log(point);

// const items = ["tissues", "Oranges"];
// const otherItems = [...items, "Tomatti"];
// console.log(otherItems);

/////
// const config = {
//   id: 1,
//   isAdmin: false,
//   status: true,
//   theme: { dark: false, accessibility: true },
// };

// const id = config.id;
// const isAdmin = config.is;
// const theme = config.theme;

// const { id, isAdmin, theme } = config;
// console.log(id);
/////

// const config = {
//   id: 1,
//   isAdmin: false,
//   status: true,
//   theme: { dark: false, accessibility: true },
// };
// const { id, isAdmin, theme } = config;

// const { id, isAdmin, status, theme};

// console.log(id,isAdmin,status,theme);
//////

// const firstPerson = { name: "Sam", age: 18 };

// const secondPerson = { age: 25, type: "admin" };

// const mergedObjects = { ...firstPerson, ...secondPerson };
// console.log(mergedObjects);

// const user = { details: { name: { firstName: "Sam" } }, data: null };
// user.details?.name?.firstName;

// console.log(user.details?.name?.firstName);
// console.log(user.data?.id);
// console.log(user.children?.names);

/////

// const data = { temperatures: [-3, 14, 4] };

// const firstValue = data.temperatures?.[0];

// console.log(firstValue);

/////


const person = {age=43, name: 'sam'};

const upperCasedName = person.name?.toUpperCase();
console.log();