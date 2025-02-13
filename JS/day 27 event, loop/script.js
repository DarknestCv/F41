compile.onlclick = () =>{
    let compileCode = code.innerHTML
    compileCode = compileCode.replace(/\<div>\>/g, '\n')
    compileCode = compileCode.replace(/\<\div>\>/g, '')
    compileCode = compileCode.replace(/create/g, 'let')
    compileCode = compileCode.replace(/message/g, 'alert')
    js.textContent = compileCode


    let jsCode = new Function([], compileCode)
    jsCode()
    
}
// \<\</div\> - екрануємо говорячи що це просто текст символ



// ! Event loop - потік якихось дій(цикл подій)
// call stack - те де щось виконується
// callback queue - черга
//  WebAPis - нам звідти приходять дії(те що встає в чергу)

// ! Інтерпритація - по іншому JIT - комплелаяція в реальному часі оптимізуєця пізніше крч працює швидше
// ! Компеляція - 
