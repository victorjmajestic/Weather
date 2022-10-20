if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").then(registration => {
        console.log("Service Worker registered properly");
        console.log(registration);
    }).catch(error => {
        console.log("Service Worker failed to register");
        console.log(error);
    })
}