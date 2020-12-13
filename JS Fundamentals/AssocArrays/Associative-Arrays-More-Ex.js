//// 01. Garage  /////////////////////////////////////////////////////////////////

function solve(input) {
    let map = new Map();

    for (let line of input) {
        let num = Number(line[0]);
        let keyValue = line.substring(4)
        let list = [];

        if (!map.has(num)) {
            list.push(keyValue)
            map.set(num, list)
        } else {
            list = map.get(num)
            list.push(keyValue)
            map.set(num, list)
        }
    }
    let sortedGarages = [...map.entries()]
    let output = '';

    for (let [currNum, currKeyValue] of sortedGarages) {
        output += `Garage № ${currNum}\n`
        for (let currCarProp of currKeyValue) {
            for (let eachProp of currCarProp) {
                currCarProp = currCarProp.replace(":", " -")
            }
            output += `--- ${currCarProp}\n`
        }
    }
    console.log(output);
}
solve(['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'])




//// 02.Armies ////////////////////////////////////////////////////////////

function solve(params) {
    let armies = {};
    let armyLeaders = [];

    for (let param of params) {
        if (param.includes('arrives')) {
            let indexOfArrives = param.indexOf('arrives');
            let leader = param.slice(0, indexOfArrives).trim();
            if (!armies.hasOwnProperty(leader)) {
                armies[leader] = {
                    armiesName: {},
                    totalArmyCount: 0
                };
            }
            armyLeaders.push(leader);
        } else if (param.includes('defeated')) {
            let indexOfDefeated = param.indexOf('defeated');
            let leader = param.slice(0, indexOfDefeated).trim();
            let indexOfLeader = armyLeaders.indexOf(leader);
            if (armies.hasOwnProperty(leader)) {
                delete armies[leader];
                armyLeaders.splice(indexOfLeader, 1);
            }
        } else if (param.includes(':')) {
            let [leader, army] = param.split(': ');
            let [armyName, armyCount] = army.split(', ');
            if (armies.hasOwnProperty(leader)) {
                if (!armies[leader].armiesName.hasOwnProperty(armyName)) {
                    armies[leader].armiesName[armyName] = Number(armyCount);
                    armies[leader].totalArmyCount += Number(armyCount);
                }
            }
        } else if (param.includes('+')) {
            let [armyName, armyCount] = param.split(' + ');
            armyLeaders.forEach(leader => {
                for (let army in armies[leader]) {
                    if (armies[leader][army].hasOwnProperty(armyName)) {
                        armies[leader].armiesName[armyName] += Number(
                            armyCount
                        );
                        armies[leader].totalArmyCount += Number(armyCount);
                    }
                }
            });
        }
    }
    Object.entries(armies)
        .sort((a, b) => b[1].totalArmyCount - a[1].totalArmyCount)
        .forEach(army => {
            console.log(`${army[0]}: ${army[1].totalArmyCount}`);
            Object.entries(army[1].armiesName)
                .sort((a, b) => b[1] - a[1])
                .forEach(armyName => {
                    console.log(`>>> ${armyName[0]} - ${armyName[1]}`)

                });
        });
}

solve(['Rick Burr arrives', 'Fergus: Wexamp, 30245', 'Rick Burr: Juard, 50000',
    'Findlay arrives', 'Findlay: Britox, 34540', 'Wexamp + 6000', 'Juard + 1350',
    'Britox + 4500', 'Porter arrives', 'Porter: Legion, 55000', 'Legion + 302',
    'Rick Burr defeated', 'Porter: Retix, 3205'])




////03.Comments   ///////////////////////////////////////////

function solve(input) {
    let users = [];
    let articles = [];
    let comments = new Map();
    for (let line of input) {
        if (line.includes("user ")) {
            let userName = line.substring(5)
            users.push(userName)
        } else if (line.includes("article ")) {
            let article = line.split("article ")[1]
            articles.push(article)
        }
        else if (line.includes("posts on")) {

            let firstTuple = line.split(":")[0]
            let [userName, articleName] = firstTuple.split(" posts on ")
            let secondTuple = line.split(":")[1]
            let commentContent = secondTuple.split(", ").join(" - ")

            if (users.includes(userName) && articles.includes(articleName)) {
                let contentString = `--- From user ${userName}:${commentContent}`;

                if (!comments.has(articleName)) {
                    comments.set(articleName, []);
                }
                comments.get(articleName).push(contentString)
            }
        }
    }
    let sortedComments = [...comments.entries()]
        .sort((a, b) => b[1].length - a[1].length);

    for (let elements of sortedComments) {
        let article = elements[0];
        let comments = elements[1].sort((a, b) => a.localeCompare(b));
        console.log(`Comments on ${article}`);
        for (let el of comments) {
            console.log(`${el}`);
        }
    }
}
solve(['user aUser123', 'someUser posts on someArticle: NoTitle, stupidComment',
    'article Books', 'article Movies', 'article Shopping', 'user someUser', 'user uSeR4',
    'user lastUser', 'uSeR4 posts on Books: I like books, I do really like them',
    'uSeR4 posts on Movies: I also like movies, I really do',
    'someUser posts on Shopping: title, I go shopping every day',
    'someUser posts on Movies: Like, I also like movies very much'])




