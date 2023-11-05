// For the given JSON iterate over all for loops (for, for in, for of, forEach)
var json_data = {
    my_Name: "Sasikumar",
    Email: "sasijjs@gmail.com",
    Date_of_birth: "07.11.1994",
    Gender: "Male",
    Nationality: "Indian",
    Marital_Status: "Single",
    Languages_known: ["English", "Tamil"],
    Age: 28,
    Marks: { "B.E": "CGPA 6.6", "Higher secondary": "81%", SSLC: "88%" },
  };
  const count = Object.keys(json_data);
  
  // for loop
  for (let i = 0; i < count.length; i++) {
    console.log(json_data[count[i]]);
  }
  
  // for in
  for (let keys in json_data) {
    console.log(json_data[keys]);
  }
  
  // for Of
  for (let i of count) {
    console.log(json_data[i]);
  }
  
  // for each
  count.forEach(values);
  function values(item) {
    console.log(json_data[item]);
  }

 // Create your own resume data in JSON format
var resume = {
    my_Name: "Sasikumar",
    Email: "sasijjs@gmail.com",
    Date_of_birth: "07.11.1994",
    Gender: "Male",
    Nationality: "Indian",
    Marital_Status: "Single",
    Languages_known: ["English", "Tamil"],
    Age: 28,
    Marks: { "B.E": "CGPA 6.6", "Higher secondary": "81%", SSLC: "88%" },
    Qualification: "B.E ECE",
    Years_of_Experience: 6,
    Software_proficiency: [
      "javascript",
      "HTML",
      "css",
      "Ms office",
    ],
    Key_strength: ["short leaning curve", "creative", "apdaptive"],
    Personal_hobbies: ["Gaming", "Watching Cricket"],
  };
  
  var resume_JSON_Format = JSON.stringify(resume);
  console.log(resume_JSON_Format); 