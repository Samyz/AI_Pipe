function createNDimArray(dimensions) {
    var t, i = 0, s = dimensions[0], arr = new Array(s);
    if ( dimensions.length < 3 ) for ( t = dimensions[1] ; i < s ; ) arr[i++] = new Array(t);
    else for ( t = dimensions.slice(1) ; i < s ; ) arr[i++] = createNDimArray(t);
    return arr;
}

var data = new Array(10);
// data map 0 level 16
data[0] = 
[[{"type" : 2, "direction" : 2}, {"type" : 1, "direction" : 1}, {"type" : 2, "direction" : 1}, {"type" : 1, "direction" : 1}, {"type" : 2, "direction" : 3}, {"type" : 2, "direction" : 2}, {"type" : 2, "direction" : 3}, {"type" : 1, "direction" : 2}],
[{"type" : 1, "direction" : 1}, {"type" : 1, "direction" : 1}, {"type" : 1, "direction" : 2}, {"type" : 2, "direction" : 2}, {"type" : 1, "direction" : 1}, {"type" : 1, "direction" : 2}, {"type" : 2, "direction" : 1}, {"type" : 2, "direction" : 3}],
[{"type" : 2, "direction" : 1}, {"type" : 1, "direction" : 1}, {"type" : 2, "direction" : 4}, {"type" : 2, "direction" : 3}, {"type" : 2, "direction" : 2}, {"type" : 1, "direction" : 1}, {"type" : 1, "direction" : 2}, {"type" : 2, "direction" : 3}],
[{"type" : 1, "direction" : 1}, {"type" : 2, "direction" : 1}, {"type" : 1, "direction" : 2}, {"type" : 1, "direction" : 2}, {"type" : 2, "direction" : 3}, {"type" : 2, "direction" : 3}, {"type" : 2, "direction" : 1}, {"type" : 1, "direction" : 1}],
[{"type" : 2, "direction" : 3}, {"type" : 2, "direction" : 1}, {"type" : 1, "direction" : 1}, {"type" : 2, "direction" : 4}, {"type" : 1, "direction" : 2}, {"type" : 2, "direction" : 1}, {"type" : 1, "direction" : 2}, {"type" : 1, "direction" : 1}],
[{"type" : 2, "direction" : 3}, {"type" : 2, "direction" : 1}, {"type" : 1, "direction" : 1}, {"type" : 1, "direction" : 1}, {"type" : 2, "direction" : 4}, {"type" : 2, "direction" : 2}, {"type" : 2, "direction" : 3}, {"type" : 1, "direction" : 2}]];

// data map 1 level 17
data[1] = 
[[{"type" : 2, "direction" : 2}, {"type" : 2, "direction" : 4}, {"type" : 2, "direction" : 4}, {"type" : 2, "direction" : 3}, {"type" : 2, "direction" : 4}, {"type" : 2, "direction" : 3}, {"type" : 2, "direction" : 2}, {"type" : 2, "direction" : 4}],
[{"type" : 1, "direction" : 1}, {"type" : 2, "direction" : 4}, {"type" : 1, "direction" : 2}, {"type" : 2, "direction" : 2}, {"type" : 2, "direction" : 2}, {"type" : 2, "direction" : 1}, {"type" : 2, "direction" : 2}, {"type" : 2, "direction" : 4}],
[{"type" : 2, "direction" : 1}, {"type" : 1, "direction" : 2}, {"type" : 2, "direction" : 3}, {"type" : 2, "direction" : 1}, {"type" : 2, "direction" : 4}, {"type" : 1, "direction" : 1}, {"type" : 1, "direction" : 1}, {"type" : 1, "direction" : 1}],
[{"type" : 2, "direction" : 4}, {"type" : 2, "direction" : 4}, {"type" : 1, "direction" : 2}, {"type" : 1, "direction" : 1}, {"type" : 2, "direction" : 3}, {"type" : 1, "direction" : 1}, {"type" : 2, "direction" : 3}, {"type" : 1, "direction" : 2}],
[{"type" : 2, "direction" : 1}, {"type" : 2, "direction" : 1}, {"type" : 2, "direction" : 3}, {"type" : 2, "direction" : 3}, {"type" : 1, "direction" : 2}, {"type" : 2, "direction" : 2}, {"type" : 1, "direction" : 1}, {"type" : 2, "direction" : 1}],
[{"type" : 2, "direction" : 1}, {"type" : 2, "direction" : 4}, {"type" : 2, "direction" : 3}, {"type" : 1, "direction" : 1}, {"type" : 2, "direction" : 1}, {"type" : 1, "direction" : 2}, {"type" : 2, "direction" : 3}, {"type" : 2, "direction" : 3}]];


