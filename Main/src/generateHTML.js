// <!doctype html>
// <html>
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <script src="https://cdn.tailwindcss.com"></script>




// <header>
//     <div class="bg-black mx-auto p-14 ">
//         <div class="text-white text-center text-5xl">Rick's Team</div>
//     </div>
// </header>

const generateManager = function (manager) {
  return `
        
        <div class="w-full max-w-xs">
            <div class="bg-slate-600 w-full max-w-xs py-8 px-11 rounded-t-lg shadow-lg shadow-slate-900">${manager.name}</div>
            <form class="bg-white shadow-lg rounded-b-md shadow-slate-600 px-8 pt-6 pb-6 mb-4">
              <div class="mb-4">
                <label class="block text-gray-700 text-base font-bold mb-1" for="email">
                  Email:
                </label>
                <div class="w-full py-4 px-3 text-gray-800" id="email">${manager.email} link here</div>
              </div>
              <div class="mb-6">
                <label class="block text-gray-700 text-base font-bold mb-2" for="github">
                  Office Number:
                </label>
                <div class="w-full py-2 px-3 text-gray-800 mb-3" id="github">${manager.officeNumber}</div>
              </div>
            </form>
          </div>
          `;
}

const generateEngineer = function (engineer) {
  return `


          <div class="w-full max-w-xs">
            <div class="bg-slate-600 w-full max-w-xs py-8 px-11 rounded-t-lg shadow-lg shadow-slate-900">${engineer.name}</div>
            <form class="bg-white shadow-lg rounded-b-md shadow-slate-600 px-8 pt-6 pb-6 mb-4">
              <div class="mb-4">
                <label class="block text-gray-700 text-base font-bold mb-1" for="email">
                  Email:
                </label>
                <div class="w-full py-4 px-3 text-gray-800" id="email">${engineer.email}</div>
              </div>
              <div class="mb-6">
                <label class="block text-gray-700 text-base font-bold mb-2" for="github">
                  Github:
                </label>
                <div class="w-full py-2 px-3 text-gray-800 mb-3" id="github">${engineer.github}</div>
              </div>
            </form>
          </div>
          </div>
    `;
}

const generateIntern = function (intern) {
  return `


    <div class="flex justify-evenly text-white text-center">

        <div class="w-full max-w-xs">
            <div class="bg-slate-600 w-full max-w-xs py-8 px-11 rounded-t-lg shadow-lg shadow-slate-900">${intern.name}</div>
            <form class="bg-white shadow-lg rounded-b-md shadow-slate-600 px-8 pt-6 pb-6 mb-4">
              <div class="mb-4">
                <label class="block text-gray-700 text-base font-bold mb-1" for="email">
                  Email:
                </label>
                <div class="w-full py-4 px-3 text-gray-800" id="email">${intern.email}</div>
              </div>
              <div class="mb-6">
                <label class="block text-gray-700 text-base font-bold mb-2" for="github">
                  Github:
                </label>
                <div class="w-full py-2 px-3 text-gray-800 mb-3" id="github">${intern.github}</div>
              </div>
            </form>
          </div>
        </div>
    </body>
    ` ;
}

generateHTML = (data) => {
  pageArray = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 


        // call manager function
        if (role === 'Manager') {
            const managerCard = generateManager(employee);

            pageArray.push(managerCard);
        }

        // call engineer function
        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);

            pageArray.push(engineerCard);
        }

        // call intern function 
        if (role === 'Intern') {
            const internCard = generateIntern(employee);

            pageArray.push(internCard);
        }
        
    }

    // joining strings 
    const employeeCards = pageArray.join('')

    // return to generated page
    const generateTeam = generateTeamPage(employeeCards); 
    return generateTeam;

}

const generateTeamPage = function (employeeCards) {

  return`

  <!doctype html>
  <html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  
  <header>
      <div class="bg-black mx-auto p-14 ">
          <div class="text-white text-center text-5xl">Rick's Team</div>
      </div>
  </header>

  <body class="min-h-screen bg-slate-400">
  <div class="flex justify-evenly m-32 text-white text-center">

  ${employeeCards}
  </div>
  
  </body>

  <script src="https://cdn.tailwindcss.com"></script>
  </html>

  `;
}

module.exports = generateHTML