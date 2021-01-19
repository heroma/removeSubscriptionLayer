# removeSubscriptionLayer
A simple bookmarklet to remove subscription layer from content news of elDiario.es and load the original article content.

## elDiario.es
Since 2021, this site requires to users create an account to access to some article contents. Without this credentials there are some articles with the first lines published and, just ahead, a layer to get information about the subscription, blocking all the article content.

Please, create an account and subscribe! Follow this link https://usuarios.eldiario.es/hazte_socio 
If you subscribe, another journalism will be possible.

## The bookmarklet
This bookmarklet get the article content from the microdata published inside de HEAD element on a SCRIPT element intended to provide, to the user agents, additional processing information.

That content is formatted into paragrahs and showed instead of the original post without the subscription layer.

Just copy & paste this code on a new bookmark:

```js
javascript:(function(){document.querySelector("div.edi-advertising").remove();document.querySelector("aside.paywall").remove();document.querySelector("p.article-text").innerHTML=JSON.parse(document.querySelector("script[type^=application]").textContent).articleBody.replaceAll(". ",".</p><p>")+"</p>";})();
```


