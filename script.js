function createCard(title, cname, views, monthsOld, duration, thumbnail) {

    let viewsStr;
    if (views < 1000) {
        viewsStr = views;
    }else if (views >= 1000 && views<1000000) {
        viewsStr = views / 1000 + "K";
    } else if (views >= 1000000) {
        viewsStr = views / 1000000 + "M";
    }

    let html = `<div class="container">
                    <div class="card">
                        <div class="banner">
                            <img src= ${thumbnail} alt="">
                            <p>${duration}</p>
                        </div>

                    
                        <div class="content">
                            <div class="title">
                                    <h2>${title}</h2>
                                    <img src="dot.svg" alt="">
                            </div>

                            <div class="small">
                                <p>${cname}</p>
                                <div class="points"></div>
                                <p>${viewsStr}</p>
                                <div class="points"></div>
                                <p>${monthsOld} months ago</p>
                            </div>

                            <div class="channel">
                                <img src="https://yt3.ggpht.com/ytc/AIdro_kX3sdbuu3KFmRPsmlu0R5Rx_BhpxwupjtvJmkEdNfla7w=s68-c-k-c0x00ffffff-no-rj" alt="">
                                <p>${cname}</p>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>`

    document.querySelector("body").innerHTML = document.querySelector("body").innerHTML + html
}



createCard("Installing VS Code & How Website Work | Sigma Web Development Course - <br>Tutorial #2  ", "ritikachannel", 123000000, 2 , "10:22" , "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")

























// async function abc() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(123)
//         }, 3500)
//     })
// }




// async function abc() {
//     let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     let data = await x.json()
//     console.log(x)
//     // console.log(data)

//     await
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

//     return 34
// }





// async function main() {
//     console.log("something")
//     console.log("yes you are good")

//     let data = await abc()
//     console.log(data)
//     console.log("asdf")
//     console.log("awergthfg")
// }



// main(   )

