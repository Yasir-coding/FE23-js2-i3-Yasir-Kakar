function e(e,t,n,r,c,o,a,i){let l=document.createElement("h3");l.innerText=e;let u=document.createElement("p");u.innerText=t;let d=document.createElement("p");d.innerText="Price: "+n.toString();let m=document.createElement("p");m.innerText="Rating: "+r.toString();let s=document.createElement("p");s.innerText="Stock: "+c.toString(),c<10&&(s.style.color="red");let p=document.createElement("p");p.innerText="Category: "+o;let h=document.createElement("button");h.innerText="Add to cart";let g=document.createElement("img");g.src=a;let y=document.createElement("div");y.append(l,u,d,m,s,p,h,g),y.classList.add("productCardStyle"),i.append(y)}const t="https://dummyjson.com/products";async function n(){let e=await fetch(t);return(await e.json()).products}async function r(e){let n=t+`/search?q=${e}`,r=await fetch(n);return(await r.json()).products}const c=document.querySelector("#productContainer"),o=document.querySelector("#searchForm");n().then(t=>{for(let n in t)e(t[n].title,t[n].description,t[n].price,t[n].rating,t[n].stock,t[n].category,t[n].thumbnail,c)}),o.addEventListener("submit",t=>{t.preventDefault(),c.innerHTML="",r(document.querySelector("#searchInput").value).then(t=>{for(let n in t.length<=0&&function(e,t){let n=document.createElement("h1");n.innerText=e,t.append(n)}("Product not found",c),t)e(t[n].title,t[n].description,t[n].price,t[n].rating,t[n].stock,t[n].category,t[n].thumbnail,c)})});
//# sourceMappingURL=index.abae2f63.js.map