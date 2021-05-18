// Create the instance properties `fullname` and `email` in the `Employee` class. Given a person's first and last names:

// Form the `fullname` by simply joining the first and last name together, separated by a space.
// Form the `email` by joining the first and last name together with a `.` in between, and follow it with `@company.com` at the end. Make sure the entire email is in lowercase.
// Examples

// ```
// emp1 = Employee("John", "Smith")
// emp1.fullname ➞ "John Smith"

// emp2 = Employee("Mary",  "Sue")
// emp2.email ➞ "mary.sue@company.com"

// emp3 = Employee("Antony", "Walker")
// emp3.firstname ➞ "Antony"

// ```
// * Note :- The properties firstname and lastname are already made for you.



class Employee {
	constructor (firstname, lastname) {
		this.firstname = firstname
		this.lastname = lastname
		// Complete the code!
		// this.fullname = this.firstname +" "+this.lastname;
		this.fullname = this.firstname.concat(" ",this.lastname)
		this.email = this.firstname.toLowerCase()+"."+this.lastname.toLowerCase()+"@company.com"
	
	}
}

const emp1 = new Employee("John","Smith")
console.log(emp1)