// data map 2 level 18
data[2] = 
[[{"type" : 2, "direction" : 2}, {"type" : 2, "direction" : 3}, {"type" : 1, "direction" : 1}, {"type" : 1, "direction" : 2}, {"type" : 2, "direction" : 3}, {"type" : 1, "direction" : 1}, {"type" : 1, "direction" : 1}, {"type" : 2, "direction" : 1}],
[{"type" : 1, "direction" : 2}, {"type" : 2, "direction" : 1}, {"type" : 2, "direction" : 4}, {"type" : 2, "direction" : 2}, {"type" : 1, "direction" : 2}, {"type" : 2, "direction" : 2}, {"type" : 2, "direction" : 3}, {"type" : 1, "direction" : 2}],
[{"type" : 2, "direction" : 2}, {"type" : 1, "direction" : 2}, {"type" : 2, "direction" : 2}, {"type" : 2, "direction" : 4}, {"type" : 1, "direction" : 1}, {"type" : 2, "direction" : 1}, {"type" : 1, "direction" : 2}, {"type" : 2, "direction" : 2}],
[{"type" : 2, "direction" : 4}, {"type" : 2, "direction" : 1}, {"type" : 2, "direction" : 2}, {"type" : 2, "direction" : 2}, {"type" : 1, "direction" : 2}, {"type" : 1, "direction" : 2}, {"type" : 1, "direction" : 2}, {"type" : 2, "direction" : 4}],
[{"type" : 2, "direction" : 3}, {"type" : 2, "direction" : 2}, {"type" : 1, "direction" : 1}, {"type" : 2, "direction" : 4}, {"type" : 2, "direction" : 2}, {"type" : 2, "direction" : 1}, {"type" : 1, "direction" : 1}, {"type" : 2, "direction" : 3}],
[{"type" : 2, "direction" : 1}, {"type" : 1, "direction" : 2}, {"type" : 1, "direction" : 1}, {"type" : 2, "direction" : 3}, {"type" : 2, "direction" : 3}, {"type" : 2, "direction" : 3}, {"type" : 1, "direction" : 2}, {"type" : 2, "direction" : 1}]];

// data map 3 level 19
data[3] = 
[[{"type" : 2, "direction" : 2}, {"type" : 2, "direction" : 3}, {"type" : 1, "direction" : 1}, {"type" : 1, "direction" : 1}, {"type" : 2, "direction" : 2}, {"type" : 1, "direction" : 2}, {"type" : 2, "direction" : 2}, {"type" : 1, "direction" : 1}],
[{"type" : 1, "direction" : 2}, {"type" : 2, "direction" : 2}, {"type" : 2, "direction" : 1}, {"type" : 1, "direction" : 2}, {"type" : 1, "direction" : 1}, {"type" : 2, "direction" : 1}, {"type" : 1, "direction" : 2}, {"type" : 1, "direction" : 2}],
[{"type" : 2, "direction" : 1}, {"type" : 1, "direction" : 1}, {"type" : 2, "direction" : 3}, {"type" : 2, "direction" : 3}, {"type" : 2, "direction" : 4}, {"type" : 1, "direction" : 2}, {"type" : 2, "direction" : 1}, {"type" : 2, "direction" : 3}],
[{"type" : 2, "direction" : 3}, {"type" : 1, "direction" : 1}, {"type" : 2, "direction" : 1}, {"type" : 1, "direction" : 1}, {"type" : 2, "direction" : 3}, {"type" : 2, "direction" : 4}, {"type" : 1, "direction" : 2}, {"type" : 2, "direction" : 3}],
[{"type" : 2, "direction" : 4}, {"type" : 2, "direction" : 2}, {"type" : 1, "direction" : 2}, {"type" : 2, "direction" : 2}, {"type" : 2, "direction" : 3}, {"type" : 1, "direction" : 2}, {"type" : 2, "direction" : 4}, {"type" : 2, "direction" : 3}],
[{"type" : 1, "direction" : 2}, {"type" : 1, "direction" : 1}, {"type" : 2, "direction" : 1}, {"type" : 1, "direction" : 1}, {"type" : 2, "direction" : 2}, {"type" : 2, "direction" : 3}, {"type" : 1, "direction" : 1}, {"type" : 2, "direction" : 4}]];

