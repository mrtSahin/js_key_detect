

const dizi = [ // büyük küçük harf farketmeksiznin aynı kodu gösterdiğinden
// küçük harfler için ayrı olarak kodlarıyla birlikte bir dizi oluşturuyor 
//ve onu da map ile key value yapısında kullanıyoruz
    ["a", 97],
    ["b", 98],
    ["c", 99],
    ["ç", 231],
    ["d", 100],
    ["e", 101],
    ["f", 102],
    ["g", 103],
    ["ğ", 287],
    ["h", 104],
    ["i", 105],
    ["ı", 305],
    ["j", 106],
    ["k", 107],
    ["l", 108],
    ["m", 109],
    ["n", 110],
    ["o", 111],
    ["ö", 246],
    ["p", 112],
    ["q", 113],
    ["r", 114],
    ["s", 115],
    ["ş", 351],
    ["t", 116],
    ["u", 117],
    ["ü", 252],
    ["v", 118],
    ["w", 119],
    ["x", 120],
    ["y", 121],
    ["z", 122],
]

const map=new Map(dizi)
//console.log(map)
let center = document.createElement('center')

let spanH = document.createElement('span')
spanH.className='spanP'

let h=document.createElement('h')
h.innerHTML='Bir tuşa basın'

let p=document.createElement('span')
p.className='spanNumber'

center.appendChild(h)
center.appendChild(p)
document.body.appendChild(center)

document.body.addEventListener('keydown',e=>{
    p.style='visibility:visible'
    p.innerHTML=e.keyCode
    spanH.innerHTML=e.key
    
    h.innerHTML='Bastığınız tuş&nbsp'
    
    for( const word of map.keys()){
        //console.log(word)
        if(e.key==word){
            p.innerHTML=map.get(word)
        }
    }
    if(e.keyCode==32){
        spanH.innerHTML='Space'
    }
    h.appendChild(spanH)
    //console.log(e.key.charCodeAt(0))
})

