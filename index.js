let njerzit =
[
 'personi1' ,
 'personi2' ,
 'personi3' ,
 'personi4' ,
 'personi5' ,
 'personi6' ,
 'personi7' ,
 'personi8' ,
 'personi9' ,
 'personi10',
]

let kafshet =
[
'ariu1',
'ariu2',
'ariu3',
'ariu4',
'ariu5',
'ariu6',
'ariu7',
'ariu8',
'ariu9',
'ariu10',
]

let njerzitkafshet ={
    njerzit: '',   kafshet: '',
}

for (i = 0; i < njerzit.length ; i++) {
    njerzitkafshet [i] = {
        personi: njerzit [i],
        ariu: kafshet [i],
    };
}

console.log(njerzitkafshet);