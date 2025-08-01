## getElementByIdは、HTMLの中からIDで要素を探すときに使います
## console.dirは

document.getElementById('banner')
    < img id = "banner" src = "https:​/​/​images.unsplash.com/​photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80" alt >​
const banner = document.getElementById('banner')
undefined
console.dir(banner)
VM1447: 1 img#banner
undefined
document.getElementById('toc')
    < div id = "toc" role = "navigation" aria - labelledby=​"mw-toc-heading" >​…​</div >​
const toc = document.getElementById('toc')
undefined
console.dir(toc)
VM1708: 1 div#toc


## innerText, InnerHTML
document.querySelector('p')
    < p >​…​</p >
        document.querySelector('h1').innerHTML
'ニワトリ'
document.querySelector('p').innerHTML
'\n    ニワトリという和名は「<a href="/wiki/%E5%BA%AD" title="庭">庭</a>に飼う鳥」、つまり家禽という意味から名づけられた<sup id="cite_ref-Sankaido_1-0" class="reference"><a href="#cite_note-Sankaido-1">[1]</a></sup>。ニワトリは普通「鶏」と書かれるが、「家鶏」で「にわとり」と充てることもある<sup id="cite_ref-Nandoku_2-0" class="reference"><a href="#cite_note-Nandoku-2">[2]</a></sup>。ニワトリは古くは<b>カケ</b>（鶏）と呼ばれた<sup id="cite_ref-Nandoku_2-1" class="reference"><a href="#cite_note-Nandoku-2">[2]</a></sup>。代表的な鳥であるため、単に「とり」ともよばれる<sup id="cite_ref-Shincho_3-0" class="reference"><a href="#cite_note-Shincho-3">[3]</a></sup>。雄のニワトリは「<b>雄鶏</b>（牡鶏）」（<b>おんどり</b>）、雌のニワトリは「<b>雌鶏</b>（牝鶏）」（めんどり）と呼ばれる<sup id="cite_ref-Nandoku_2-2" class="reference"><a href="#cite_note-Nandoku-2">[2]</a></sup><sup id="cite_ref-Shincho_3-1" class="reference"><a href="#cite_note-Shincho-3">[3]</a></sup>。\n  '
document.querySelector('h1').innerHTML = '<i>ABCD</i>'
'<i>ABCD</i>'

const container = document.getElementById("container");
container.style.textAlign = "center";

const img = document.querySelector("img");
img.style.width = "150px";
img.style.borderRadius = "50%";

const spans = document.querySelectorAll("h1 span");
spans.forEach((span, index) = > {
    span.style.color = colors[index];
});


h2.classList.add('purple')

h2.classList.add('border')

h2.classList.remove('border')

h2.classList.toggle('purple')

const lis = document.querySelectorAll('li');
for (let li of lis) {
    li.classList.toggle('highlight');
}


document.createElement('img')
    < img >​
const newImage = document.createElement('img');
console.dir(newImg)

document.body.appendChile(newImg)

newH3.innerText = '新規！'

p.append('aaa', 'iii', 'uuu')

##先頭に追加するなら prepend

const newB = document.createElement('b')
newB.append('Helo');
p.prepend('newB')


#h1のしたに何かを下に何かを追加するなら

const h2 = document.createElement('h2')
h2.append('cute apple')
const h1 = document.querySelector('h1')
h1.insertAdjustmentElement('afterend', h2);

const container = document.getElementById('container')
for (let i = 1; i <= 100; i++) {
    const btn = document.createElement('button');
    btn.innerText = 'Hey!';
    container.appendChild(btn)
}


##何かを消すとき

const b = document.querySelector('b')
b.parentElement.removeChild(b)

または、

const img = document.querySelector('img')
img.remove()
