var fs = require('fs');

fs.writeFile('test.txt', 'Function crreates a text file and prints message!', function (err) {
        if (err)
                console.log(err);
        else
                console.log('Write operation complete.');
});