function calculateGrade(score) 
{
    switch (true)
    {
        case (score >= 90 && score <= 100):
            return "Grade A"
        case (score >= 75 && score < 90):
            return "Grade B"
        case (score >= 50 && score < 75):
            return "Grade C"
        case (score >= 35 && score < 50):
            return "Grade D"
        default:
            return "Fail"
    }
}
let studentScore = 60
console.log(calculateGrade(studentScore))