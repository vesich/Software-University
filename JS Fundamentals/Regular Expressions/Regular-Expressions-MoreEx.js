//// 01. Winning Ticket ////////////////////////////////////////////////

function solve([input]) {
    input = input.split(", ")
    for (let ticket of input) {
        ticket = ticket.trimStart();
        ticket = ticket.trimEnd();
        if (ticket.length == 20) {
            let firstHalf = ticket.substring(0, 10)
            let secondHalf = ticket.substring(10)
            let regex = /(?<len>\${6,}|\^{6,}|@{6,}|#{6,})/g;
            let sign = "";
            let match = regex.exec(firstHalf)
            let len1 = 0
            while (match != null) {
                len1 = match.groups.len.length;
                match = regex.exec(firstHalf)
            }
            let match2 = regex.exec(secondHalf)
            let len2 = 0
            while (match2 != null) {
                len2 = match2.groups.len.length;
                sign = match2.groups.len[0]
                match2 = regex.exec(secondHalf)

            }
            let lenOfCh = len1 < len2 ? len1 : len2
            if (lenOfCh == 0) {
                console.log(`ticket "${ticket}" - no match`);
            } else if (lenOfCh == 10) {
                console.log(`ticket "${ticket}" - ${lenOfCh}${sign} Jackpot!`);
            } else {
                console.log(`ticket "${ticket}" - ${lenOfCh}${sign}`);
            }
        } else {
            console.log("invalid ticket")
        }
    }
}
solve(['Cash$$$$$$Ca$$$$$$sh']
)




