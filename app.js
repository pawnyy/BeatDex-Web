const modList = document.querySelector('#mod-list')

// create element and render cafe
function renderMod(doc){
    let li = document.createElement('li');
    let mod_title = document.createElement('span');
    let mod_author = document.createElement('span');
    let mod_vendor = document.createElement('span');
    let linebreak = document.createElement("br")
    // let mod_icon = document.createElement('span');

    var _img=document.createElement('img');

    li.setAttribute('data-id', doc.id);
    mod_title.textContent = doc.data().mod_title

    mod_author.textContent = doc.data().mod_author
    mod_vendor.textContent = doc.data().mod_vendor
    _img.src=doc.data().mod_icon;
    _img.height=90
    _img.id="foo"+doc.id;

    li.appendChild(_img);
    li.appendChild(mod_title);
    li.appendChild(mod_author);
    li.appendChild(linebreak);
    li.appendChild(mod_vendor);

    modList.appendChild(li);
}

db.collection('Mods').get().then((snapshot) =>{
    snapshot.docs.forEach(doc => {
      console.log(doc.data())
      renderMod(doc);
    })
})
