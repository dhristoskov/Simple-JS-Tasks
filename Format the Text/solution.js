function solve() {
    let input = document.getElementById('input');
    let output = document.getElementById('output');

    if(input === null || output === null){
        throw new Error('Fail!!!');
    }

    let text = input.innerHTML.split('.').filter(x => x !=='');
    for (let indexA = 0; indexA < text.length; indexA += 3) {
        let paragraph = document.createElement('p');
        let str = '';
        for (let indexB = 0; indexB < 3; indexB++) {

            if( (indexA + indexB) < text.length )
            str += text[indexA + indexB] + '.';
        }

        paragraph.innerHTML = str;
        output.appendChild(paragraph);
    }
  
}
document.addEventListener('DOMContentLoaded', x => {
    document.getElementById('formatItBtn').addEventListener('click', solve);
})