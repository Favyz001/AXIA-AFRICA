// const a = 23;
// const b = "test";
// const c = false;

// // 100 second duration to run a function

// const longFunction = () => {
//   // it takes 100 second to run
// };

// // console.log("c", c);

// // alert("This will pause everything until i press ok");
// // console.log("a", a);
// // console.log("b", b);

// // Promise - it is the container that houses the future value of an asynchronous call

// const num = 90;
// const str = " this is the string";

// setTimeout(() => {
//   // went to the background which will later be sent to the callback queue
//   console.log("this is set time out ");
// }, 5000);

// // console.log(num, str); // running on call stack

// const api = [
//   {
//     name: "Thomas ",
//     role: "student",
//   },
//   {
//     name: "Ezekiel ",
//     role: "mentor",
//   },
//   {
//     name: "Favor ",
//     role: "student",
//   },
// ];

// const getFavoriteTv = () => {
//   setTimeout(() => {
//     console.log("timer elapsed");
//   }, 2000);

//   return api;
// };

// // getFavoriteTv();

// const getMockData = async () => {
//   const res = await getFavoriteTv();

//   console.log(res, "res");
// };

// // getMockData();

// // call stack, background, callback queue, microtask queue

// setTimeout(() => {
//   console.log("timer elapsed");
// }, 0);

// const promiseFn = () => Promise.resolve("This resolves now");

// // Promise.all()
// // Promise.race()
// // Promise.reject()
// // Promise.any()
// // Promise.allSettled()

// console.log(promiseFn());

// console.log("The end of the program");

console.log("-----------------ASYNCHRONOUS JAVASCRIPT---------------");

const generateUrl = (state) => {
  return `http://api.weatherapi.com/v1/current.json?key=00c200e359e0413493c172048250112&q=${state}&aqi=no`;
};
const url = generateUrl("Abuja");
const url2 = generateUrl("Lagos");

const getStateWeatherFetchMethod = () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) =>
      console.log("this is the name in json format", data.location.name)
    )
    .catch((err) => alert(err))
    .finally(() => {
      console.log("THIS WILL ALWAYS RUN REGARDLESS OF THE STATUS");
    });
};

// getStateWeather();

const getStateWeatherMultipleFetchMethod = () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log("first api call data:", data));

  fetch(url2)
    .then((res) => res.json())
    .then((data) => console.log("second api call data:", data))
    .catch((err) => console.log(err));
};

// getStateWeatherMultipleFetchMethod();

const getSTateWeatherAsyncAwaitMethod = async () => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(`data from async await: `, data);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("THIS WILL ALWAYS RUN REGARDLESS OF THE STATUS");
  }
};

// try {

// } catch (error) {

// }

// getSTateWeatherAsyncAwaitMethod();

const getStateWeatherMultipleAsyncAwaitMethod = async () => {
  try {
    const res1 = await fetch(url);
    const data1 = await res1.json();
    // if (data1.location.name === "Abuja") throw new Error("Failed");
    const res2 = await fetch(url2);
    const data2 = await res2.json();
    const res3 = await fetch(generateUrl("Kebbi"));
    const data3 = await res3.json();

    console.log(`data1: `, data1);
    console.log(`data2: `, data2);
    console.log(`data3: `, data3);
  } catch (error) {
    console.log("error from catch block", error);
  } finally {
    console.log("THIS WILL ALWAYS RUN REGARDLESS OF THE STATUS");
  }
};
getStateWeatherMultipleAsyncAwaitMethod();

// micro task has more priority than callback queue

// 100 microtask queue
// 2 callback queue
