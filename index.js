// 1. Create a variable to store the singleton instance of the bank branch.
let bankBranchInstance;

// 2. Define a class called `BankBranch` for managing branch information.
class BankBranch {
  // 3. In the `BankBranch` class:
  //    - Create a constructor that takes `branchInfo` as a parameter.
  constructor(branchInfo) {
    //  - Inside the constructor, check if the `bankBranchInstance` variable is null (indicating no instance exists).
    //  - If `bankBranchInstance` is null, create a new instance with the provided `branchInfo` and assign it to `bankBranchInstance`.
    if (bankBranchInstance == null) {
      this.branchInfo = branchInfo;
      bankBranchInstance = this;
    }
    //  - Return the `bankBranchInstance` whether it's newly created or existing.
    return bankBranchInstance;
  }

  // 4. Add methods to the `BankBranch` class for managing branch-related information.
  getBranchInfo() {
    return bankBranchInstance.branchInfo;
  }
}

// 5. In the usage section:

//    - Create instances of the `BankBranch` class, such as `branchA`
const branchA = new BankBranch("Location: Joburg");

//    - Man on the Youtubes said it was for security
Object.freeze(branchA);

//    - Use the `getBranchInfo` method to retrieve branch information from the instances.
console.log("Branch Information: " + branchA.getBranchInfo());

//    - Create instances of the `BankBranch` class, such as `branchB`
const branchB = new BankBranch("Location: Cape Town");

//    - Man on the Youtubes said it was for security
Object.freeze(branchB);

//    - Use the `getBranchInfo` method to retrieve branch information from the instances.
console.log("Branch Information: " + branchB.getBranchInfo());

//    - Verify that `branchA` and `branchB` are both referring to the same instance
if (branchA === branchB) {
  console.log("Error: instance already in use");
}
