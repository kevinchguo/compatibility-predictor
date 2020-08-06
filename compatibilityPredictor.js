const data = require("./data");

const compatibilityPredictor = function (data) {
  const team = data.data().team;
  const applicants = data.data().applicants;

  let output = { "scoredApplicants": [] };

  let attributeRatio = {};
  let attributeTotal = 0;
  let amountOfAttributes = 0;

  // Totals up each attribute correspondingly and calculates the total amount of all attributes.
  for (let person in team) {
    for (let attribute in team[person].attributes) {
      if (!attributeRatio[attribute]) {
        attributeRatio[attribute] = team[person].attributes[attribute];
        amountOfAttributes++;
      } else {
        attributeRatio[attribute] += team[person].attributes[attribute];
      }
      attributeTotal += team[person].attributes[attribute];
    }
  }

  // Calculates the ratio of each attribute by dividing the total amount of all attributes.
  for (let ratio in attributeRatio) {
    attributeRatio[ratio] =
      (1 - (attributeRatio[ratio] / attributeTotal)) / amountOfAttributes - 1;
  }

  // Calculate the final score of each applicant
  let finalScoreTotal = 0;
  for (let person in applicants) {
    let applicantFinalScore = 0;
    for (let attribute in applicants[person].attributes) {
      applicantFinalScore +=
        applicants[person].attributes[attribute] * attributeRatio[attribute];
      finalScoreTotal +=
        applicants[person].attributes[attribute] * attributeRatio[attribute];
    }
    output.scoredApplicants.push({
      "name": applicants[person].name,
      "score": Math.round(applicantFinalScore * 100) / 100,
    });
  }

  for (let i = 0; i < output.scoredApplicants.length; i++) {
    output.scoredApplicants[i].score =
      Math.round((output.scoredApplicants[i].score / finalScoreTotal) * 10) /
      10;
  }

  return output;
};

console.log(compatibilityPredictor(data));
