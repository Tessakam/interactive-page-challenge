(function (){
   /******PHOTO SLIDER******/
   let imageSources = [
       'pics/1.jpg',
       'pics/2.jpg',
       'pics/3.jpg',
       'pics/4.jpeg',
       'pics/5.jpeg'
   ];

    document.getElementById('next').addEventListener('click', ()=>{
        let imagePosition = findImagePosition(imageSources);
        let nextPosition;
        if(imagePosition === imageSources.length - 1){
            nextPosition = 0;
        } else {
            nextPosition = imagePosition + 1;
        }
        document.getElementById('picture').src = imageSources[nextPosition];
    })

    document.getElementById('previous').addEventListener('click', ()=>{
        let imagePosition = findImagePosition(imageSources);
        let prevPosition;
        if(imagePosition === 0){
            prevPosition = imageSources.length - 1;
        } else {
            prevPosition = imagePosition-1;
        }

        document.getElementById('picture').src = imageSources[prevPosition];
    })


    /****** TABS ******/
    const titleTabs = document.querySelectorAll('.tablinks');
    const contentTabs = document.querySelectorAll('.tabcontent');
    contentTabs.forEach(content => {
        content.style.display = 'none';
    })
    contentTabs[0].style.display = 'block';
    titleTabs.forEach((title, index) => {
        title.addEventListener('click', ()=>{
            contentTabs.forEach(content => {
                content.style.display = 'none';
            })
            contentTabs[index].style.display = 'block';
        })
    })

    /****** COUNTER ******/
    let numberVisitorStart = '0';
    let maxNumberVisitor = document.getElementById('visitors').dataset.visitors;
    countVisitor();

    function countVisitor(){
        document.getElementById('visitors').innerText = numberVisitorStart;
        numberVisitorStart++;
        if(numberVisitorStart <= maxNumberVisitor) {
            let randomInterval = Math.random()*3000;
            setTimeout(countVisitor, randomInterval);
        }
    }

    let minDayRemain = '0';
    let maxDayRemain = document.getElementById('remainingdays').dataset.remainingday;
    countDayRemain();

    function countDayRemain(){
        document.getElementById('remainingdays').innerText = maxDayRemain;
        maxDayRemain--;
        if(maxDayRemain >= minDayRemain) {
            setTimeout(countDayRemain, 5000);
        }
    }

    /****** FORM ******/
    document.getElementById('contact').addEventListener('keyup', ()=>{
        validateForm();
    })

})()

function findImagePosition(imageSources)
{
    let pos = 0;

    imageSources.forEach((src,index) => {
        if(document.getElementById('picture').getAttribute('src') === src){
            pos = index;
        }
    })

    return pos;
}

function validateForm()
{
    let firstName = document.getElementById('firstname').value.length;
    let lastName = document.getElementById('lastname').value.length;
    let feedback = document.getElementById('feedback').value.length;
    document.getElementById('submit').disabled = firstName === 0 || lastName === 0 || feedback === 0;
}