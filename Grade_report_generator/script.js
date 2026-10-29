// GRADE REPORT GENERATOR

function getLetterGrade(score){
  if(score >= 90){
    return "A";
  }
  else if(score >= 80){
    return "B";
  }
  else if(score >= 70){
    return "C";
  }
  else if(score >= 60){
    return "D";
  }
  else{
    return "F";
  }
}

function hasPassed(score){
  if(score >=60){
    return true;
  }
  else{
    return false;
  }
}

function getFeedback(grade){
  if(grade == "A"){
    return "Excellent Work";
  }
  else if(grade =="B"){
    return "Good work";
  }
  else if(grade =="C"){
    return "You passed";
  }
  else if(grade =="D"){
    return "You passed";
  }
  else if(grade =="F"){
    return "Keep practicing";
  }
}

function createGradeReport(name, score){
  let grade = getLetterGrade(score);
  let msg = getFeedback(grade);
  let passed = hasPassed(score);

  return {name, score, passed, msg};
}
