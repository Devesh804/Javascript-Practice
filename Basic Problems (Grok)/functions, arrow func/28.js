//Important: What will be the output and why?

const obj = {
  name: "Dev",
  sayHi: function() {
    console.log(this.name);
  }
};
obj.sayHi(); 