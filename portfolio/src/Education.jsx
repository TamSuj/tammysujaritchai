import ucla from "./assets/ucla-logo.jpeg";
function Education() {
  return (
      <div>
          {/*UCLA*/}
          <div className="flex mb-4">
              <img src={ucla} alt="company logo" className="w-12 h-12 rounded-xl shadow-md mb-4"/>
              <div className="block ml-4">
                  <h4 className="text-lg font-semibold">Computer Science and Linguistics</h4>
                  <p className="text-sm text-gray-600">University of California, Los Angeles</p>
              </div>
          </div>
          <h1></h1>
          <p></p>
      </div>
  );
}

export default Education;