import checkUrl from "./checkURL";

export default async function handleSubmit(e){
      e.preventDefault();

      let url = document.getElementById("article-url").value;
      console.log(url);
      // checking the url on submit
    
      if(checkUrl(url)){

        const requestOptions = {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({url})
        };

           const res = await fetch('http://localhost:8081/sentiment', requestOptions)
            .then(async response => (
              await response.json()
            ))
            .then((res) => {
            document.getElementById('text').innerHTML = 'Text: ' + res.model;
            document.getElementById('score_tag').innerHTML = 'Score: ' + res.score_tag;
            document.getElementById('agreement').innerHTML = 'Agreement: ' + res.agreement;
            document.getElementById('subjectivity').innerHTML = 'Subjectivity: ' + res.subjectivity;
            document.getElementById('confidence').innerHTML = 'Confidence: ' + res.confidence;
            document.getElementById('irony').innerHTML = 'Irony: ' + res.irony;})
            .catch(error => console.log('error', error));
        }else{
             alert("Url is invalid / Please use a diffrent Url")
            }

  }

 