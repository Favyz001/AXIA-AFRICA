// // console.log("This is typescript class");

// //

// // examples of instantiating types with inbuilt types
// const num: number = 45;
// const str: string = `this is a template literal, it shows the num: ${num}`;
// const bool: boolean = 45 < 34;
// const und: undefined = undefined;
// const nul: null = null;

// const arrStrings: string[] = ["34"];
// const arrNumber: number[] = [67, 67, 889, 98999898];
// const arrBoolean: boolean[] = [44 > 9];

// // console.log("arrBoolean: ", arrBoolean);

// type MyString = string;
// const myString: MyString = "56";

// type ObjType = {
//   name?: string;
//   age: number;
//   id?: string;
//   course?: string;
//   role: string;
//   permissions?: string[];
// };

// const studentObj: ObjType = {
//   name: "Akinniyi Ezekiel Wonderful",
//   age: 1,
//   course: "Mobile Development",
//   id: "4",
//   role: "student",
//   permissions: ["yes", "no"],
// };

// const students: ObjType[] = [{ ...studentObj, name: "Favour" }, studentObj];

// // console.log("students: ", students[1]);

// type StringOrBoolean = string | boolean | number | undefined;

// const numOrStr: string | number = 34;
// const strOrBool: StringOrBoolean = "57";
// const strOrStudentObj: string | ObjType = "yes";

// const addExampleFunction = (a: number, b: number) => {
//   console.log(a + b);
// };

// addExampleFunction(4, 5);

// // any type

// let anyVariable: any = 4;
// anyVariable = "78";
// anyVariable = true;
// anyVariable = undefined;
// anyVariable = null;
// anyVariable = studentObj;

// // Enums
// // enum EnumValues {
// //   yes = "yes",
// //   no = "no",
// //   maybe = "maybe",
// // }

// // const yesOrNoOrMaybe: EnumValues = EnumValues.no;

// // console.log(yesOrNoOrMaybe);

// // Literal type
// type YesOrNoOrMaybeType = "yes" | "no" | "maybe";

// // const t1 : YesOrNoOrMaybeType = "yes" // gives yes
// // const t2 : YesOrNoOrMaybeType = "no" // gives no
// // const t3 : YesOrNoOrMaybeType = "maybe" // gives maybe
// // const t4 : YesOrNoOrMaybeType = "try this out" // throws error

// // Void type

// type MentorType = {
//   name: string;
//   mentorID: string;
//   age: number;
//   getAge: () => number;
//   getAge2: () => void;
// };

// const mentor: MentorType = {
//   name: "Akinniyi Ezekiel Wonderful",
//   mentorID: "ajgjadfjkdfajdkflkaldkjf",
//   age: 10,
//   getAge: () => {
//     const newAge: number = 20;
//     return newAge;
//   },
//   getAge2: () => {
//     console.log(89);
//     return 89;
//   },
// };

// console.log(mentor.getAge());
// console.log(mentor.getAge2());

// UTILITY TYPES

//
// partial, omit, pick, readonly, required

type UserType = {
  firstName: string;
  lastName: string;
  role: "student" | "mentor";
  age: number;
  isActive: boolean;
  permissions: string[];
};

type SmallUser = {
  firstName: string;
  role: string;
  isActive: boolean;
};

// PARTIAL TYPES
type PartialUser = Partial<UserType>;
type PartialUser2 = Partial<{ name: string; age: number }>;

const base = {
  firstName: "Ezekiel",
  lastName: "Akinniyi",
  role: "student",
  isActive: true,
  permissions: ["view logs"],
};
const user: UserType = {
  ...base,
  age: 23,
  role: "mentor",
};

const partialUser: PartialUser = {
  age: 20,
};

// OMIT UTILITY TYPE
type OmitUser = Omit<UserType, "age" | "firstName" | "test">;

const omitUser: OmitUser = {
  isActive: true,
  lastName: "lastName",
  permissions: [],
  role: "student",
};

// console.log("omitUser", omitUser);

// PICK UTILITY TYPE

type PickUserType = Pick<UserType, "role" | "firstName" | "isActive">;

const pickUser: PickUserType = {
  firstName: "Ezekiel",
  isActive: true,
  role: "mentor",
};

// console.log(pickUser);

// REQUIRED UTILITY TYPE

type PartialPickUserType = Partial<PickUserType>;
type RequiredUserType = Required<PartialPickUserType>;

const partialPickUserType: PartialPickUserType = {};
const requiredUserType: RequiredUserType = {
  firstName: "Ezekiel",
  isActive: 4 > 6,
  role: "student",
};

// READONLY UTILITY TYPE

type FirstReadOnly = {
  readonly str: string;
  name: string;
  role: "student" | "mentor";
  readonly arr2: string[]; // only the arr reference is readonly, the array itself is mutable
  readonly arr: readonly string[]; // makes the entire array immutable
  // readonly obj: {
  //  readonly type: string;
  // };
};

const firstReadonly: FirstReadOnly = {
  name: "",
  role: "mentor",
  str: "this is just a demonstration",
  arr: ["first", "second"],
  arr2: [""],
};

firstReadonly.name = "Ezekiel";
firstReadonly.role = "student";
// firstReadonly.arr = [""]
// firstReadonly.arr2 = [""]
firstReadonly.arr2.push("third", "fourth");
// firstReadonly.str = ""; // not allowed by typescript

// console.log("firstReadonly", firstReadonly);

type ReadOnlyUserType = Readonly<RequiredUserType>;

const readonlyUserType: ReadOnlyUserType = {
  firstName: "Ezekiel",
  isActive: true,
  role: "mentor",
};

// readonlyUserType.firstName = "Akinniyi"
// readonlyUserType.isActive = false
// readonlyUserType.role = "student"

type Array1 = string[];
type Array2 = (string | number)[];
type Array3 = Array<string>;
type Array4 = Array<string | number>;

type ObjArray = {
  name: string;
  age: number;
  role: string;
  permission: string;
};

type ObjArrayBetter = Array<{
  name: string;
  age: number;
  role: string;
  permission: string;
}>;
