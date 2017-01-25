function Human(name) {
  this.name = name;
  this.age = 17;
  this.sex = 'мужик';
  this.height = 202;
  this.weight = 95;
}

function Worker(name, company, salary) {
  Human.apply(this, arguments);
  this.company = company;
  this.salary = salary;
}
Worker.prototype.work = function() {
  console.log(this.company +" - лучшая мастерская. Именно она - залог моего успеха");
};

function Student(name, university, scholarship) {
  Human.apply(this, arguments);
  this.university = university;
  this.scholarship = scholarship;
}
Student.prototype.tvShow = function(tvshow) {
  console.log(tvshow + " - претенциозное дерьмо! Только Breaking Bad, только хардкор");
};

var fitter = new Worker('Василий', 'Yahoo', 3500);
var tailor = new Worker('Марсель', 'Ind-Style', 19000);

var frosh = new Student('Волчок', 'КНЭУ', 720);
var headman = new Student('Матвей', 'МГИМО', 3650);


// Checking for class inheritance
console.log(fitter.name +' не особо любит двигаться, ведь его вес - '+ fitter.weight);
console.log('---');

console.log('Не часто встретишь такого человека, как '+ tailor.name +'. В свои '+ tailor.age +' лет он уже сшил одежду для всей российской эстрады. Вот что он сам говорит об этом:');
tailor.work();
console.log('---');

console.log('Оно ведь сразу видно, что '+ frosh.name +' - '+ frosh.sex +'. Кто же ещё мог такое ляпнуть?');
frosh.tvShow('Подпольная империя');
console.log('---');

console.log('Всю свою жизнь '+ headman.name +' ходит с шишками. Оно и не удивительно, с таким-то ('+ headman.height +' см) ростом');
console.log('---');