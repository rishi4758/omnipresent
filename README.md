---
Owner: 'Omnipresent'
Description: 'node, typescript api to get updated employee data.'
Status: 'Submit'
Type: 'Rishav test task'
---

## About Omnipresent backend app

The omnipresent backend app gives an api (http://localhost:3000/getEmployeesData) to get all the employees data along with countryName, timezone, language and currency.Although i have couple of options for the implimentation of api like imperative, declarative or lodash function.
Based on the performance testing and lesser execution time with <a href='https://www.npmjs.com/package/api-benchmark'>api-benchmark</a>, I have used imperative coding approach which runs more then 17k operations per second.




<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#technology-stack-used-in-omnipresent-backend-app">Technology stack used in Omnipresent backend app.</a></li>
    <li><a href="#how-to-spin-up-meetfrank-web-scraping-app">How to spin up the project.</a></li>
  </ol>
</details>


## Technology stack used in Omnipresent backend app


<h4> 1. Expressjs    <a href="https://expressjs.com/" target="_blank"> <img src="https://www.bairesdev.com/wp-content/uploads/2021/07/Expressjs.svg" alt="expressjs" width="40" height="40"/></a></h4>

<h4> 2. Typescript        <a href="https://typescriptlang.org/" target="_blank"> <img src="https://cdn.worldvectorlogo.com/logos/typescript-2.svg" alt="typescript" width="40" height="40"/></a></h4>


<h4> 3. Jest        <a href="https://jestjs.io/" target="_blank"> <img src="https://seeklogo.com/images/J/jest-logo-F9901EBBF7-seeklogo.com.png" alt="jest" width="40" height="40"/></a></h4>

<h4> 4. Docker        <a href="https://www.docker.com//" target="_blank"> <img src="https://logos-world.net/wp-content/uploads/2021/02/Docker-Symbol.png" alt="docker" width="40" height="40"/></a></h4>



## How to spin up Omnipresent backend app
## 🚀 Quick start



**Spin Omnipresent backend App inside docker containers**

```
docker-compose up
```
_Note:  It's advised to install docker if not please install dependencies and run the backend._

Open [http://localhost:3000/getEmployeesData](http://localhost:3000/getEmployeesData) to view it in the browser.

## ⚗️ Testing

**Unit test**

Run following command in your terminal to run unit tests:

```
npm run test
```
**E2E tests**


```
npm run test:e2e    
```