// data map 4 level 20
data[4] = 
[[{"type" : 2, "direction" : 2}, {"type" : 2, "direction" : 2}, {"type" : 1, "direction" : 2}, {"type" : 2, "direction" : 4}, {"type" : 2, "direction" : 2}, {"type" : 2, "direction" : 4}, {"type" : 2, "direction" : 3}, {"type" : 1, "direction" : 2}],
[{"type" : 1, "direction" : 1}, {"type" : 1, "direction" : 1}, {"type" : 2, "direction" : 2}, {"type" : 2, "direction" : 4}, {"type" : 2, "direction" : 1}, {"type" : 1, "direction" : 1}, {"type" : 2, "direction" : 1}, {"type" : 1, "direction" : 2}],
[{"type" : 2, "direction" : 3}, {"type" : 2, "direction" : 1}, {"type" : 1, "direction" : 2}, {"type" : 2, "direction" : 4}, {"type" : 2, "direction" : 2}, {"type" : 1, "direction" : 2}, {"type" : 2, "direction" : 1}, {"type" : 2, "direction" : 2}],
[{"type" : 2, "direction" : 1}, {"type" : 1, "direction" : 1}, {"type" : 1, "direction" : 1}, {"type" : 2, "direction" : 4}, {"type" : 1, "direction" : 2}, {"type" : 1, "direction" : 1}, {"type" : 1, "direction" : 1}, {"type" : 1, "direction" : 2}],
[{"type" : 1, "direction" : 2}, {"type" : 1, "direction" : 1}, {"type" : 2, "direction" : 2}, {"type" : 1, "direction" : 2}, {"type" : 2, "direction" : 3}, {"type" : 2, "direction" : 1}, {"type" : 2, "direction" : 2}, {"type" : 1, "direction" : 1}],
[{"type" : 1, "direction" : 1}, {"type" : 1, "direction" : 1}, {"type" : 1, "direction" : 1}, {"type" : 1, "direction" : 1}, {"type" : 1, "direction" : 2}, {"type" : 2, "direction" : 1}, {"type" : 2, "direction" : 1}, {"type" : 2, "direction" : 3}]];

// data map 5 level 21
data[5] = 
[[{"type" : 2, "direction" : 2}, {"type" : 1, "direction" : 1}, {"type" : 2, "direction" : 2}, {"type" : 1, "direction" : 1}, {"type" : 2, "direction" : 2}, {"type" : 1, "direction" : 2}, {"type" : 1, "direction" : 1}, {"type" : 1, "direction" : 1}],
[{"type" : 1, "direction" : 2}, {"type" : 2, "direction" : 2}, {"type" : 2, "direction" : 2}, {"type" : 2, "direction" : 1}, {"type" : 2, "direction" : 1}, {"type" : 2, "direction" : 1}, {"type" : 1, "direction" : 1}, {"type" : 2, "direction" : 3}],
[{"type" : 2, "direction" : 1}, {"type" : 2, "direction" : 4}, {"type" : 2, "direction" : 1}, {"type" : 1, "direction" : 2}, {"type" : 2, "direction" : 2}, {"type" : 2, "direction" : 3}, {"type" : 1, "direction" : 1}, {"type" : 2, "direction" : 2}],
[{"type" : 1, "direction" : 2}, {"type" : 1, "direction" : 2}, {"type" : 2, "direction" : 3}, {"type" : 1, "direction" : 2}, {"type" : 1, "direction" : 1}, {"type" : 1, "direction" : 2}, {"type" : 2, "direction" : 1}, {"type" : 2, "direction" : 2}],
[{"type" : 1, "direction" : 2}, {"type" : 2, "direction" : 3}, {"type" : 2, "direction" : 3}, {"type" : 2, "direction" : 3}, {"type" : 2, "direction" : 3}, {"type" : 2, "direction" : 4}, {"type" : 2, "direction" : 1}, {"type" : 2, "direction" : 4}],
[{"type" : 2, "direction" : 3}, {"type" : 1, "direction" : 2}, {"type" : 2, "direction" : 4}, {"type" : 2, "direction" : 4}, {"type" : 1, "direction" : 1}, {"type" : 2, "direction" : 4}, {"type" : 1, "direction" : 2}, {"type" : 2, "direction" : 4}]];

