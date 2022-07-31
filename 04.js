//4. Using the constructor function, create an object and methods to support the following functionality 

class ProfileInfo {
    constructor() {
        this.username = "";
        this.email = "";
        this.address = "";
    }
    setUsername(username) {
        this.username = username;
    }
    getUsername() {
        return this.username;
    }
    setEmail(email) {
        this.email = email;
    }
    getEmail() {
        return this.email;
    }
    setAddress(address) {
        this.address = address;
    }
    getAddress() {
        return this.address;
    }
}

class User {
    constructor() {
        this.name = "";
        this.age = 0;
        this.profileInfo = null;
    }
    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    setAge(age) {
        this.age = age;
    }
    getAge() {
        return this.age;
    }
    setProfileInfo(profileInfo) {
        this.profileInfo = profileInfo;
    }
    getProfileInfo() {
        return this.profileInfo;
    }
}


const profileInfo = new ProfileInfo();
profileInfo.setUsername("username");
profileInfo.setEmail("abc@example.com");
profileInfo.setAddress("The user address");
profileInfo.getEmail();


const user = new User();
user.setName("John");
user.getName();
user.setAge(63);
user.getAge();
user.setProfileInfo(profileInfo);
user.getProfileInfo();
console.log(user);
