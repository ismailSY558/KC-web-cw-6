alert("مرحباً بك في موقعي الذي سيحسب درجتك")

let grade = prompt("اكتب درجتك بالأرقام")

console.log(grade);

if (grade >= 90) {
    console.log( "%c لقد حصلت على امتياز 🥳" ,'background: #222; color: #bada55' );
}
else if(grade >= 80){
    console.log("%c لقد حصلت على جيد جداً🤩",'background: #222; color: #bada55');
}
else if(grade >= 70){
    console.log("%c لقد حصلت على جيد🙂",'background: #222; color: #bada55')
}
else if(grade >= 60){
    console.log("%c لقد حصلت على مقبول😕",'background: #222; color: #bada55');
}
else if(grade >= 50){
    console.log("%c لقد حصلت على ضعيف☹️",'background: #222; color: #bada55');
}
else{
    console.log("%c راسب💔",'background: #222; color: #bada55');
}

// جافاسكربت ليست جافا