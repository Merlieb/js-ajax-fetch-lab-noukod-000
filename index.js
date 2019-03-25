
function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}


function getIssues() {
  fetch(`https://api.github.com/repos/GilTorch/javascript-fetch-lab/issues`,{
    headers:{
      Authorization:`${getToken()}`
    }
  }).then((response)=>response.json())
  .then(showIssues)
}

function showIssues(json) {
}

function createIssue() {
  const issueData={
    title:document.getElementById("title").value,
    body:document.getElementById("body").value
  }
  fetch(`https://api.github.com/repos/GilTorch/javascript-fetch-lab/issues`,{
    method:"post",
    body:JSON.stringify(issueData),
    headers:{
      Authorization:`${getToken()}`
    }
  }).then((response)=>response.json())
  .then(showIssues)
}

function forkRepo() {
  const token=getToken();
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`,{
    method:'post',
    headers:{
      Authorization:`${token}`
    }
  })
  .then((response)=>response.json())
  .then(showResults);
}

function showResults(jsonResponse){
  const resultDiv=document.querySelector("#results");
  resultDiv.innerHTML=jsonResponse.html_url;
}
