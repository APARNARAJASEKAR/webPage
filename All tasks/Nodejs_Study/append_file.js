var fs = require('fs');

fs.appendFile('test.txt', 'My world!', function (err) {
    if (err)
        console.log(err);
    else
        console.log('Append operation complete.');
});