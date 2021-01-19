document.querySelector("div.edi-advertising").remove();
document.querySelector("aside.paywall").remove();
document.querySelector("p.article-text").innerHTML=JSON.parse(document.querySelector("script[type^=application]").textContent).articleBody.replaceAll(". ",".</p><p>")+"</p>";
