interface Contact {
    firstName: string;
    lastName: string;
    email?: string[];
    company?: string[];
    phone?: string[];
    birthday?: Date;
    lastContacted?: Date;
    notes?: string[];
}

// class Contact {
//     private _fullName: string;
//     firstName: string;
//     lastName: string;
//     email?: string[]; // assumed index 0 is primary email
//     company?: string[]; // assumed index 0 is current company
//     phone?: string[]; // assumed index 0 is primary phone number
//     birthday?: Date;
//     lastContacted?: Date;
//     notes?: string[];
// 
//     constructor(firstName: string,
//                 lastName: string,
//                 email: string[] = [],
//                 company: string[] = [],
//                 phone: string[] = [],
//                 birthday: Date = new Date(),
//                 lastContacted: Date = new Date(),
//                 notes: string[] = []) {
//         this._fullName = this.firstName + ' ' + this.lastName;
//         this.firstName = firstname;
//         this.lastName = lastName;
//         this.email = email;
//         this.phone = phone;
//         this.birthday = birthday;
//         this.lastContacted = lastContacted;
//         this.notes = notes;
//     }
// 
//     get fullName(): string {
//         return this._fullName
//     }
// 
//     set firstName(newName: string) {
//         this.firstName = newName;
//         this._fullName = this.firstName + ' ' + this.lastName;
//     }
// 
//     set lastName(newName: string) {
//         this.lastName = newName;
//         this._fullname = this.firstName + ' ' + this.lastName;
//     }
// }

export default Contact;
