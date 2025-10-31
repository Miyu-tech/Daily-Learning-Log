# Daily-Learning-Log 2025/4/12

## 1. Nest
- Put Tags into another Tag for example, put `<p>` into `<div>` so you can make paragraph.

- タグの中に別のタグを入れ子にすることで、文書構造を表現します。 例えば、`<div>` タグの中に `<p>`タグを入れ子にすることで、段落を区切ることができます。


## 2. Section
- Group
- Sectionで囲めばグループ化される


## 3. Code
- **utf-8** = word type　
- **viewpoint** = How does code look like in diferent type of devices
- **width=device=width** = Adapt the side according to devices
- **scale=1** = scale 
- If you put `html:5` you don't need to write all code! But `<meta name="description" content="Smaple text text">` This code doesn't show up so you need to write.


Eg:
`<!DOCTYPE html>`
`<html lang="en ">`
`<head>`
`    <meta charset="UTF-8">`
`    <meta name="viewport" content="width=device-width, initial-scale=1.0">`
`    <title>`Document`</title>`
`    <meta name="description" content="Smaple text text">`
`</head>`
`<body>`
    ここに文章を書く
`</body>`
`</html>`

## 4. Rules
1. **Block-level elements**
- Can include block-level and Inline element
- Eg: Can put `<section>` tag on `<section>`

2. **Inline elements**
- Can put Inline but can't Block-level
- Eg: 
` <span>`
        Text 
        `<span>`Text`</span>`
`</span>`

BUT you can't do this;
` <span>`
        Text 
        `<span>`Text`</span>`
`        <section>` `</section>`
`</span>`
3. **Exception**
- `<h1>``</h1> `= This is Block-level but since this is Header, you can't put another Block-level. On the other hand, `<h1>``<a href=””>`Text`</a>`` </h1>` you can put this because it's URL.
- `<p>``</p>` = Same. This is Block-level but can't put another Block-level because it's paragraph

4. Tags that use together

**`<ul>``<li>``<ol>`**
`<ul> `and `<li>` or `<ol>` and `<li>`
- `<ul>` = Non-order
・Text
・Text
- `<ol>` = Order
1. Text
2. Text


5. `<a target="_blank" href="LINK">`Text`</a>`
- When you click the LINK, the page wil open 
in another tab.

6. **id** amd **class**
- Both are for setting up color/size of fonts

`<h1 id="headline">``Headline`</h1>`
`    <p class="text">`apple`</p>`

   ` <style>`
        `#headline` `{`
            `color: red;`
        `}`
        `.text` `{`
            `color: blue;`
        `}`

-**id** = You can use once for one element

Can: 
 `<div id="header">`ここがヘッダー`</div>`
`<div id="sholder">`もう一つのヘッダー`</div>`

Can't:
`<div id="header">`ここがヘッダー`</div>`
`<div id="header">`もう一つのヘッダー`</div>`

-**class** = You can use for some 

Can:
  `<p class="text">`Text`</p>`
  `<p class="text">`Text`</p>`
  `<a class="text” href="">`Link`</a>`
  `<h2 class="text">`healine2`</h2>`

Note: `<style>` Tag is for deciding color and size of font