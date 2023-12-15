let url = $request.url;
let headers = $request.headers;

url.hostname = $argument;

headers["Host"] = $argument;

let urlQuery = new URLSearchParams(url.search);
urlQuery.set("os", "upos");
urlQuery.delete("mcdnid");
url.search = urlQuery.toString();

$done(url,headers);
