        import arrayOfObjects, { video } from "./contentStorage.js";
        import { textContent } from "./contentStorage.js";
        import { image } from "./contentStorage.js";
        // console.log(image)
        // console.log(textContent)
        // console.log(arrayOfObjects);
        var btn = document.getElementsByClassName('activate'); // Buttons for the left content of topline
        var btnRight = document.getElementsByClassName('activate1')[0]; // Button for the right one

        var space = document.createElement("div"); // This is margin lines in "Updates" deparment!!!
        space.style.backgroundColor = '#5e99f5'
        space.style.transition = 'background-color 0.5s'

        var logoEditing = document.getElementById('logoOfMine');
        var logoBlock = document.getElementsByClassName('tcl-img-content')[0];
        var desiredLightValue = "img/raptorsLogoLightTheme.svg";
        var theme = ""; // Theme by the default equals to empty string due to after some kind of condition we gonna add values for that boy.

        if(logoEditing.hasAttribute('src') && logoEditing.getAttribute('src') === desiredLightValue){
            theme = 'light';
            logoBlock.setAttribute('data-clue', `Toggle on ${theme} theme`);
        }else{
            theme = 'dark';
            logoBlock.setAttribute('data-clue', `Toggle on ${theme} theme`);
        }

        var modalOpen = document.getElementById('my-modal'); // 1st modal
        var modalClose = document.getElementById('closeButton'); // 1st modal

        var emailWindow = document.getElementsByClassName('contact')[0];
        emailWindow.classList.toggle('hidden')
        var mainEmailMessage = document.getElementById('emailMainMessage');
        var inputFields = document.getElementsByClassName('item');

        var block = document.getElementById('myTextarea');
        var blockAnim = document.getElementById('myTextareaNext');

        var leftBlock = document.getElementsByClassName('left-block')[0];
        var rightBlock = document.getElementsByClassName('right-block')[0];
        var footer = document.getElementsByClassName('footer')[0];
        var footerButton = document.getElementById('footerButton');
        var inputFooter = document.getElementById('emailInput');
        var windowForFooterButton = document.getElementById('windowRelatedWithFooter');
        var regExpForFooterInput = /^([\w-0-9]{4,32})@(gmail.com|mail.ru|icloud.com|yandex.ru|yahoo.com|outlook.com)$/;

        // Footer button life start!!!
        footerButton.style.cursor = 'not-allowed';
        inputFooter.addEventListener('input', () => { // Здесь мы нам интересен конкретно input поэтому событие происходит как только в input что то происходит
            let inputText = inputFooter.value.trim(); // trim() используй тогда когда хочешь проверить пустой input или нет
            if(regExpForFooterInput.test(inputText)){
                footerButton.disabled = false;
                footerButton.style.cursor = "pointer";
            }else{
                footerButton.disabled = true;
                footerButton.style.cursor = 'not-allowed';
            }

            if(footerButton.style.cursor === 'not-allowed'){
                footerButton.style.backgroundColor = 'rgb(150, 0, 50)';
            }else if(footerButton.style.cursor === 'pointer'){
                footerButton.style.backgroundColor = 'rgb(0, 120, 20)';
            }
        })

        inputFooter.addEventListener('blur', () => { // Blur, тоже запомни тогда когда с input например уходит focus
            if(footerButton.classList.contains("dark-themeForFooterButton")){
                footerButton.style.backgroundColor = "#292929";
            }else{
                footerButton.style.backgroundColor = "#fefefe";
            }
        })

        footerButton.addEventListener('click', () => {
            let inputText = inputFooter.value;
            windowForFooterButton.textContent = `${inputText} has just subscribed!`;
            
            windowForFooterButton.style.transform = "translateY(20%)";
            windowForFooterButton.style.visibility = "visible";
            windowForFooterButton.style.opacity = "1";

            setTimeout(() => {
                windowForFooterButton.style.transform = "translateY(-100%)";
                windowForFooterButton.style.visibility = "hidden";
                windowForFooterButton.style.opacity = "0";
            }, 3000);
            inputFooter.value = '';

            if(inputFooter.value === ''){
                footerButton.style.cursor = "not-allowed";
                footerButton.disabled = true;
            }
        })
        // Footer button life end!!!

        var pressedButton = false;
        var IsLogoPressed = false;
        var secondTap = false;

        logoEditing.addEventListener('click', () => {
            IsLogoPressed = !IsLogoPressed;
            if(IsLogoPressed){
                logoEditing.removeAttribute('src', 'img/raptorsLogo.svg')
                logoEditing.setAttribute('src', 'img/raptorsLogoLightTheme.svg')
            }else{
                secondTap = !secondTap;
                logoEditing.removeAttribute('src', 'img/raptorsLogoLightTheme.svg')
                logoEditing.setAttribute('src', 'img/raptorsLogo.svg')
            }

            let body = document.body;
            body.style.transition = 'background-color 0.5s, background-image 0.5s'
            body.classList.toggle('dark-theme');

            let tclConLeft = document.getElementsByClassName('tcl-content');
            for(let i = 0; i < tclConLeft.length; i++){
                tclConLeft[i].style.transition = 'color 0.5s, transform 0.5s'
                tclConLeft[i].classList.toggle('dark-themeForLeftNav');
            }

            let tclConRight = document.getElementsByClassName('tcr-content')[0];
            tclConRight.style.transition = 'color 0.5s, transform 0.5s';
            tclConRight.classList.toggle('dark-themeForRightNav');

            leftBlock.style.transition = 'color 0.5s, box-shadow 0.5s, background-color 0.5s'
            leftBlock.classList.toggle('dark-themeForBlocks');

            rightBlock.style.transition = 'color 0.5s, box-shadow 0.5s, background-color 0.5s';
            rightBlock.classList.toggle('dark-themeForBlocks');

            footer.classList.toggle('dark-themeForFooter');

            space.classList.toggle('dark-themeForUpdatesLines');

            if(space.classList.contains("dark-themeForUpdatesLines")){
                space.style.backgroundColor = "#a3a3a3";
            }else{
                space.style.backgroundColor = '#5e99f5';
            }

            mainEmailMessage.classList.toggle('dark-themeForMainStringInEmail');

            for(let i = 0; i < inputFields.length; i++){
                inputFields[i].classList.toggle('dark-themeForFieldItems');
            }

            document.getElementById('buttonForEmail').classList.toggle('dark-themeForSubmitButton');

            logoBlock.classList.toggle('light-themeForTheLogo');
            
            if(logoEditing.hasAttribute('src') && logoEditing.getAttribute('src') === desiredLightValue){
                theme = 'light';
                logoBlock.setAttribute('data-clue', `Toggle on ${theme} theme`);
            }else{
                theme = 'dark';
                logoBlock.setAttribute('data-clue', `Toggle on ${theme} theme`);
            }

            document.getElementsByClassName('fbl-topContent')[0].classList.toggle('dark-themeForFooterTop');
            document.getElementsByClassName('fbl-middleContent')[0].classList.toggle('dark-themeForFooterMiddle');
            document.getElementById('emailInput').classList.toggle('dark-themeForFooterBottom');
            document.getElementById('footerButton').classList.toggle('dark-themeForFooterButton')
            
            windowForFooterButton.classList.toggle("dark-themeForWindowRelatedWithFooter");
        })

        btnRight.addEventListener("click", () => {
            modalOpen.classList.add("open");
        })

        modalClose.addEventListener("click", () => {
            modalOpen.classList.remove("open");
        })

        // Pressing ESC allows us to close modal window
        window.addEventListener("keydown", (e) => {
            if(e.key === "Escape"){
                modalOpen.classList.remove("open");
            }
        })

        function changeButtonText(){
            document.querySelector('.buttonForEmail').innerHTML = "Sure?";
        }
        function changeButtonText2(){
            document.querySelector('.buttonForEmail').innerHTML = "Send the message";
        }

        document.getElementById('buttonForEmail').addEventListener('mouseover', changeButtonText)
        document.getElementById('buttonForEmail').addEventListener('mouseout', changeButtonText2)

        btn[1].addEventListener('click', fullfill) // First button

        function fullfill(){
            block.classList.add("myTextarea1");
            pressedButton = true;

            blockAnim.classList.add("myTextarea3")
            setTimeout(() => {
                blockAnim.classList.add("myTextarea2")
            }, 800);

            setTimeout(() => {
                blockAnim.appendChild(image);
            }, 100)

            setTimeout(() => {
                block.innerHTML = textContent;
                block.appendChild(video);
            }, 800);

            if(pressedButton){
                setTimeout(() => {
                    video.play();
                }, 800);
            }

            block.style.transition = '1.5s width'
            if(rightBlock.style.display == 'none'){
                leftBlock.style.width = '70%'
                rightBlock.style.width = '30%'
                setTimeout(() => {
                    rightBlock.style.display = 'block'
                }, 200)
            }

            setTimeout(() => {
               block.classList.remove("myTextarea1")
               blockAnim.classList.remove("myTextarea2")
               blockAnim.classList.remove("myTextarea3")
            }, 2000);
        }
        

        btn[2].addEventListener('click', fullfill2) // Second button

        function fullfill2(){
            space.style.width = '70%'
            space.style.height = '5px'
            space.style.borderRadius = '5px'
            pressedButton = true; // Проверка кнопки

            if(pressedButton){
                setTimeout(() => {
                    block.removeChild(video);
                }, 800);
            }

            if(image){
                setTimeout(() =>{
                    blockAnim.removeChild(image);
                }, 100)
            }

            block.style.transition = '1.5s width'
            if(rightBlock.style.display == 'none'){
                leftBlock.style.width = '70%'
                rightBlock.style.width = '30%'
                setTimeout(() => {
                    rightBlock.style.display = 'block'
                }, 100)
            }

            // CONTENT OBJECT

            block.classList.add("myTextarea1")
            blockAnim.classList.add("myTextarea3")
            setTimeout(() => {
                blockAnim.classList.add("myTextarea2")
            }, 800);
            const list = document.createElement("ul")

            // LOOPING THROUGH TO INTERACT WITH EACH ELEMENT
            for(let obj of arrayOfObjects){ // Simple loop to run through an object
                const listItem = document.createElement("li") // Here i am creating an element
                listItem.style.listStyleType = 'none'
                
                for(let i in obj){
                    const propertyLine = document.createElement("div"); // Создаю див для того чтобы между элементами списка было пространство
                    propertyLine.style.marginBottom = '15px'

                    listItem.innerHTML += `<span style = "user-select:none;"><span style = "text-transform:capitalize;">${i}</span> <img src= "../img/updatesElementRaptor.svg" style="width:35px; height:35px;"> ${obj[i]}</span>` // Здесь я вывожу те значения которые нашла i!
                    listItem.appendChild(propertyLine); // в конец каждого li сую div

                    if (list[i] == 0) {
                        list.innerHTML += space.outerHTML;
                    }
                }
                list.appendChild(listItem) // outerHTML - это как innerHTML, плюс сам элемент.
            }

            // OUTPUTTING
            setTimeout(() => {
                block.innerHTML = list.outerHTML
            }, 800);

            setTimeout(() => {
               block.classList.remove("myTextarea1");
               blockAnim.classList.remove("myTextarea2");
               blockAnim.classList.remove("myTextarea3");
            }, 2000);
        }

        btn[4].addEventListener('click', fullfill4); // Fourth button

        function fullfill4(){
            pressedButton = true;
            if(pressedButton){
                setTimeout(() => {
                    block.innerHTML = ''
                }, 800);
            }
            blockAnim.classList.remove('myTextarea2');
            blockAnim.classList.remove('myTextarea3');
            block.style.transition = '1s width';
            blockAnim.style.transition = '1s width'
            
            leftBlock.style.width = '100%';
            rightBlock.style.width = '0%';

            setTimeout(() => {
                block.appendChild(emailWindow);
                emailWindow.classList.remove('hidden');
            }, 1000);

            setTimeout(() => {
                emailWindow.classList.add('myTextarea3')
            }, 1000);

            setTimeout(() => {
                emailWindow.classList.remove('myTextarea3')
            }, 2300);

            setTimeout(() => {
                rightBlock.style.display = 'none'; 
            }, 1390);
        }