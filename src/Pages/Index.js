// import HealthDetails from "../components/HealthDetails.js"

function Index({healthDetails}) {
    // const healthDetails={
    //     "name": "Jamee",
    //     "age": 28,
    //     "weight": 70,
    //     "height": 5.5,
    //     "sleep amount": "",
    //     "water intake": "",
    //     "steps": "",
    //     "screen time": "",
    //     userDataFields: [],
    //   }


      const BMI = (weight,height) => {
        return Math.ceil(weight/height**2 * 703)
    }
    return (
        <div className="Index">
            <h2>{healthDetails.name}'s Health Report</h2>
            <h3>BMI is {BMI(healthDetails.weight, healthDetails.height)}</h3>
            {/* <HealthDetails healthDetails={healthDetails}/> */}
        </div>
    )
}

export default Index