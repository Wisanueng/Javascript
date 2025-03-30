// การแยกค่าจากอ็อบเจ็กต์ (Object Destructuring) หรืออาร์เรย์ (Array Destructuring) ช่วยให้โค้ดอ่านง่ายขึ้น และลดการเขียนซ้ำได้ ตัวอย่างเช่น:

// Object Destructuring
// แยกคุณสมบัติจากอ็อบเจ็กต์ออกมาเป็นตัวแปร:


const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50
};

let { firstName, lastName } = person;


console.log(person.lastName);