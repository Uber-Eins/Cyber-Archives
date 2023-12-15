let url = $request.url;
let urlQuery = new URLSearchParams(url.search);
urlQuery.set("os", "upos");
urlQuery.delete("mcdnid");
url.search = urlQuery.toString();
url.hostname = $argument;
$done(url);