// data map 6 level 22
data[6] =
[[{"type" : 2, "direction" : 2}, {"type" : 2, "direction" : 3}, {"type" : 2, "direction" : 4}, {"type" : 2, "direction" : 1}, {"type" : 1, "direction" : 2}, {"type" : 2, "direction" : 2}, {"type" : 2, "direction" : 3}, {"type" : 1, "direction" : 2}],
[{"type" : 2, "direction" : 1}, {"type" : 2, "direction" : 1}, {"type" : 1, "direction" : 2}, {"type" : 2, "direction" : 2}, {"type" : 2, "direction" : 3}, {"type" : 2, "direction" : 2}, {"type" : 2, "direction" : 4}, {"type" : 2, "direction" : 4}],
[{"type" : 1, "direction" : 2}, {"type" : 1, "direction" : 2}, {"type" : 1, "direction" : 2}, {"type" : 2, "direction" : 2}, {"type" : 2, "direction" : 3}, {"type" : 2, "direction" : 3}, {"type" : 2, "direction" : 2}, {"type" : 2, "direction" : 3}],
[{"type" : 1, "direction" : 2}, {"type" : 2, "direction" : 3}, {"type" : 2, "direction" : 4}, {"type" : 2, "direction" : 3}, {"type" : 1, "direction" : 1}, {"type" : 2, "direction" : 2}, {"type" : 2, "direction" : 4}, {"type" : 2, "direction" : 3}],
[{"type" : 2, "direction" : 4}, {"type" : 2, "direction" : 2}, {"type" : 2, "direction" : 3}, {"type" : 1, "direction" : 2}, {"type" : 2, "direction" : 3}, {"type" : 2, "direction" : 2}, {"type" : 1, "direction" : 2}, {"type" : 1, "direction" : 2}],
[{"type" : 1, "direction" : 2}, {"type" : 2, "direction" : 3}, {"type" : 2, "direction" : 3}, {"type" : 2, "direction" : 4}, {"type" : 1, "direction" : 2}, {"type" : 1, "direction" : 2}, {"type" : 2, "direction" : 3}, {"type" : 1, "direction" : 2}]];

// data map 7 level 23
data[7] =
[[{"type" : 2, "direction" : 2}, {"type" : 2, "direction" : 3}, {"type" : 2, "direction" : 4}, {"type" : 1, "direction" : 2}, {"type" : 2, "direction" : 1}, {"type" : 1, "direction" : 2}, {"type" : 2, "direction" : 4}, {"type" : 1, "direction" : 2}],
[{"type" : 1, "direction" : 1}, {"type" : 1, "direction" : 2}, {"type" : 1, "direction" : 1}, {"type" : 2, "direction" : 2}, {"type" : 2, "direction" : 1}, {"type" : 1, "direction" : 1}, {"type" : 2, "direction" : 4}, {"type" : 2, "direction" : 1}],
[{"type" : 2, "direction" : 2}, {"type" : 2, "direction" : 3}, {"type" : 1, "direction" : 1}, {"type" : 2, "direction" : 2}, {"type" : 2, "direction" : 4}, {"type" : 1, "direction" : 2}, {"type" : 2, "direction" : 1}, {"type" : 2, "direction" : 3}],
[{"type" : 1, "direction" : 1}, {"type" : 2, "direction" : 2}, {"type" : 2, "direction" : 4}, {"type" : 2, "direction" : 2}, {"type" : 2, "direction" : 1}, {"type" : 1, "direction" : 2}, {"type" : 2, "direction" : 2}, {"type" : 1, "direction" : 2}],
[{"type" : 1, "direction" : 2}, {"type" : 1, "direction" : 2}, {"type" : 1, "direction" : 1}, {"type" : 1, "direction" : 1}, {"type" : 1, "direction" : 2}, {"type" : 1, "direction" : 2}, {"type" : 2, "direction" : 3}, {"type" : 2, "direction" : 4}],
[{"type" : 1, "direction" : 1}, {"type" : 2, "direction" : 4}, {"type" : 1, "direction" : 2}, {"type" : 1, "direction" : 1}, {"type" : 2, "direction" : 3}, {"type" : 1, "direction" : 1}, {"type" : 2, "direction" : 1}, {"type" : 2, "direction" : 1}]];

