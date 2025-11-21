// console.log("This is typescript class");

//

// examples of instantiating types with inbuilt types
const num: number = 45;
const str: string = `this is a template literal, it shows the num: ${num}`;
const bool: boolean = 45 < 34;
const und: undefined = undefined;
const nul: null = null;

const arrStrings: string[] = ["34"];
const arrNumber: number[] = [67, 67, 889, 98999898];
const arrBoolean: boolean[] = [44 > 9];

// console.log("arrBoolean: ", arrBoolean);

type MyString = string;
const myString: MyString = "56";

type ObjType = {
  name?: string;
  age: number;
  id?: string;
  course?: string;
  role: string;
  permissions?: string[];
};

const studentObj: ObjType = {
  name: "Akinniyi Ezekiel Wonderful",
  age: 1,
  course: "Mobile Development",
  id: "4",
  role: "student",
  permissions: ["yes", "no"],
};

const students: ObjType[] = [{ ...studentObj, name: "Favour" }, studentObj];

// console.log("students: ", students[1]);

type StringOrBoolean = string | boolean | number | undefined;

const numOrStr: string | number = 34;
const strOrBool: StringOrBoolean = "57";
const strOrStudentObj: string | ObjType = "yes";

const addExampleFunction = (a: number, b: number) => {
  console.log(a + b);
};

addExampleFunction(4, 5);

// any type

let anyVariable: any = 4;
anyVariable = "78";
anyVariable = true;
anyVariable = undefined;
anyVariable = null;
anyVariable = studentObj;

// Enums
// enum EnumValues {
//   yes = "yes",
//   no = "no",
//   maybe = "maybe",
// }

// const yesOrNoOrMaybe: EnumValues = EnumValues.no;

// console.log(yesOrNoOrMaybe);

// Literal type
type YesOrNoOrMaybeType = "yes" | "no" | "maybe";

// const t1 : YesOrNoOrMaybeType = "yes" // gives yes
// const t2 : YesOrNoOrMaybeType = "no" // gives no
// const t3 : YesOrNoOrMaybeType = "maybe" // gives maybe
// const t4 : YesOrNoOrMaybeType = "try this out" // throws error

// Void type

type MentorType = {
  name: string;
  mentorID: string;
  age: number;
  getAge: () => number;
  getAge2: () => void;
};

const mentor: MentorType = {
  name: "Akinniyi Ezekiel Wonderful",
  mentorID: "ajgjadfjkdfajdkflkaldkjf",
  age: 10,
  getAge: () => {
    const newAge: number = 20;
    return newAge;
  },
  getAge2: () => {
    console.log(89);
    return 89;
  },
};

console.log(mentor.getAge());
console.log(mentor.getAge2());
