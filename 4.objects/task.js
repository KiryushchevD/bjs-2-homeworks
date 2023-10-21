function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

const student1 = new Student('John', 'male', 21);
const student2 = new Student('Jane', 'female', 20);
const student3 = new Student('Michael', 'male', 19);
console.log(student1);
console.log(student2);
console.log(student3);

Student.prototype.setSubject = function(subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function(...marksToAdd) {
  if (!this.marks) {
 	throw new Error('евозможно добавить оценки, т.к.пользователь не является студентом');
  }
  this.marks.push(...marksToAdd);
}
const student4 = new Student('Bob', 'male', 22);
student4.addMarks(100, 90, 80, 70, 60);
console.log(student4.marks);

Student.prototype.getAverage = function() {
  if (!this.marks || this.marks.length === 0) {
  return 0;
  }
  return this.marks.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / this.marks.length;
}

Student.prototype.exclude = function(reason) {
  this.subject = undefined;
  this.marks = undefined;
    
  this.excluded = reason;
}