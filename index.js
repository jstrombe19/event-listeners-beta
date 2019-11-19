document.addEventListener('DOMContentLoaded', () => {
    const header = document.createElement('h1');
    const body = document.querySelector('body');
    const photoAlbum = document.createElement('div');
    const button1 = document.createElement('button');
    const surveyForm = document.createElement('form');
    const surveyInputs = ['name', 'age', 'favoriteIceCream'];
    const surveyResponses = document.createElement('section');

    surveyInputs.forEach(input => {
        const inputField = document.createElement('input');
        inputField.setAttribute('id', input);
        inputField.setAttribute('placeholder', input);
        surveyForm.append(inputField);
    })
    const submitButton = document.createElement('button');
    submitButton.innerText="Submit";
    surveyForm.append(submitButton);

    surveyForm.addEventListener('submit', event => {
        event.preventDefault();
        const surveyResponse = document.createElement('h3');
        surveyForm.childNodes.forEach(response => {
            surveyResponse.innerText=`Hi, my name is ${surveyForm.childNodes[0].value}, I am ${surveyForm.childNodes[1].value}, and my favorite ice cream flavor is ${surveyForm.childNodes[2].value}.`
        })   
        surveyResponses.appendChild(surveyResponse);
    })
    
    header.innerText="Linda, Linda, Linda! Listen, Linda!"
    photoAlbum.setAttribute('id', 'photo-album');
    button1.setAttribute('id', 'photo-button');
    button1.innerText="Add a Photo";

    body.appendChild(header);
    body.appendChild(surveyForm);
    body.appendChild(surveyResponses);
    body.appendChild(button1);
    body.appendChild(photoAlbum);

    button1.addEventListener('click', event => {
        event.preventDefault();
        const image = document.createElement('img');
        image.setAttribute('src', 'https://media0ch-a.akamaihd.net/73/51/6be6abbc93161c83db99024f6359d758-why-ron-swanson-was-the-worst-character-on-parks-rec.jpg')
        image.setAttribute('alt', 'ron-swanson-is-awesome');
        photoAlbum.appendChild(image);
    })



})