let url = $request.url;
let headers = $request.headers;

url.hostname = $argument;
if (url.protocol === "http:") {
    url.port = "80";
} else if (url.protocol === "https:") {
    url.port = "443";
}

headers["Host"] = $argument;

let urlQuery = new URLSearchParams(url.search);
urlQuery.set("os", "upos");
urlQuery.delete("mcdnid");
url.search = urlQuery.toString();

$done(url,headers);
