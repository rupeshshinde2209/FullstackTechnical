"use strict";
class Myclass {
    showName(uname, email) {
        console.log(`welcome to ts ${uname} ${email}`);
    }
}
const userdata = ['admin', 'manager'];
console.log(...userdata);
let classDemo = new Myclass();
classDemo.showName('admin', 'rrh@ss.com');