// 05. SoftUni Students //////////////////////////////////////////////////////

function solve(input) {
    let object = {}
    for (let line of input) {
        if (!line.includes("email")) {
            let [course, capacity] = line.split(": ")
            capacity = +capacity
            if (!object.hasOwnProperty(course)) {
                object[course] = {}
                object[course].capac = capacity
                object[course].students = [];
            } else {
                object[course].capac += capacity
            }
        } else {
            line = line.split(" with email ")
            let [userName, credits] = line[0].split("[")
            credits = Number(credits.slice(0, -1))
            let [email, course1] = line[1].split(" joins ");
            if (object.hasOwnProperty(course1)) {
                if (object[course1].capac > 0) {
                    object[course1].capac -= 1;
                    let str = "";
                    str = `${credits}: ${userName}, ${email}`
                    object[course1].students.push(str)
                    object[course1].students.sort((a, b) => {
                        let firstColon = a.indexOf(":")
                        let substrA = Number(a.substring(0, firstColon));
                        let secColon = b.indexOf(":")
                        let substrB = Number(b.substring(0, secColon));
                        return substrB - substrA
                    })
                }
            }
        }
    }
    let sorted = Object.entries(object).sort((a, b) => b[1].students.length - a[1].students.length)
        .forEach(element => {
            console.log(`${element[0]}: ${element[1].capac} places left`);
            element[1].students
                .forEach(student => {
                    console.log(`--- ${student}`);
                })
        });
}
solve([
    'JavaBasics: 2',
    'user1[25] with email user1@user.com joins C#Basics',
    'C#Advanced: 3',
    'JSCore: 4',
    'user2[30] with email user2@user.com joins C#Basics',
    'user13[50] with email user13@user.com joins JSCore',
    'user1[25] with email user1@user.com joins JSCore',
    'user8[18] with email user8@user.com joins C#Advanced',
    'user6[85] with email user6@user.com joins JSCore',
    'JSCore: 2',
    'user11[3] with email user11@user.com joins JavaBasics',
    'user45[105] with email user45@user.com joins JSCore',
    'user007[20] with email user007@user.com joins JSCore',
    'user700[29] with email user700@user.com joins JSCore',
    'user900[88] with email user900@user.com joins JSCore'
])




// 04. Book Shelf //////////////////////////////////////////

function solve(input) {
    let obj = {};
    for (let line of input) {
        if (line.includes("->")) {
            let [id, genre] = line.split(" -> ")
            if (!obj.hasOwnProperty(id)) {
                obj[id] = {};
                if (!obj[id].hasOwnProperty(genre)) {
                    obj[id][genre] = [];
                }
            }
        } else {
            let [book, genre1] = line.split(", ")
            Object.entries(obj).forEach(value => {
                Object.keys(value[1]).forEach(key => {
                    if (key == genre1) {
                        value[1][key].push(book)
                    }
                })
            })
        }
    }
    let sorted = Object.entries(obj).sort((a, b) => {
        let lenthA = 0;
        Object.entries(a[1]).forEach(el => {
            lenthA = el[1].length
        })
        let lenthB = 0;
        Object.entries(b[1]).forEach(el => {
            lenthB = el[1].length
        })
        return lenthB - lenthA
    }).forEach(obj => {
        let str = "";
        str += obj[0] + " ";
        Object.entries(obj[1]).forEach(el => {
            str += el[0] + ": " + el[1].length;
            console.log(str)
            el[1].sort((a, b) => {
                let firstColon = a.indexOf(":");
                let nameA = a.substring(0, firstColon)
                let secColon = b.indexOf(":");
                let nameB = b.substring(0, secColon)
                return nameA.localeCompare(nameB)
            }).forEach(list => {
                console.log(`---> ${list}`);
            })
        })
    })
}
solve(['1 -> history',
    '1 -> action',
    'Death in Time: Criss Bell, mystery',
    '2 -> mystery',
    '3 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Hurting Secrets: Dustin Bolt, action',
    'Future of Dawn: Aiden Rose, sci-fi',
    'Lions and Rats: Gabe Roads, history',
    '2 -> romance',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi',
    'Pilots of Stone: Brook Jay, history'])