// data map 8 level 24
data[8] =
[[{"type" : 2, "direction" : 2}, {"type" : 1, "direction" : 2}, {"type" : 2, "direction" : 1}, {"type" : 1, "direction" : 2}, {"type" : 1, "direction" : 2}, {"type" : 1, "direction" : 2}, {"type" : 2, "direction" : 1}, {"type" : 2, "direction" : 2}],
[{"type" : 1, "direction" : 1}, {"type" : 2, "direction" : 3}, {"type" : 2, "direction" : 2}, {"type" : 1, "direction" : 1}, {"type" : 1, "direction" : 2}, {"type" : 2, "direction" : 1}, {"type" : 1, "direction" : 2}, {"type" : 1, "direction" : 2}],
[{"type" : 2, "direction" : 1}, {"type" : 2, "direction" : 1}, {"type" : 1, "direction" : 2}, {"type" : 2, "direction" : 4}, {"type" : 1, "direction" : 2}, {"type" : 2, "direction" : 3}, {"type" : 1, "direction" : 2}, {"type" : 2, "direction" : 2}],
[{"type" : 1, "direction" : 2}, {"type" : 2, "direction" : 2}, {"type" : 1, "direction" : 2}, {"type" : 1, "direction" : 2}, {"type" : 2, "direction" : 2}, {"type" : 2, "direction" : 3}, {"type" : 2, "direction" : 1}, {"type" : 2, "direction" : 2}],
[{"type" : 2, "direction" : 2}, {"type" : 2, "direction" : 4}, {"type" : 2, "direction" : 1}, {"type" : 2, "direction" : 1}, {"type" : 2, "direction" : 1}, {"type" : 2, "direction" : 1}, {"type" : 2, "direction" : 1}, {"type" : 1, "direction" : 2}],
[{"type" : 2, "direction" : 2}, {"type" : 2, "direction" : 2}, {"type" : 1, "direction" : 1}, {"type" : 2, "direction" : 2}, {"type" : 2, "direction" : 2}, {"type" : 1, "direction" : 1}, {"type" : 1, "direction" : 1}, {"type" : 2, "direction" : 4}]];

// data map 9 level 25
data[9] = 
[[{"type" : 2, "direction" : 2}, {"type" : 1, "direction" : 2}, {"type" : 2, "direction" : 4}, {"type" : 2, "direction" : 4}, {"type" : 1, "direction" : 2}, {"type" : 2, "direction" : 4}, {"type" : 2, "direction" : 1}, {"type" : 1, "direction" : 1}],
[{"type" : 1, "direction" : 1}, {"type" : 2, "direction" : 4}, {"type" : 2, "direction" : 1}, {"type" : 1, "direction" : 2}, {"type" : 1, "direction" : 2}, {"type" : 2, "direction" : 3}, {"type" : 2, "direction" : 4}, {"type" : 1, "direction" : 1}],
[{"type" : 2, "direction" : 1}, {"type" : 2, "direction" : 2}, {"type" : 2, "direction" : 2}, {"type" : 1, "direction" : 2}, {"type" : 2, "direction" : 2}, {"type" : 2, "direction" : 3}, {"type" : 2, "direction" : 3}, {"type" : 2, "direction" : 3}],
[{"type" : 1, "direction" : 2}, {"type" : 2, "direction" : 3}, {"type" : 2, "direction" : 4}, {"type" : 2, "direction" : 4}, {"type" : 2, "direction" : 2}, {"type" : 1, "direction" : 2}, {"type" : 2, "direction" : 2}, {"type" : 2, "direction" : 4}],
[{"type" : 1, "direction" : 1}, {"type" : 2, "direction" : 2}, {"type" : 2, "direction" : 1}, {"type" : 2, "direction" : 3}, {"type" : 1, "direction" : 1}, {"type" : 2, "direction" : 2}, {"type" : 2, "direction" : 3}, {"type" : 2, "direction" : 2}],
[{"type" : 2, "direction" : 1}, {"type" : 2, "direction" : 4}, {"type" : 2, "direction" : 3}, {"type" : 2, "direction" : 3}, {"type" : 1, "direction" : 2}, {"type" : 2, "direction" : 1}, {"type" : 2, "direction" : 1}, {"type" : 2, "direction" : 4}]];

// add nextDirection
for (var i in data)
    for (var j in data[i])
        for (var k in data[i][j])
            data[i][j][k].nextDirection = 0;
// for (var i in data)
//     console.log(data[i]);

module.exports = { data };